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

        public static List<Child> GetPlayerNames(int teamid){
            Database db = new Database();
            string cs = db.cs;
            MySqlConnection con = new MySqlConnection(db.cs);
            con.Open();
            List<Child> myPlayers = new List<Child>();
            string stm = "SELECT firstname, lastname from child WHERE teamid = @teamid";
            using MySqlCommand cmd = new MySqlCommand(stm, con);
            cmd.Parameters.AddWithValue("@teamid", teamid);
            using MySqlDataReader rdr = cmd.ExecuteReader();
            while (rdr.Read()){
                Child player = new Child(){
                    firstname = rdr.GetString(0),
                    lastname = rdr.GetString(1)
                };
                myPlayers.Add(player);
                
            }
            con.Close();
            return myPlayers;
        }

        public void createChild(Child child){
            Database db = new Database();
            MySqlConnection con = new MySqlConnection(db.cs);
            con.Open();
            string stm = @"INSERT INTO child(firstname, lastname, dateofbirth, sportid)
            VALUES(@firstname, @lastname, @dateofbirth, @sportid)";
            MySqlCommand cmd = new MySqlCommand(stm, con);
            cmd.Parameters.AddWithValue("@firstname", child.firstname);
            cmd.Parameters.AddWithValue("@lastname", child.lastname);
            cmd.Parameters.AddWithValue("@dateofbirth", child.dateofbirth);
            cmd.Parameters.AddWithValue("@sportid", child.sportid);
            cmd.Prepare();
            cmd.ExecuteNonQuery();
            con.Close();
        }
    }
}