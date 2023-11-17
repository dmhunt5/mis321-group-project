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
    public class ExerciseController : ControllerBase
    {
        // GET: api/Exercise
        [HttpGet] 
        public List<Exercise> Get()
        {
            List<Exercise> exercises = ExerciseUtility.GetAllExercises();
            return exercises;
        }
        // GET: api/Exercise/5
        [HttpGet("{id}", Name = "Get")]
        public Exercise Get(int id)
        {
            ExerciseUtility utility = new ExerciseUtility();
            return utility.GetExercise(id);
        }

        // POST: api/Exercise
        [HttpPost]
        public void Post([FromBody] Exercise value)
        {
            ExerciseUtility utility = new ExerciseUtility();
            utility.CreateExercise(value);
        }

        // PUT: api/Exercise
        [HttpPut]
        public void Put([FromBody] Exercise value)
        {   
           
            ExerciseUtility utility = new ExerciseUtility();
            ExerciseUtility.PinExercise(value);
            // Console.Write(value.exerciseid);
            // Console.WriteLine("hiii");
        }

        // DELETE: api/Exercise
        [HttpDelete]
        public void Delete([FromBody] Exercise value)
        {
           
            ExerciseUtility.DeleteExercise(value);
        }
    }
}
