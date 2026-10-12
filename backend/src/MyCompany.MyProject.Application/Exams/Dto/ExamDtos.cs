using System;
using System.Collections.Generic;
using Abp.Application.Services.Dto;

namespace MyCompany.MyProject.Exams.Dto;

public class ExamListDto : EntityDto<int>
{
    public string Title { get; set; }
    public string Description { get; set; }
    public int DurationMinutes { get; set; }
    public int TotalQuestions { get; set; }
    public DateTime CreationTime { get; set; }
}

public class ExamDetailDto : EntityDto<int>
{
    public string Title { get; set; }
    public string Description { get; set; }
    public int DurationMinutes { get; set; }
    public int TotalQuestions { get; set; }
    public List<QuestionGroupDto> QuestionGroups { get; set; } = new();
}

public class QuestionGroupDto : EntityDto<int>
{
    public int PartNumber { get; set; }
    public string PassageTitle { get; set; }
    public string PassageContent { get; set; }
    public string PassageImage { get; set; }
    public int OrderIndex { get; set; }
    public List<QuestionDto> Questions { get; set; } = new();
}

public class QuestionDto : EntityDto<int>
{
    public int QuestionNumber { get; set; }
    public string QuestionText { get; set; }
    public string OptionA { get; set; }
    public string OptionB { get; set; }
    public string OptionC { get; set; }
    public string OptionD { get; set; }
    public string CorrectOption { get; set; }
    public string Explanation { get; set; }
    public int OrderIndex { get; set; }
}

public class ExamImportResultDto
{
    public bool Success { get; set; }
    public int ExamId { get; set; }
    public string ExamTitle { get; set; }
    public int QuestionCount { get; set; }
    public List<string> Errors { get; set; } = new();
}

public class SubmitExamInputDto
{
    public int ExamId { get; set; }
    public string CandidateName { get; set; }
    public int RemainingSeconds { get; set; }
    public Dictionary<int, string> Answers { get; set; } = new(); // QuestionNumber -> "A", "B", "C", "D"
}

public class ExamResultDto
{
    public int AttemptId { get; set; }
    public int ExamId { get; set; }
    public string ExamTitle { get; set; }
    public string CandidateName { get; set; }
    public DateTime SubmittedAt { get; set; }
    public int TimeSpentSeconds { get; set; }
    public int TotalQuestions { get; set; }
    public int CorrectCount { get; set; }
    public int WrongCount { get; set; }
    public int SkippedCount { get; set; }
    public double ScorePercentage { get; set; }
    public List<QuestionResultDto> QuestionResults { get; set; } = new();
}

public class QuestionResultDto
{
    public int QuestionNumber { get; set; }
    public string QuestionText { get; set; }
    public string OptionA { get; set; }
    public string OptionB { get; set; }
    public string OptionC { get; set; }
    public string OptionD { get; set; }
    public string UserOption { get; set; }
    public string CorrectOption { get; set; }
    public bool IsCorrect { get; set; }
    public bool IsSkipped { get; set; }
    public string PassageTitle { get; set; }
    public string PassageContent { get; set; }
}

public class UpdateQuestionDto
{
    public int QuestionId { get; set; }
    public string QuestionText { get; set; }
    public string OptionA { get; set; }
    public string OptionB { get; set; }
    public string OptionC { get; set; }
    public string OptionD { get; set; }
    public string CorrectOption { get; set; }
}
