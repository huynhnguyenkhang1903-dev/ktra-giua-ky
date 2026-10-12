using Abp.Domain.Entities;

namespace MyCompany.MyProject.Exams;

public class Question : Entity<int>
{
    public int QuestionGroupId { get; set; }
    public virtual QuestionGroup QuestionGroup { get; set; }

    public int QuestionNumber { get; set; } // 101 - 200
    public string QuestionText { get; set; }

    public string OptionA { get; set; }
    public string OptionB { get; set; }
    public string OptionC { get; set; }
    public string OptionD { get; set; }

    public string CorrectOption { get; set; } // "A", "B", "C", "D"
    public string Explanation { get; set; }
    public int OrderIndex { get; set; }
}
