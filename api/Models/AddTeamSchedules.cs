using api.models;
using api.DataAccess;
using MySql.Data.MySqlClient;
using MySql.Data;
using api.Interfaces;
using api.Interfaces;

namespace api.Models
{
    public class AddTeamSchedules : IAddTeamSchedules
    {
        public static void AddTeamScheduleToTable(TeamSchedule teamSchedule)
        {
            try
            {
                Database myConnection = new Database();
                string cs = myConnection.cs;

                using var con = new MySqlConnection(cs);
                con.Open();

                string stm = "insert into TeamSchedules (DateOfGame, TimeOfGame, TeamId, OpponentId) values (@DateOfGame, @TimeOfGame, @TeamId, @OpponentId)";

                using var cmd = new MySqlCommand(stm, con);
                cmd.Parameters.AddWithValue("@DateOfGame", teamSchedule.DateOfGame);
                cmd.Parameters.AddWithValue("@TimeOfGame", teamSchedule.TimeOfGame);
                cmd.Parameters.AddWithValue("@TeamId", teamSchedule.TeamId);
                cmd.Parameters.AddWithValue("@OpponentId", teamSchedule.OpponentId);

                cmd.ExecuteNonQuery();

                con.Close();
            }
            catch(Exception ex)
            {
                System.Console.WriteLine("Error in Adding Event " + ex);
            }
        }

        void IAddTeamSchedules.AddTeamSchedules(TeamSchedule teamSchedule)
        {
            throw new NotImplementedException();
        }
    }
}