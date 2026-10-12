using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using Abp.Application.Services;
using MyCompany.MyProject.Exams.Dto;

namespace MyCompany.MyProject.Exams;

public interface IExamAppService : IApplicationService
{
    Task<List<ExamListDto>> GetAllExamsAsync();
    Task<ExamDetailDto> GetExamDetailAsync(int examId);
    Task<ExamImportResultDto> ImportExamFromDocxAsync(Stream docxStream);
    Task<ExamResultDto> SubmitExamAsync(SubmitExamInputDto input);
    Task<ExamResultDto> GetExamResultAsync(int attemptId);
    Task UpdateQuestionAsync(UpdateQuestionDto input);
    Task DeleteExamAsync(int examId);
}
