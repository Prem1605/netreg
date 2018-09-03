using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RiteRegApi.Models;

namespace RiteRegApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProgramsController : ControllerBase
    {
        [HttpGet]
        public ActionResult<List<NeuroProgram>> GetAll()
        {
            return MockPrograms.Programs.ToList();
        }

        [HttpGet("{id}", Name = "GetProgram")]
        public ActionResult<NeuroProgram> GetById(int id)
        {
            var retval = MockPrograms.Programs.FirstOrDefault(p => p.Id == id);

            if (retval != null){
                return retval;
            }

            return NotFound();
        }
    }

    public static class MockPrograms
    {
        public static List<NeuroProgram> Programs { get; set; } = new List<NeuroProgram>()
        {
            new NeuroProgram{ Id = 11, Name = "University of Alabama" },
            new NeuroProgram{ Id = 12, Name = "Eastern Illinois University" },
            new NeuroProgram{ Id = 13, Name = "University of Wisconsin, Madison" },
            new NeuroProgram{ Id = 14, Name = "University of Minnesota" },
            new NeuroProgram{ Id = 15, Name = "Indiana University" },
            new NeuroProgram{ Id = 16, Name = "Boston College" },
            new NeuroProgram{ Id = 17, Name = "Northwestern Medical School" },
            new NeuroProgram{ Id = 18, Name = "University of Illinois" }
        };
    }
}