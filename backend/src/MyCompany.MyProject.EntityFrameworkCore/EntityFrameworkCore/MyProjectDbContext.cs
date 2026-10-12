using Abp.Zero.EntityFrameworkCore;
using MyCompany.MyProject.Authorization.Roles;
using MyCompany.MyProject.Authorization.Users;
using MyCompany.MyProject.MultiTenancy;
using MyCompany.MyProject.Exams;
using Microsoft.EntityFrameworkCore;

namespace MyCompany.MyProject.EntityFrameworkCore;

public class MyProjectDbContext : AbpZeroDbContext<Tenant, Role, User, MyProjectDbContext>
{
    /* Define a DbSet for each entity of the application */
    public DbSet<Exam> Exams { get; set; }
    public DbSet<QuestionGroup> QuestionGroups { get; set; }
    public DbSet<Question> Questions { get; set; }
    public DbSet<UserExamAttempt> UserExamAttempts { get; set; }
    public DbSet<UserAnswer> UserAnswers { get; set; }

    public MyProjectDbContext(DbContextOptions<MyProjectDbContext> options)
        : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<UserAnswer>()
            .HasOne(ua => ua.Question)
            .WithMany()
            .HasForeignKey(ua => ua.QuestionId)
            .OnDelete(DeleteBehavior.Restrict);

        modelBuilder.Entity<UserAnswer>()
            .HasOne(ua => ua.Attempt)
            .WithMany(a => a.UserAnswers)
            .HasForeignKey(ua => ua.AttemptId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}
