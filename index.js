class Product {
  name = ''
  price = 0.0

  constructor(name, price) {
    this.name = name
    this.price = price
  }
}

class User {
  orders = []
  balance = 0

  buy(product) {
    inventory.removeProduct(product)
    this.orders.push(product)
  }

  addBalance(amount) {
    this.balance += amount
  }
}

class PaymentProcessor {
  pay(user, product) {
    if (user.balance < product.price) throw new Error('No funds available')

    user.balance -= product.price
  }
}

class Inventory {
  products = new Map()

  addProduct(product) {
    paymentProcessor.pay(this, product)
    if (!this.products.has(product)) {
      this.products.set(product, 0)
    }
    this.products.set(product, this.products.get(product) + 1)
  }

  removeProduct(product) {
    if (this.products.get(product) == 0) throw new Error('Product is not available')
    this.products.set(product, this.products.get(product) - 1)
  }
}

class Payment {}

const inventory = new Inventory()
const paymentProcessor = new PaymentProcessor()
const camera = new Product('camera', 1000)
inventory.addProduct(camera)
const armagan = new User()

armagan.buy(camera)
armagan.buy(camera)
console.log(armagan)
console.log(inventory)
