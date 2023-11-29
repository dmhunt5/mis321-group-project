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
    public class TeamController : ControllerBase
    {
        // GET: api/User
        [HttpGet]
        public List<Team> Get()
        {
            List<Team> teams = TeamUtility.GetAllTeams();
            return teams;
        }
        //GET: api/User/5
        //[Route("{teamname}/{playername}")]
        [HttpGet("{teamname}")]
        public int Get(string teamname)
        {
            TeamUtility utility = new TeamUtility();
            return utility.GetTeamId(teamname);
            
        }

        // POST: api/User
        [HttpPost]
        public void Post([FromBody] Team value)
        {
            TeamUtility utility = new TeamUtility();
            utility.CreateTeam(value);
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
