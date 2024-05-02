//Write your student id, firstname, and lastname in a single line comment before starting your program
//students who do not put this comment will get 50% taken off their score.
//ID: 65130500071      Name: Woranuch Naritnet
class Game {
    constructor(id, title, genre, price){
        this.id = id
        this.title = title
        this.genre = genre
        this.price = price
    }  
} 
class GameStore {
    constructor(storeName){
        this.storeName = storeName
        this.inventory =[]
    }

    addGame(Game){
        this.inventory.push(Game)
    } 
    
    searchByTitle(title){
        return this.inventory.filter((findTitle) => findTitle.title === title)

    }
    searchByGenre(genre){
        return this.inventory.filter((findGenre) => findGenre.genre === genre)
    }
    purchaseGame(id){
        const removeGame = this.inventory.findIndex(idgame => idgame.id === id)
        if (removeGame === -1){
            return false
        }
        this.inventory.splice(removeGame,1)
        return removeGame
    }
    listInventory(){
        this.inventory.forEach((game) => console.log(game))
    }
    updateGamePrice(id, newPrice){
        const update = this.inventory.findIndex(inv => inv.id === id)
        if (update){
            update.price = newPrice
            return newPrice
        }

    }
    totalInventoryValue(){

    }
    listGenres(){

    }
    sellGame(id, quantity){
        const sell = this.findIndex(id => Game.id === id)
        if(id === id){
           (sell == -1) 
        }
        this.inventory[index].quantity

        return quantity
    }
}

const store = new GameStore("Epic Game Store");
 
// Adding games to the inventory
store.addGame(new Game(1, "Game One", "Action", 59.99));
store.addGame(new Game(2, "Game Two", "Adventure", 49.99));
 
// Searching games by title
console.log(store.searchByTitle("One"));
 
// Searching games by genre
console.log(store.searchByGenre("Adventure"));
 
// Purchasing a game
console.log(store.purchaseGame(1));
 
// Listing the inventory
console.log(store.listInventory());
 
// Updating a game price
store.updateGamePrice(2, 39.99);
 
// Calculating total inventory value
console.log(store.totalInventoryValue());
 
// Listing all genres
console.log(store.listGenres());
 
// Selling a game (assuming the game with ID 2 had its stock increased appropriately before)
console.log(store.sellGame(2, 1));
