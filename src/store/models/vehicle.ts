export interface Vehicle {
  id: string
  brand: string
  model: string
  year: number
  price: number
  featuredImage: string
}

export class NoVehicle implements Vehicle {
  readonly id: string
  readonly brand: string
  readonly model: string
  readonly year: number
  readonly price: number
  readonly featuredImage: string

  constructor () {
    this.id = ''
    this.brand = ''
    this.model = ''
    this.year = 0
    this.price = 0
    this.featuredImage = ''
  }
}
