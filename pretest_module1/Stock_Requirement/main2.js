class Stock {
    constructor() {
        this.stockItems = [];
    }

    findItemIndex(id) {
        return this.stockItems.findIndex(item => item.itemId === id);
    }

    addItem(id, amount) {
        if (id === null || id === undefined || amount === null || amount === undefined) {
            return -1;
        }

        const index = this.findItemIndex(id);
        if (index !== -1) {
            this.stockItems[index].quantity += amount;
        } else {
            this.stockItems.push({ itemId: id, quantity: amount });
        }
        return amount;
    }

    addItems(items) {
        let count = 0;
        items.forEach(item => {
            const added = this.addItem(item.itemId, item.quantity);
            if (added !== -1) {
                count++;
            }
        });
        return count;
    }

    sell(id, amount) {
        const index = this.findItemIndex(id);
        if (index !== -1) {
            const remaining = this.stockItems[index].quantity - amount;
            if (remaining >= 0) {
                this.stockItems[index].quantity = remaining;
                return amount;
            } else {
                this.stockItems[index].quantity = 0;
                return this.stockItems[index].quantity;
            }
        } else {
            return -1;
        }
    }

    getAllStockAmount() {
        let total = 0;
        this.stockItems.forEach(item => {
            total += item.quantity;
        });
        return total;
    }
}

// Example usage:
const myStock = new Stock();

console.log("Adding items...");
console.log(myStock.addItem(101, 10)); // Add 10 of item 101
console.log(myStock.addItem(102, 500)); // Add 500 of item 102

console.log("Adding multiple items...");
console.log(myStock.addItems([{itemId: 102, quantity: 2}, {itemId: 103, quantity: 5}, {itemId: 103, quantity: 0}])); // 3
console.log(myStock.addItems([{itemId: 102, quantity: 10}, {itemId: null, quantity: 5}, {itemId: 103, quantity: 5}])); // 1
console.log(myStock.addItems([{itemId: 101, quantity: 50}, {itemId: 103, quantity: 5}, {itemId: 200, quantity: 10}, {quantity: 50}, {itemId: 101}, {}, {itemId: 301, quantity:5}])); // 4

console.log("Selling items...")
console.log(myStock.sell(101, 5)) // Sell 5 of item 101
console.log(myStock.sell(102, 100)) // Sell 100 of item 102
console.log(myStock.sell(103, 10))
