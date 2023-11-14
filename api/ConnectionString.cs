namespace mis321_group_project.api
{
    public class ConnectionString
    {
        public string cs {get; set;}

        public ConnectionString()
        {
            string server = "lyn7gfxo996yjjco.cbetxkdyhwsb.us-east-1.rds.amazonaws.com";
            string database = "	j389p0jal1h2a1bk";
            string port = "3306";
            string userName = "v8rdv1d79ya2dkn7";
            string password = "hb696z5ycb2o509d";
            string dateTimeConvert = "True";

            cs = $@"server = {server};user = {userName};database = {database};port = {port};password = {password};Convert Zero Datetime = {dateTimeConvert};";
        }
    }
}