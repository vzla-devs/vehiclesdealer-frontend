using Newtonsoft.Json;

namespace Queries.Vehicles {
    public class VehicleDto {
        public VehicleDto(string brand, string model, int year, float price, string imageUrl) {
            Brand = brand;
            Model = model;
            Year = year;
            Price = price;
            ImageUrl = imageUrl;
        }

        [JsonProperty("brand")]
        public string Brand { get; }
        [JsonProperty("model")]
        public string Model { get; }
        [JsonProperty("year")]
        public int Year { get; }
        [JsonProperty("price")]
        public float Price { get; }
        [JsonProperty("imageUrl")]
        public string ImageUrl { get; }
    }
}
