using api.Models;
using api.DataAccess;
using MySql.Data.MySqlClient;
using MySql.Data;
using System.Data;

namespace api.Models
{
    public class  CustomerUtility
    {
        public void customerAdd(Customer customer){
            Database db = new Database();
            MySqlConnection con = new MySqlConnection(db.cs);
            con.Open();
            string stm = "insert into customer (firstname, lastname, userid) values ( @firstname, @lastname, (select max(userid) from user));";
            MySqlCommand cmd = new MySqlCommand(stm, con);
            cmd.Parameters.AddWithValue("@firstname", customer.firstname);
            cmd.Parameters.AddWithValue("@lastname", customer.lastname);
            
            cmd.Prepare();
            cmd.ExecuteNonQuery();
            con.Close();
        }
    }
}