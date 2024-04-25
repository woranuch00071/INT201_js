//ID: 65130500113 | Name: Mantana Kodcharin

class Order {
  constructor(orderId, customerName) {
    this.items = []
  }

  addItem(item) {
    if (!item.name || !item.price || item.price < 0 || item.quantity < 0) {
      return -1
    }
    return this.items.push(item)
  }

  removeItem(itemName) {
    const matchItem = this.items.find((item) => item.name.toLowerCase() === itemName.toLowerCase())
    if (matchItem) {
      this.items.splice(matchItem, 1)
    }
  }

  calculateTotal() {
    //total = price * qty
    // this.items.forEach(item => {
    //   item.price * item.quantity
    // });
    this.items.forEach(item => {
      item.price * item.quantity
    });
    const total = this.items.price * this.items.quantity
    return total

    
  }

  getDiscountedTotal(discountPercentage) {
    if (discountPercentage <= 0 || discountPercentage > 100) {
      return 'invalid discount percentage'
    }
    // this.items.price * this.items.quantity
    const getDiscount = 100 * discountPercentage / 100
    return getDiscount
  }

  //Returns the first matching item by name from a collection, or null
  // if none match.
  findItemByName(itemName) {
    if (!itemName || itemName === undefined || itemName === null) {
      return null
    } else {
      const findItem = this.items.find((item) => item.name.toLowerCase() === itemName.toLowerCase())
      return findItem
    }
  }

  sortItemsByPrice(sortingOrder) {
    // ascending น้อย-มาก
    // descending มาก-น้อย
    if (sortingOrder = 'ascending') {
      return this.items.price.sort((a, b) => a.price - b.price)
    }
    else if (sortingOrder = 'descending') {
      return this.items.price.sort((a, b) => b.price - a.price)
    }
    else {
      return []
    }
  }

  isItem(Item) {
    if (!Item || !Item.name || !Item.price || !Item.quantity || Item.price < 0 || Item.quantity < 0) {
      return false
    } else {
      return true
    }
  }
}

let myOrder = new Order(1, "John Wick");

console.log(
  "add item----------------------------------------------------------------"
);
//add item
console.log(myOrder.addItem({ name: "Laptop", price: 1000, quantity: 1 })); // Adds Laptop and return this item
console.log(myOrder.addItem({ name: "Keyboard", price: 100, quantity: 2 })); // Adds Keyboard and return this item
console.log(myOrder.addItem({ name: "Mouse", price: 25, quantity: 3 })); // Adds Mouse and return this item
console.log(myOrder.addItem({ name: "", price: 100, quantity: 1 })); // Empty name, should not add and return -1
console.log(myOrder.addItem({ name: "Headphones", price: -50, quantity: 1 })); // Negative price, should not add and return -1

// console.log();
// console.log(
//   "remove item----------------------------------------------------------------"
// );
// //remove item
// myOrder.removeItem("Laptop"); // Removes Laptop if it exists
// console.log(myOrder.items);

// myOrder.removeItem("Keyboard"); // Removes Keyboard if it exists
// console.log(myOrder.items);

// myOrder.removeItem("NonExistentItem"); // Tries to remove a non-existent item
// console.log(myOrder.items);

// myOrder.removeItem(""); // Tries to remove an item with an empty name
// console.log(myOrder.items);

// myOrder.removeItem("Mouse"); // Removes Mouse if it exists
// console.log(myOrder.items);

console.log();
console.log(
  "calculateTotal----------------------------------------------------------------"
);
//calculateTotal
console.log(myOrder.calculateTotal());

console.log();
console.log(
  "getDiscountedTotal----------------------------------------------------------------"
);
//getDiscountedTotal
console.log(myOrder.getDiscountedTotal(10)); // Applies 10% discount if total price is 100 will return 90
console.log(myOrder.getDiscountedTotal(0)); // No discount applied (0%) return “invalid discount percentage”
console.log(myOrder.getDiscountedTotal(100)); // Applies 100% discount if total price is 100 will return 0
console.log(myOrder.getDiscountedTotal(-10)); // Negative discount percentage, should not apply return “invalid discount percentage”
console.log(myOrder.getDiscountedTotal(150)); // Negative discount percentage, should not apply return “invalid discount percentage”

console.log();
console.log(
  "findItemByName----------------------------------------------------------------"
);
//findItemByName
console.log(myOrder.findItemByName("Laptop")); // Finds Laptop if it exists
console.log(myOrder.findItemByName("Keyboard")); // Finds Keyboard if it exists
console.log(myOrder.findItemByName("NonExistentItem")); // Tries to find a non-existent item return null
console.log(myOrder.findItemByName("")); // Tries to find an item with an empty name return null

console.log();
console.log(
  "sortItemsByPrice----------------------------------------------------------------"
);
//sortItemsByPrice

console.log(myOrder.sortItemsByPrice("ascending")); // return new array with ascending
console.log(myOrder.sortItemsByPrice("descending")); // return new array with descending
console.log(myOrder.sortItemsByPrice("nonexistentOrder")); // return empty array if invalid sorting order
myOrder.items = [];
console.log(myOrder.sortItemsByPrice("ascending")); // return empty array if items array is empty

console.log();
console.log(
  "isItem----------------------------------------------------------------"
);
//isItem
console.log(myOrder.isItem({ name: "Pen", price: 3, quantity: 10 })); // valid item return true
console.log(myOrder.isItem({ name: "Paper", price: 5, quantity: 20 })); // valid item return true
console.log(myOrder.isItem(null)); // valid item return false
console.log(myOrder.isItem(undefined)); // valid item return false
console.log(myOrder.isItem({ price: 20, quantity: 1 })); // missing name return false
console.log(myOrder.isItem({ name: "Notebook", price: -10, quantity: 5 })); // negative price return false
console.log(myOrder.isItem({ name: "Notebook", price: 10, quantity: -5 })); // negative quantity return false
console.log(myOrder.isItem({ name: "", price: 15, quantity: 5 })); // empty name return false
