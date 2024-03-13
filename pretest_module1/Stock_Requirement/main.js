class stock {
   constructor(){
    this.stockItems = []
  //  this.itemId = itemId
  //  this.quantity = quantity
   }

    findItemIndex(id){
      return this.stockItems.findIndex(item => item.itemId === id)
    }

    addItem(id, amount){
      if (id === null || id === undefined || amount === null || amount === undefined) {
        return -1
    }

    const increaseAmount = this.findItemIndex(id)
    if (increaseAmount == -1) {
         return "already"
    } else {
        this.stockItems.push({ itemId: id, quantity: amount })
    }
    return amount
    }

    addItems(items){
      let count = 0
        items.forEach(item => {
            const added = this.addItem(item.itemId, item.quantity)
            if (added == 1) {
                count++
            }
        })
        return count
    }

    sell(id, amount){
      const sellItem = this.findItemIndex(id)
        if (sellItem == -1) {
                this.stockItems[index].quantity = 0
                return amount
        } else {
            return -1
        }
    }

    getAllStockAmount(){
      return total
    }

}

const testStock = new stock()


console.log(testStock.addItem(101, 5))
console.log(testStock.addItem(305, 10)) 


console.log(testStock.addItems([{itemId: 102, quantity: 2}, {itemId: 103, quantity: 5}, {itemId: 103, quantity: 0}])) 
console.log(testStock.addItems([{itemId: 102, quantity: 10}, {itemId: null, quantity: 5}, {itemId: 103, quantity: 5}])) 
console.log(testStock.addItems([{itemId: 101, quantity: 50}, {itemId: 103, quantity: 5}, {itemId: 200, quantity: 10}, {quantity: 50}, {itemId: 101}, {}, {itemId: 301, quantity:5}])) 


console.log(testStock.sell(101, 5)) 
console.log(testStock.sell(102, 100)) 


console.log(testStock.getAllStockAmount())