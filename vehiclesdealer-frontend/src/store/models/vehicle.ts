export class Vehicle {
  id: string
  brand: string
  model: string
  year: number
  price: number
  imageUrl: string

  constructor (id: string, brand: string, model: string, year: number, price: number, imageUrl: string) {
    this.id = id
    this.brand = brand
    this.model = model
    this.year = year
    this.price = price
    this.imageUrl = imageUrl
  }
}
