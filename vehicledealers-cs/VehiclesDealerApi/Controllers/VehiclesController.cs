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
                new VehicleDto(
                    "audi",
                    "a1",
                    2019,
                    9999,
                    "https://images.pexels.com/photos/38637/car-audi-auto-automotive-38637.jpeg?cs=srgb&dl=asphalt-audi-automobile-38637.jpg&fm=jpg"
                ),
                new VehicleDto(
                    "audi",
                    "a1",
                    2019,
                    9999,
                    "https://images.pexels.com/photos/38637/car-audi-auto-automotive-38637.jpeg?cs=srgb&dl=asphalt-audi-automobile-38637.jpg&fm=jpg"
                ),
                new VehicleDto(
                    "audi",
                    "a1",
                    2019,
                    9999,
                    "https://images.pexels.com/photos/38637/car-audi-auto-automotive-38637.jpeg?cs=srgb&dl=asphalt-audi-automobile-38637.jpg&fm=jpg"
                ),
                new VehicleDto(
                    "audi",
                    "a1",
                    2019,
                    9999,
                    "https://images.pexels.com/photos/38637/car-audi-auto-automotive-38637.jpeg?cs=srgb&dl=asphalt-audi-automobile-38637.jpg&fm=jpg"
                ),
                new VehicleDto(
                    "audi",
                    "a1",
                    2019,
                    9999,
                    "https://images.pexels.com/photos/38637/car-audi-auto-automotive-38637.jpeg?cs=srgb&dl=asphalt-audi-automobile-38637.jpg&fm=jpg"
                ),
                new VehicleDto(
                    "audi",
                    "a1",
                    2019,
                    9999,
                    "https://images.pexels.com/photos/38637/car-audi-auto-automotive-38637.jpeg?cs=srgb&dl=asphalt-audi-automobile-38637.jpg&fm=jpg"
                ),
                new VehicleDto(
                    "audi",
                    "a1",
                    2019,
                    9999,
                    "https://images.pexels.com/photos/38637/car-audi-auto-automotive-38637.jpeg?cs=srgb&dl=asphalt-audi-automobile-38637.jpg&fm=jpg"
                ),
                new VehicleDto(
                    "audi",
                    "a1",
                    2019,
                    9999,
                    "https://images.pexels.com/photos/38637/car-audi-auto-automotive-38637.jpeg?cs=srgb&dl=asphalt-audi-automobile-38637.jpg&fm=jpg"
                )
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
