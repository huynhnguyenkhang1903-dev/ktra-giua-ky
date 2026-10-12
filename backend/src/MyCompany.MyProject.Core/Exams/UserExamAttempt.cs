using System;
using System.Collections.Generic;
using Abp.Domain.Entities.Auditing;

namespace MyCompany.MyProject.Exams;

public class UserExamAttempt : FullAuditedEntity<int>
{
    public int ExamId { get; set; }
    public virtual Exam Exam { get; set; }

    public string CandidateName { get; set; }
    public DateTime StartTime { get; set; }
    public DateTime? EndTime { get; set; }

    public int TotalScore { get; set; }
    public int CorrectCount { get; set; }
    public int WrongCount { get; set; }
    public int SkippedCount { get; set; }
    public bool IsCompleted { get; set; }

    public virtual ICollection<UserAnswer> UserAnswers { get; set; } = new List<UserAnswer>();
}
