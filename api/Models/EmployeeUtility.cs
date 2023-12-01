using api.Models;
using api.DataAccess;
using MySql.Data.MySqlClient;
using MySql.Data;
using System.Data;

namespace api.Models
{
    public class EmployeeUtility
    {
        public void addEmployee(Employee employee){
            Database db = new Database();
            MySqlConnection con = new MySqlConnection(db.cs);
            con.Open();
            string stm = "insert into employee (administrator, userid) values ( @administrator, (select max(userid) from user));";
            MySqlCommand cmd = new MySqlCommand(stm, con);
            cmd.Parameters.AddWithValue("@administrator", employee.administrator);
            cmd.Parameters.AddWithValue("@userid", employee.userid);
            
            cmd.Prepare();
            cmd.ExecuteNonQuery();
            con.Close();
        }
    }
}