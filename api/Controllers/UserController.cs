using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using api.Models;
using Microsoft.VisualBasic;

namespace api.Controllers
{
   [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        // GET: api/User
        [HttpGet]
        public List<User> Get()
        {
            List<User> users = UserUtility.GetAllUsers();
            return users;
        }
        // GET: api/User/5
        //[Route("{userName}/{password}")]
        [HttpGet("{username}/{password}")]
        public int Get(string username, string password)
        {
            UserUtility utility = new UserUtility();
            return utility.GetUserId(username, password);
        }

        // POST: api/User
        [HttpPost]
        public void Post([FromBody] User value)
        {
            UserUtility utility = new UserUtility();
            utility.CreateUser(value);
        }

        // PUT: api/User
        [HttpPut]
        public void Put([FromBody] string nothing)
        {   
           
            
        }

        // DELETE: api/User
        [HttpDelete]
        public void Delete([FromBody] string nothing)
        {
           
           
        }
    }
}
