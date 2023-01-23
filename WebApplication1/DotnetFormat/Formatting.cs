namespace WebApplication1.DotnetFormat
{
    public class Formatting
    {
        public bool PreferBraces(bool success)
        {
            if (success)
            {
                return true;
            }

            return false;
        }

        public void NewLineBeforeMembersInObjectInitializers()
        {
            var z = new
            {
                A = 3,
                B = 4
            };

        }

        public void VarForBuiltInTypes()
        {
            string s = "hejsvej";
        }
    }
}
