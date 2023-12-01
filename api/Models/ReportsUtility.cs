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

        public static List<Reports> getReports(){
            Database db = new Database();
            MySqlConnection con = new MySqlConnection(db.cs);
            con.Open();
            
            List<Reports> myReports = new List<Reports>();
            string stm = "SELECT * from reports";
            using MySqlCommand cmd = new MySqlCommand(stm, con);
            using (MySqlDataReader rdr = cmd.ExecuteReader())
            {
                while(rdr.Read()){
                   Reports reports  = new Reports(){
                        repdate = rdr.GetDateTime(0),
                        bballreg = rdr.GetInt32(1),
                        sballreg= rdr.GetInt32(2),
                        repcomments = rdr.GetString(3)
                   };
                    myReports.Add(reports);
                }
            }
            
            con.Close();
            return myReports;
        }
      
    }
}