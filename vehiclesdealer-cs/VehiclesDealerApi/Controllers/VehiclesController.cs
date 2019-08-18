using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Queries.Vehicles;

namespace VehiclesDealerApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VehiclesController : ControllerBase
    {
        // GET api/vehicles
        [HttpGet]
        public ActionResult<List<VehicleDto>> Get() {
            var vehicles = new List<VehicleDto> {
                new VehicleDto("1","audi","a1",2019,9999),
                new VehicleDto("2","audi","a1",2019,9999),
                new VehicleDto("3","audi","a1",2019,9999),
                new VehicleDto("4","audi","a1",2019,9999),
                new VehicleDto("5","audi","a1",2019,9999),
                new VehicleDto("6","audi","a1",2019,9999),
                new VehicleDto("7","audi","a1",2019,9999),
                new VehicleDto("8","audi","a1",2019,9999),
                new VehicleDto("9","audi","a1",2019,9999),
                new VehicleDto("10","audi","a1",2019,9999)
            };
            return vehicles;
        }

        // GET api/vehicles/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        // POST api/vehicles
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/vehicles/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/vehicles/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
