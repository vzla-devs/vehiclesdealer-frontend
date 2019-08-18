namespace VehiclesDealer.Application.Queries.Vehicles {
    public class VehicleDto {
        public string Id { get; }
        public string Brand { get; }
        public string Model { get; }
        public int Year { get; }
        public float Price { get; }

        public VehicleDto(string id, string brand, string model, int year, float price) {
            Id = id;
            Brand = brand;
            Model = model;
            Year = year;
            Price = price;
        }
    }
}
