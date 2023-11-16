namespace api.DataAccess
{
    public class Database
    {
       public string cs{get; set;} 
       private string server{get;set;}
       private string dataBase{get;set;}
       private string port{get;set;}
       private string userName {get;set;}
       private string password {get;set;}


        public Database(){
            string server ="acw2033ndw0at1t7.cbetxkdyhwsb.us-east-1.rds.amazonaws.com";
            string database="fv960uqrfmsdprn6";
            string port ="3306";
            string userName="baog8n9gupkcnra4";
            string password ="qp8lbpmlxrpertfm";
            string dateTimeConvert = "True";

            cs=$@"server={server}; user={userName}; database={database}; port={port}; password={password}; Convert Zero Datetime = {dateTimeConvert};";
        }

    }
}