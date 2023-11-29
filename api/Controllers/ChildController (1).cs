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
    public class ChildController : ControllerBase
    {
        // GET: api/User
        [HttpGet]
        public List<Team> Get()
        {
            List<Team> teams = TeamUtility.GetAllTeams();
            return teams;
        }
        // GET: api/User/5
        //[Route("{userName}/{password}")]
        // [HttpGet("{username}/{password}")]
        // public int Get(string nothing)
        // {
            
        // }

        // POST: api/User
        [HttpPost]
        public void Post([FromBody] Child value)
        {
        
        }

        // PUT: api/User
        [HttpPut]
        public void Put([FromBody] Child value)
        {   
            ChildUtility utility = new ChildUtility();
            utility.addPlayerToTeam(value);
        }

        // DELETE: api/User
        [HttpDelete]
        public void Delete([FromBody] Child child)
        {
           ChildUtility.removePlayerFromTeam(child);
        }
    }
}
