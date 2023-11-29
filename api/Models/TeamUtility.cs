using api.Models;
using api.DataAccess;
using MySql.Data.MySqlClient;
using MySql.Data;
using System.Data;

namespace api.Models
{
    public class TeamUtility
    {
        public void CreateTeam(Team team){
            Database db = new Database();
            MySqlConnection con = new MySqlConnection(db.cs);
            con.Open();
            string stm = @"INSERT INTO team(teamname, sportid)
            VALUES(@teamname, @sportid)";
            MySqlCommand cmd = new MySqlCommand(stm, con);
            cmd.Parameters.AddWithValue("@teamname", team.teamname);
            cmd.Parameters.AddWithValue("@sportid", team.sportid);
            cmd.Prepare();
            cmd.ExecuteNonQuery();
            con.Close();

        }

        public static List<Team> GetAllTeams(){
            Database db = new Database();
            MySqlConnection con = new MySqlConnection(db.cs);
            con.Open();
            
            List<Team> myTeams = new List<Team>();
            string stm = "SELECT * from team";
            using MySqlCommand cmd = new MySqlCommand(stm, con);
            using (MySqlDataReader rdr = cmd.ExecuteReader())
            {
                while(rdr.Read()){
                   Team team  = new Team(){
                    
                        teamname = rdr.GetString(0),
                   };
                    myTeams.Add(team);
                }
            }
            
            con.Close();
            return myTeams;
        }

        public int GetTeamId(string teamname){
            Database db = new Database();
            string cs = db.cs;
            MySqlConnection con = new MySqlConnection(db.cs);
            con.Open();
            int teamid = 0;
            string stm = "SELECT teamid from team WHERE teamname = @teamname";
            using MySqlCommand cmd = new MySqlCommand(stm, con);
            cmd.Parameters.AddWithValue("@teamname", teamname);
            using MySqlDataReader rdr = cmd.ExecuteReader();
            while (rdr.Read()){
                teamid = rdr.GetInt32(0);
            };
            con.Close();
            return teamid;
        }

    }
}