using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Abp.Runtime.Validation;
using MyCompany.MyProject.Controllers;
using MyCompany.MyProject.Exams;
using MyCompany.MyProject.Exams.Dto;

namespace MyCompany.MyProject.Web.Controllers;

[IgnoreAntiforgeryToken]
[DisableValidation]
public class ExamController : MyProjectControllerBase
{
    private readonly IExamAppService _examAppService;

    public ExamController(IExamAppService examAppService)
    {
        _examAppService = examAppService;
    }

    // 1. Danh sách đề thi (Admin)
    public async Task<IActionResult> Index()
    {
        var exams = await _examAppService.GetAllExamsAsync();
        return View(exams);
    }

    // 2. Giao diện hiển thị danh sách đề thi cho Users (Người học)
    public async Task<IActionResult> StudentExams()
    {
        var exams = await _examAppService.GetAllExamsAsync();
        return View(exams);
    }

    // 3. Upload file Word tạo đề thi
    [HttpGet]
    public IActionResult Import()
    {
        return View(new ExamImportResultDto());
    }

    [HttpPost]
    public async Task<IActionResult> Import(IFormFile? docxFile)
    {
        if (docxFile == null || docxFile.Length == 0)
        {
            var result = new ExamImportResultDto { Success = false };
            result.Errors.Add("Vui lòng chọn một tập tin Word (.docx) để tải lên.");
            return View(result);
        }

        var ext = Path.GetExtension(docxFile.FileName).ToLower();
        if (ext != ".docx")
        {
            var result = new ExamImportResultDto { Success = false };
            result.Errors.Add("Hệ thống chỉ chấp nhận định dạng file Word (.docx).");
            return View(result);
        }

        using var memoryStream = new MemoryStream();
        await docxFile.CopyToAsync(memoryStream);
        memoryStream.Position = 0;

        var importResult = await _examAppService.ImportExamFromDocxAsync(memoryStream);

        if (!importResult.Success)
        {
            // Trả về giao diện báo lỗi chi tiết cho Giảng viên sửa file
            return View(importResult);
        }

        TempData["SuccessMessage"] = $"Tạo đề thi '{importResult.ExamTitle}' thành công với {importResult.QuestionCount} câu hỏi chuẩn 100%!";
        return RedirectToAction("Details", new { id = importResult.ExamId });
    }

    // 4. Xem trước đề thi đã import
    public async Task<IActionResult> Details(int id)
    {
        var exam = await _examAppService.GetExamDetailAsync(id);
        return View(exam);
    }

    // 5. Chỉnh sửa nội dung đề thi
    public async Task<IActionResult> Edit(int id)
    {
        var exam = await _examAppService.GetExamDetailAsync(id);
        return View(exam);
    }

    [HttpPost]
    public async Task<IActionResult> UpdateQuestion([FromBody] UpdateQuestionDto? input)
    {
        if (input == null || input.QuestionId <= 0)
        {
            return Json(new { success = false, message = "Dữ liệu không hợp lệ." });
        }

        await _examAppService.UpdateQuestionAsync(input);
        return Json(new { success = true, message = "Cập nhật câu hỏi thành công!" });
    }

    // 6. Xóa đề thi
    [HttpPost]
    public async Task<IActionResult> Delete(int id)
    {
        await _examAppService.DeleteExamAsync(id);
        TempData["SuccessMessage"] = "Đã xóa đề thi thành công.";
        return RedirectToAction("Index");
    }

    // 7. Giao diện làm bài thi (Dành cho người học)
    public async Task<IActionResult> Take(int id, string candidateName = "")
    {
        var exam = await _examAppService.GetExamDetailAsync(id);
        ViewBag.CandidateName = string.IsNullOrWhiteSpace(candidateName) ? "Học viên" : candidateName;
        return View(exam);
    }

    // 8. Nộp bài thi
    [HttpPost]
    public async Task<IActionResult> Submit([FromBody] SubmitExamInputDto? input)
    {
        if (input == null || input.ExamId <= 0)
        {
            return Json(new { success = false, message = "Dữ liệu nộp bài không hợp lệ." });
        }

        var result = await _examAppService.SubmitExamAsync(input);
        return Json(new { success = true, attemptId = result.AttemptId, redirectUrl = Url.Action("Result", new { id = result.AttemptId }) });
    }

    // 9. Giao diện hiển thị kết quả bài thi
    public async Task<IActionResult> Result(int id)
    {
        var result = await _examAppService.GetExamResultAsync(id);
        return View(result);
    }
}
