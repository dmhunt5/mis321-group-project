using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using api.Models;
using api.DataAccess;
using Microsoft.AspNetCore.Cors;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
       // GET: api/User
        // [HttpGet]
        // public List<Customer> Get()
        // {
            
        // }
        //GET: api/User/5
        //[Route("{teamname}/{playername}")]
        // [HttpGet("{teamname}")]
        // public int Get()
        // {
           
            
        // }

        // POST: api/User
        [HttpPost]
        public void Post([FromBody] Employee value)
        {
            EmployeeUtility utility = new EmployeeUtility();
            utility.addEmployee(value);
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
