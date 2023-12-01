using MySql.Data.MySqlClient;
using MySql.Data;
using System.Data;
using api;
using api.DataAccess;

namespace api.Models
{
    public class UserUtility
    {
        public static List<User> GetAllUsers(){
            Database db = new Database();
            MySqlConnection con = new MySqlConnection(db.cs);
            con.Open();
            
            List<User> myUsers = new List<User>();
            string stm = "SELECT * from User";
            using MySqlCommand cmd = new MySqlCommand(stm, con);
            using (MySqlDataReader rdr = cmd.ExecuteReader())
            {
                while(rdr.Read()){
                   User user = new User(){
                    
                        userid = rdr.GetInt32(0),
                        username = rdr.GetString(1),
                        password = rdr.GetString(2),
                    
                   };
                    myUsers.Add(user);
                }
            }
            
            con.Close();
            return myUsers;
        }

        public int GetUserId(string username, string password){
            Database db = new Database();
            string cs = db.cs;
            MySqlConnection con = new MySqlConnection(db.cs);
            con.Open();
            int userid = 0;
            string stm = "SELECT userid from user WHERE userName = @username and password = @password";
            using MySqlCommand cmd = new MySqlCommand(stm, con);
            cmd.Parameters.AddWithValue("@username", username);
            cmd.Parameters.AddWithValue("@password", password);
            using MySqlDataReader rdr = cmd.ExecuteReader();
            while (rdr.Read()){
                userid = rdr.GetInt32(0);
            };
            con.Close();
            return userid;
        }


        public void CreateUser(User user){
            Database db = new Database();
            MySqlConnection con = new MySqlConnection(db.cs);
            con.Open();
            string stm = @"INSERT INTO user(userid, username, password)
            VALUES(@userid, @username, @password)";
            MySqlCommand cmd = new MySqlCommand(stm, con);
            cmd.Parameters.AddWithValue("@userid", user.userid);
            cmd.Parameters.AddWithValue("@username", user.username);
            cmd.Parameters.AddWithValue("@password", user.password);
            cmd.Prepare();
            cmd.ExecuteNonQuery();
            con.Close();

        }

        
    }
}