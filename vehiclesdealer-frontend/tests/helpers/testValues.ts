import { Vehicle } from '@/store/interfaces/vehicle'

const TestValues = {
  vehicle: function (
    id: string = '0',
    brand: string = 'anyBrand',
    model: string = 'anyModel',
    year: number = 2019,
    price: number = 9999,
    featuredImage: string = 'anyUrl'): Vehicle {
    const vehicle: Vehicle = { id, brand, model, year, price, featuredImage }
    return vehicle
  }
}

export { TestValues }
