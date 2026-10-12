using System.Collections.Generic;
using Abp.Domain.Entities;

namespace MyCompany.MyProject.Exams;

public class QuestionGroup : Entity<int>
{
    public int ExamId { get; set; }
    public virtual Exam Exam { get; set; }

    public int PartNumber { get; set; } // 5, 6, 7
    public string PassageTitle { get; set; }
    public string PassageContent { get; set; }
    public string PassageImage { get; set; }
    public int OrderIndex { get; set; }

    public virtual ICollection<Question> Questions { get; set; } = new List<Question>();
}
