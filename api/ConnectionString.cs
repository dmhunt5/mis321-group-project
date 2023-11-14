namespace mis321_group_project.api
{
    public class ConnectionString
    {
        public string cs {get; set;}

        public ConnectionString()
        {
            string server = "acw2033ndw0at1t7.cbetxkdyhwsb.us-east-1.rds.amazonaws.com";
            string database = "fv960uqrfmsdprn6";
            string port = "3306";
            string userName = "baog8n9gupkcnra4";
            string password = "qp8lbpmlxrpertfm";
            string dateTimeConvert = "True";

            cs = $@"server = {server};user = {userName};database = {database};port = {port};password = {password};Convert Zero Datetime = {dateTimeConvert};";
        }
    }
}