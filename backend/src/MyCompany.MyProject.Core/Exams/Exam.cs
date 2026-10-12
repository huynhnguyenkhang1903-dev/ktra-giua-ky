using System.Collections.Generic;
using Abp.Domain.Entities.Auditing;

namespace MyCompany.MyProject.Exams;

public class Exam : FullAuditedEntity<int>
{
    public string Title { get; set; }
    public string Description { get; set; }
    public int DurationMinutes { get; set; } = 75;
    public int TotalQuestions { get; set; } = 100;

    public virtual ICollection<QuestionGroup> QuestionGroups { get; set; } = new List<QuestionGroup>();
}
