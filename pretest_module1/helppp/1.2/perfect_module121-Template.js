//Write your student id, firstname, and lastname in a single line comment before starting your program
//students who do not put this comment will get 50% taken off their score.
//ID: 65130500115      Name: Lalita Benjamanukul

class Product {
    // Insert your code here
    constructor(name, description, price, quantity) {
        this.name = name
        this.description = description
        this.price = price
        this.quantity = quantity
    }

    getTotalPrice() {

        if (this.price <= 0 || this.quantity <= 0) {
            return undefined
        }
        return this.price * this.quantity
    }

    sell(quantity) {
        if (this.quantity < quantity || quantity <= 0 || !Number.isInteger(quantity)) {
            return undefined
        }

        this.quantity -= quantity
        return { 'name': this.name, 'quantity': quantity }
    }

    restock(quantity) {
        if (quantity <= 0) {
            return undefined
        }

        this.quantity += quantity
        return this.quantity
    }

    isInStock() {
        if (this.quantity <= 0) {
            return false
        }
        return true
    }

    comparePrice(otherProduct) {
        // if (this.price < otherProduct.price) return -1
        // if (this.price === otherProduct.price) return 0
        // if (this.price > otherProduct.price) return 1
        return this.price - otherProduct.price
    }
}

let product1 = new Product("Apple iPhone 15 pro max 1 tb", "Latest model of iPhone with advanced features", 1000, 50);
let product2 = new Product("Samsung Galaxy S24 Ultra 1 tb", "High-end Android smartphone", 800, 75);
let product3 = new Product("Sony Headphones", "Noise-cancelling over-ear headphones", 200, 150);
let product4 = new Product("Asus Gaming Laptop", "High-performance gaming laptop with latest GPU", 2000, 30);

// Insert your code about using object product by all Methods here

// used method getTotalPrice()
console.log(product1.getTotalPrice());
console.log(product2.getTotalPrice());
console.log(product3.getTotalPrice());
console.log(product4.getTotalPrice());

// used method sell(quantity) 
console.log(product1.sell(55));
console.log(product1.sell(20));
console.log(product1.sell(-20));

// used method restock(quantity)
console.log(product2.restock(25));
console.log(product2.restock(0));
console.log(product2.restock(-5));

// used method isInStock()
console.log(product1.isInStock());
console.log(product2.isInStock());
console.log(product3.isInStock());
console.log(product4.isInStock());

// used method comparePrice(otherProduct)
console.log(product1.comparePrice(product2));
console.log(product3.comparePrice(product2));











