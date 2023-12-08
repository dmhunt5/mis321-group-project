using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using api.Models;
using api.DataAccess;
using Microsoft.AspNetCore.Cors;
using Google.Protobuf.WellKnownTypes;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
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
        public void Post([FromBody] Customer value)
        {
            CustomerUtility utility = new CustomerUtility();
            utility.customerAdd(value);
        }

        // PUT: api/User
        [HttpPut]
        public void Put([FromBody] Customer customer)
        {   
            CustomerUtility utility = new CustomerUtility();
            utility.addVolunteer(customer);
        }

        // DELETE: api/User
        [HttpDelete]
        public void Delete([FromBody] string nothing)
        {
           
           
        }
    }
}
