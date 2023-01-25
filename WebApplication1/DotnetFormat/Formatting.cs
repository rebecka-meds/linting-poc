using System.Data;

namespace WebApplication1.DotnetFormat
{
    public class Formatting
    {
        private readonly int _member;
        public bool PreferBraces(bool success)
        {
            if (success)
            {
                return true;
            }

            return false;
        }

        public void VarForBuiltInTypes()
        {
            string s = "hejsvej";
        }
    }

    public class Dummy
    {
        public string Name { get; set; }
    }
}
