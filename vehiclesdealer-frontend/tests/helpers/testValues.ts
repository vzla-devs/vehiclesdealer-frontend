import { Vehicle } from '@/store/models/vehicle'

 const TestValues = {
  vehicle: function (
    id: string = '0',
    brand: string = 'anyBrand',
    model: string = 'anyModel',
    year: number = 2019,
    price: number = 9999,
    imageUrl: string = 'anyUrl'): Vehicle {
    return new Vehicle(id, brand, model, year, price, imageUrl)
  }
}

export { TestValues }
