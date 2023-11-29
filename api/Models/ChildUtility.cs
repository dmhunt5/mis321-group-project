using api.Models;
using api.DataAccess;
using MySql.Data.MySqlClient;
using MySql.Data;
using System.Data;

namespace api.Models
{
    public class ChildUtility
    {
        
        // public void addPlayerToTeam(){
        //     Database db = new Database();
        //     MySqlConnection con = new MySqlConnection(db.cs);
        //     con.Open();
        //     string stm = @"INSERT INTO child(teamid)
        //     VALUES(@teamname, @sportid)";
        //     MySqlCommand cmd = new MySqlCommand(stm, con);
        //     cmd.Parameters.AddWithValue("@teamid", team.teamid);
        //     cmd.Prepare();
        //     cmd.ExecuteNonQuery();
        //     con.Close();
        //}
    }
}