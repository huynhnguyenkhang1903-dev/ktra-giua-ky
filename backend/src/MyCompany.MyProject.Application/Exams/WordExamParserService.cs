using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Xml.Linq;
using MyCompany.MyProject.Exams.Dto;

namespace MyCompany.MyProject.Exams;

public class ParsedExamModel
{
    public string Title { get; set; }
    public string Description { get; set; }
    public int DurationMinutes { get; set; } = 75;
    public int TotalQuestions { get; set; } = 100;
    public List<ParsedGroupModel> Groups { get; set; } = new();
}

public class ParsedGroupModel
{
    public int PartNumber { get; set; }
    public string PassageTitle { get; set; }
    public string PassageContent { get; set; }
    public string PassageImage { get; set; }
    public int OrderIndex { get; set; }
    public List<ParsedQuestionModel> Questions { get; set; } = new();
}

public class ParsedQuestionModel
{
    public int QuestionNumber { get; set; }
    public string QuestionText { get; set; }
    public string OptionA { get; set; }
    public string OptionB { get; set; }
    public string OptionC { get; set; }
    public string OptionD { get; set; }
    public string CorrectOption { get; set; }
    public int OrderIndex { get; set; }
}

public static class WordExamParserService
{
    public static (ParsedExamModel Model, List<string> Errors) ParseAndValidateDocx(Stream docxStream)
    {
        var errors = new List<string>();
        var fullText = new StringBuilder();

        try
        {
            using var archive = new ZipArchive(docxStream, ZipArchiveMode.Read, leaveOpen: true);
            var entry = archive.GetEntry("word/document.xml");
            if (entry == null)
            {
                errors.Add("Tập tin không phải là tài liệu Word (.docx) hợp lệ (thiếu word/document.xml).");
                return (null, errors);
            }

            using var entryStream = entry.Open();
            var doc = XDocument.Load(entryStream);
            XNamespace w = "http://schemas.openxmlformats.org/wordprocessingml/2006/main";

            foreach (var p in doc.Descendants(w + "p"))
            {
                var text = string.Concat(p.Descendants(w + "t").Select(t => (string)t));
                if (!string.IsNullOrWhiteSpace(text))
                {
                    fullText.AppendLine(text.Trim());
                }
            }
        }
        catch (Exception ex)
        {
            errors.Add($"Lỗi khi đọc file Word: {ex.Message}");
            return (null, errors);
        }

        var content = fullText.ToString();

        // 1. Validate Tags tồn tại
        if (!content.Contains("[TEST_NAME]") || !content.Contains("[/TEST_NAME]"))
        {
            errors.Add("Thiếu thẻ định dạng tên đề thi: [TEST_NAME] ... [/TEST_NAME]");
        }

        var testNameMatch = Regex.Match(content, @"\[TEST_NAME\](.*?)\[/TEST_NAME\]", RegexOptions.Singleline | RegexOptions.IgnoreCase);
        var testName = testNameMatch.Success ? testNameMatch.Groups[1].Value.Trim() : "Đề thi TOEIC Reading";

        var durationMatch = Regex.Match(content, @"\[DURATION\](.*?)\[/DURATION\]", RegexOptions.Singleline | RegexOptions.IgnoreCase);
        int duration = 75;
        if (durationMatch.Success && int.TryParse(durationMatch.Groups[1].Value.Trim(), out var d))
        {
            duration = d;
        }

        var examModel = new ParsedExamModel
        {
            Title = testName,
            Description = "Bài thi TOEIC Reading chuẩn cấu trúc gồm 3 phần: Part 5, Part 6 và Part 7.",
            DurationMinutes = duration,
            TotalQuestions = 100
        };

        // Parse Part 5
        var part5Match = Regex.Match(content, @"\[PART\s*5\](.*?)\[/PART\s*5\]", RegexOptions.Singleline | RegexOptions.IgnoreCase);
        if (!part5Match.Success)
        {
            errors.Add("Thiếu định dạng thẻ phần 1: [PART 5] ... [/PART 5]");
        }
        else
        {
            var p5Content = part5Match.Groups[1].Value;
            var qGroup5 = new ParsedGroupModel
            {
                PartNumber = 5,
                PassageTitle = "Part 5 - Incomplete Sentences",
                PassageContent = "Directions: A word or phrase is missing in each of the sentences below. Four answer choices are given below each sentence. Select the best answer to complete the sentence.",
                OrderIndex = 1
            };

            var questions = ParseQuestions(p5Content, 5, errors);
            qGroup5.Questions = questions;
            examModel.Groups.Add(qGroup5);
        }

        // Parse Part 6
        var part6Match = Regex.Match(content, @"\[PART\s*6\](.*?)\[/PART\s*6\]", RegexOptions.Singleline | RegexOptions.IgnoreCase);
        if (!part6Match.Success)
        {
            errors.Add("Thiếu định dạng thẻ phần 2: [PART 6] ... [/PART 6]");
        }
        else
        {
            var p6Content = part6Match.Groups[1].Value;
            var groupMatches = Regex.Matches(p6Content, @"\[GROUP\](.*?)\[/GROUP\]", RegexOptions.Singleline | RegexOptions.IgnoreCase);
            if (groupMatches.Count == 0)
            {
                errors.Add("Part 6 không có nhóm câu hỏi [GROUP] ... [/GROUP] nào.");
            }
            int groupIndex = 2;
            foreach (Match gm in groupMatches)
            {
                var gText = gm.Groups[1].Value;
                var (group, groupErrors) = ParseGroup(gText, 6, groupIndex++, errors);
                examModel.Groups.Add(group);
            }
        }

        // Parse Part 7
        var part7Match = Regex.Match(content, @"\[PART\s*7\](.*?)\[/PART\s*7\]", RegexOptions.Singleline | RegexOptions.IgnoreCase);
        if (!part7Match.Success)
        {
            errors.Add("Thiếu định dạng thẻ phần 3: [PART 7] ... [/PART 7]");
        }
        else
        {
            var p7Content = part7Match.Groups[1].Value;
            var groupMatches = Regex.Matches(p7Content, @"\[GROUP\](.*?)\[/GROUP\]", RegexOptions.Singleline | RegexOptions.IgnoreCase);
            if (groupMatches.Count == 0)
            {
                errors.Add("Part 7 không có nhóm câu hỏi [GROUP] ... [/GROUP] nào.");
            }
            int groupIndex = 10;
            foreach (Match gm in groupMatches)
            {
                var gText = gm.Groups[1].Value;
                var (group, groupErrors) = ParseGroup(gText, 7, groupIndex++, errors);
                examModel.Groups.Add(group);
            }
        }

        // Validate Toàn bộ câu hỏi & Số thứ tự
        var allQuestions = examModel.Groups.SelectMany(g => g.Questions).OrderBy(q => q.QuestionNumber).ToList();
        if (allQuestions.Count == 0)
        {
            errors.Add("Không tìm thấy câu hỏi nào trong đề thi.");
            return (null, errors);
        }

        // Kiểm tra số thứ tự câu
        var qNumbers = allQuestions.Select(q => q.QuestionNumber).ToList();
        var duplicates = qNumbers.GroupBy(x => x).Where(g => g.Count() > 1).Select(g => g.Key).ToList();
        if (duplicates.Any())
        {
            errors.Add($"Phát hiện các câu hỏi trùng số thứ tự: {string.Join(", ", duplicates)}");
        }

        int expectedStart = 101;
        int expectedEnd = 200;
        var missingNumbers = new List<int>();
        for (int i = expectedStart; i <= expectedEnd; i++)
        {
            if (!qNumbers.Contains(i))
            {
                missingNumbers.Add(i);
            }
        }
        if (missingNumbers.Any())
        {
            errors.Add($"Thiếu các câu hỏi theo chuẩn thứ tự (101-200): {string.Join(", ", missingNumbers)}");
        }

        if (allQuestions.Count != 100)
        {
            errors.Add($"Tổng số câu hỏi không đủ 100 câu theo chuẩn TOEIC Reading (hiện có: {allQuestions.Count} câu).");
        }

        // Kiểm tra từng câu hỏi có đủ 4 đáp án và đáp án đúng
        foreach (var q in allQuestions)
        {
            if (string.IsNullOrWhiteSpace(q.OptionA)) errors.Add($"Câu {q.QuestionNumber} thiếu đáp án (A).");
            if (string.IsNullOrWhiteSpace(q.OptionB)) errors.Add($"Câu {q.QuestionNumber} thiếu đáp án (B).");
            if (string.IsNullOrWhiteSpace(q.OptionC)) errors.Add($"Câu {q.QuestionNumber} thiếu đáp án (C).");
            if (string.IsNullOrWhiteSpace(q.OptionD)) errors.Add($"Câu {q.QuestionNumber} thiếu đáp án (D).");

            if (string.IsNullOrWhiteSpace(q.CorrectOption))
            {
                errors.Add($"Câu {q.QuestionNumber} thiếu thẻ [ANSWER].");
            }
            else
            {
                var normAns = q.CorrectOption.Trim().ToUpper();
                if (normAns != "A" && normAns != "B" && normAns != "C" && normAns != "D")
                {
                    errors.Add($"Câu {q.QuestionNumber} đáp án đúng không hợp lệ: '{q.CorrectOption}' (chỉ chấp nhận A, B, C hoặc D).");
                }
                else
                {
                    q.CorrectOption = normAns;
                }
            }
        }

        if (errors.Any())
        {
            return (null, errors);
        }

        examModel.TotalQuestions = allQuestions.Count;
        return (examModel, errors);
    }

    private static (ParsedGroupModel Group, List<string> Errors) ParseGroup(string text, int partNumber, int orderIndex, List<string> errors)
    {
        var titleMatch = Regex.Match(text, @"\[PASSAGE_TITLE\](.*?)\[/PASSAGE_TITLE\]", RegexOptions.Singleline | RegexOptions.IgnoreCase);
        var title = titleMatch.Success ? titleMatch.Groups[1].Value.Trim() : $"Part {partNumber} Reading Group";

        var passageMatch = Regex.Match(text, @"\[PASSAGE\](.*?)\[/PASSAGE\]", RegexOptions.Singleline | RegexOptions.IgnoreCase);
        var passage = passageMatch.Success ? passageMatch.Groups[1].Value.Trim() : "";

        var imgMatch = Regex.Match(text, @"\[IMAGE\](.*?)\[/IMAGE\]", RegexOptions.Singleline | RegexOptions.IgnoreCase);
        var image = imgMatch.Success ? imgMatch.Groups[1].Value.Trim() : null;

        var group = new ParsedGroupModel
        {
            PartNumber = partNumber,
            PassageTitle = title,
            PassageContent = passage,
            PassageImage = image,
            OrderIndex = orderIndex,
            Questions = ParseQuestions(text, partNumber, errors)
        };

        if (string.IsNullOrWhiteSpace(group.PassageContent) && string.IsNullOrWhiteSpace(group.PassageImage))
        {
            errors.Add($"Nhóm đọc '{group.PassageTitle}' thuộc Part {partNumber} thiếu nội dung bài đọc [PASSAGE] hoặc [IMAGE].");
        }

        if (group.Questions.Count == 0)
        {
            errors.Add($"Nhóm đọc '{group.PassageTitle}' thuộc Part {partNumber} không chứa câu hỏi nào.");
        }

        return (group, errors);
    }

    private static List<ParsedQuestionModel> ParseQuestions(string text, int partNumber, List<string> errors)
    {
        var list = new List<ParsedQuestionModel>();
        var qMatches = Regex.Matches(text, @"\[QUESTION\](.*?)\[/QUESTION\]", RegexOptions.Singleline | RegexOptions.IgnoreCase);

        int order = 1;
        foreach (Match qm in qMatches)
        {
            var qText = qm.Groups[1].Value;

            var numMatch = Regex.Match(qText, @"\[NUM\](.*?)\[/NUM\]", RegexOptions.Singleline | RegexOptions.IgnoreCase);
            int qNum = 0;
            if (numMatch.Success && int.TryParse(numMatch.Groups[1].Value.Trim(), out var parsedNum))
            {
                qNum = parsedNum;
            }
            else
            {
                errors.Add($"Phát hiện câu hỏi không có số thứ tự hợp lệ: [NUM] ... [/NUM] trong Part {partNumber}");
            }

            var textMatch = Regex.Match(qText, @"\[TEXT\](.*?)\[/TEXT\]", RegexOptions.Singleline | RegexOptions.IgnoreCase);
            var questionBody = textMatch.Success ? textMatch.Groups[1].Value.Trim() : "";

            var aMatch = Regex.Match(qText, @"\[A\](.*?)\[/A\]", RegexOptions.Singleline | RegexOptions.IgnoreCase);
            var bMatch = Regex.Match(qText, @"\[B\](.*?)\[/B\]", RegexOptions.Singleline | RegexOptions.IgnoreCase);
            var cMatch = Regex.Match(qText, @"\[C\](.*?)\[/C\]", RegexOptions.Singleline | RegexOptions.IgnoreCase);
            var dMatch = Regex.Match(qText, @"\[D\](.*?)\[/D\]", RegexOptions.Singleline | RegexOptions.IgnoreCase);
            var ansMatch = Regex.Match(qText, @"\[ANSWER\](.*?)\[/ANSWER\]", RegexOptions.Singleline | RegexOptions.IgnoreCase);

            var q = new ParsedQuestionModel
            {
                QuestionNumber = qNum,
                QuestionText = questionBody,
                OptionA = aMatch.Success ? aMatch.Groups[1].Value.Trim() : "",
                OptionB = bMatch.Success ? bMatch.Groups[1].Value.Trim() : "",
                OptionC = cMatch.Success ? cMatch.Groups[1].Value.Trim() : "",
                OptionD = dMatch.Success ? dMatch.Groups[1].Value.Trim() : "",
                CorrectOption = ansMatch.Success ? ansMatch.Groups[1].Value.Trim() : "",
                OrderIndex = order++
            };

            list.Add(q);
        }

        return list;
    }
}
