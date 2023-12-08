using MySql.Data.MySqlClient;
using MySql.Data;   
using api.Interfaces;
using api.models;
using api.DataAccess;
using Microsoft.CodeAnalysis.CSharp.Syntax;

namespace api.DataAccess
{
    public class GetTeamSchedules : IGetTeamSchedules
    {

        public List<TeamSchedule> GetTeamSchedulesFromTable()
        {
            Database myConnection = new Database();
            string cs = myConnection.cs;

            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = @"select * from teamschedules";

            using var cmd = new MySqlCommand(stm, con);

            MySqlDataReader reader = cmd.ExecuteReader();
            List<TeamSchedule> teamSchedules = new List<TeamSchedule>();

            while(reader.Read())
            {
                TeamSchedule teamSchedule = new TeamSchedule();
                teamSchedule.GameId = reader.GetInt16("gameid");
                teamSchedule.DateOfGame = reader.GetString("dateofgame");
                teamSchedule.TimeOfGame = reader.GetString("timeofgame");
                teamSchedule.TeamId = reader.GetInt16("teamid");
                teamSchedule.OpponentId = reader.GetInt16("opponentid");
                teamSchedules.Add(teamSchedule);
            }

            con.Close();

            return teamSchedules;

        }

        void IGetTeamSchedules.GetTeamSchedules(List<TeamSchedule> teamSchedules)
        {
            throw new NotImplementedException();
        }
    }
}