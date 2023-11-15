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
            string server =" ";
            string database=" ";
            string port =" ";
            string userName=" ";
            string password =" ";

            cs=$@"server={server}; user={userName}; database={database}; port={port}; password={password}";
        }

    }
}