using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using api.interfaces;
using api.models;
using api.DataAccess;

namespace api.controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeamSchedulesController : ControllerBase
    {
        // GET: api/TeamSchedules
        [HttpGet]
        public List<TeamSchedule> Get()
        {
            GetTeamSchedules teamScheduleList = new GetTeamSchedules();
            List<TeamSchedule> teamSchedules = teamScheduleList.GetTeamSchedulesFromTable();
            return teamSchedules;
        }

        // GET: api/TeamSchedules/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/TeamSchedules
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/TeamSchedules/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/TeamSchedules/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
