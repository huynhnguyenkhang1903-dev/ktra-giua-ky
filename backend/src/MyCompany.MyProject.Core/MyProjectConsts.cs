using MyCompany.MyProject.Debugging;

namespace MyCompany.MyProject;

public class MyProjectConsts
{
    public const string LocalizationSourceName = "MyProject";

    public const string ConnectionStringName = "Default";

    public const bool MultiTenancyEnabled = true;


    /// <summary>
    /// Default pass phrase for SimpleStringCipher decrypt/encrypt operations
    /// </summary>
    public static readonly string DefaultPassPhrase =
        DebugHelper.IsDebug ? "gsKxGZ012HLL3MI5" : "73b860e7dcb7428796c88d76945211a2";
}
