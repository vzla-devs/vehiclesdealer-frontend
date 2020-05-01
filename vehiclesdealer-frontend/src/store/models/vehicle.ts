export interface Vehicle {
  id: string
  brand: string
  model: string
  year: number
  price: number
  featuredImage: string
}

export class NoVehicle implements Vehicle {
  id: string
  brand: string
  model: string
  year: number
  price: number
  featuredImage: string

  constructor () {
    this.id = ''
    this.brand = ''
    this.model = ''
    this.year = 0
    this.price = 0
    this.featuredImage = ''
  }
}
