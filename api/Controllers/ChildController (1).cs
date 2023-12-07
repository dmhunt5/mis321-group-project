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
        //GET: api/User/5
        //[Route("{teamid}")]
        // [HttpGet("{teamid}")]
        // public int Get(int value)
        // {
        //     ChildUtility utility = new ChildUtility();
        //     List<Child> players = utility.GetPlayerNames(value);
        //     return players;
        // }

        // POST: api/User
        [HttpPost]
        public void Post([FromBody] Child value)
        {
            ChildUtility utility = new ChildUtility();
            utility.createChild(value);
            
        }

        // PUT: api/User
        [HttpPut]
        public void Put([FromBody] Child value)
        {   Console.WriteLine("here");
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
