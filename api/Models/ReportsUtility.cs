using api.Models;
using api.DataAccess;
using MySql.Data.MySqlClient;
using MySql.Data;
using System.Data;

namespace api.Models
{
    public class ReportsUtility
    {
       
        public void createReport(Reports report){
            Database db = new Database();
            MySqlConnection con = new MySqlConnection(db.cs);
            con.Open();
            string stm = @"INSERT INTO reports(repdate, bballreg, sballreg, repcomments)
            VALUES(@repdate, @bballreg, @sballreg, @repcomments)";
            MySqlCommand cmd = new MySqlCommand(stm, con);
            cmd.Parameters.AddWithValue("@repdate", report.repdate);
            cmd.Parameters.AddWithValue("@bballreg", report.bballreg);
            cmd.Parameters.AddWithValue("@sballreg", report.sballreg);
            cmd.Parameters.AddWithValue("@repcomments", report.repcomments);
            cmd.Prepare();
            cmd.ExecuteNonQuery();
            con.Close();
        }
      
    }
}