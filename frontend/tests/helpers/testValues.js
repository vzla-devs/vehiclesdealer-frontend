function vehicle ({
  id = '0',
  brand = 'anyBrand',
  model = 'anyModel',
  year = 2019,
  price = 9999,
  imageUrl = 'anyUrl'
} = {}) {
  return { id, brand, model, year, price, imageUrl }
}

export default {
  vehicle
}
