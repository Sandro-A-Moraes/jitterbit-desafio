export type ItemDB = {
  productId: number
  quantity: number
  price: number
}

export type OrderDB = {
  orderId: string
  value: number
  creationDate: Date
  items: ItemDB[]
}

//Output typing for the database.