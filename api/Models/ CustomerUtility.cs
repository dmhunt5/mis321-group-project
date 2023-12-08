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

        public void addVolunteer(Customer customer){
            Database db = new Database();
            MySqlConnection con = new MySqlConnection(db.cs);
            con.Open();
            string stm = "UPDATE customer set volunteerrole = @volunteerrole, gameid = @gameId, sportid = @sportid WHERE firstname = @firstname and lastname = @lastname;";
            MySqlCommand cmd = new MySqlCommand(stm, con);
            cmd.Parameters.AddWithValue("@volunteerrole", customer.volunteerrole);
            cmd.Parameters.AddWithValue("@gameid", customer.gameid);
            cmd.Parameters.AddWithValue("@sportid", customer.sportid);
            cmd.Parameters.AddWithValue("@customerid", customer.customerid);
            cmd.Parameters.AddWithValue("@firstname", customer.firstname);
            cmd.Parameters.AddWithValue("@lastname", customer.lastname);
            cmd.Prepare();
            cmd.ExecuteNonQuery();
            con.Close();
        }
    }
}