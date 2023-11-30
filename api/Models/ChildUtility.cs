using api.Models;
using api.DataAccess;
using MySql.Data.MySqlClient;
using MySql.Data;
using System.Data;

namespace api.Models
{
    public class ChildUtility
    {
        public void addPlayerToTeam(Child child){
            Database db = new Database();
            MySqlConnection con = new MySqlConnection(db.cs);
            con.Open();
            string stm ="UPDATE child SET teamid = @teamid WHERE firstname = @firstname AND lastname = @lastname";
            MySqlCommand cmd = new MySqlCommand(stm, con);
            cmd.Parameters.AddWithValue("@teamid", child.teamid);
            cmd.Parameters.AddWithValue("@firstname", child.firstname);
            cmd.Parameters.AddWithValue("@lastname", child.lastname);
            cmd.Prepare();
            cmd.ExecuteNonQuery();
            con.Close();
        }

        public static void removePlayerFromTeam(Child child){
            Database db = new Database();
            MySqlConnection con = new MySqlConnection(db.cs);
            con.Open();
            string stm =@"UPDATE child SET teamid = null WHERE firstname = @firstname and lastname = @lastname;";
            MySqlCommand cmd = new MySqlCommand(stm, con);
            cmd.Parameters.AddWithValue("@teamid", child.teamid);
            cmd.Parameters.AddWithValue("@firstname", child.firstname);
            cmd.Parameters.AddWithValue("@lastname", child.lastname);
            cmd.Prepare();
            cmd.ExecuteNonQuery();
            con.Close();

        }

        public static void GetPlayerNames(){
            
        }
    }
}