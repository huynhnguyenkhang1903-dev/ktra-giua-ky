using Abp.Domain.Entities;

namespace MyCompany.MyProject.Exams;

public class UserAnswer : Entity<int>
{
    public int AttemptId { get; set; }
    public virtual UserExamAttempt Attempt { get; set; }

    public int QuestionId { get; set; }
    public virtual Question Question { get; set; }

    public int QuestionNumber { get; set; }
    public string SelectedOption { get; set; } // "A", "B", "C", "D" or null
    public bool IsCorrect { get; set; }
}
