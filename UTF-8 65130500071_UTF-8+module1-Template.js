//Write your student id, firstname, and lastname in a single line comment before starting your program
//students who do not put this comment will get 50% taken off their score.
//ID: 65130500071      Name: Woranuch Naritnet
class BankAccount {
    constructor(accountNumber){
        this.accountNumber = accountNumber
        this.balance = 0
        this.transaction = [] 
    }

    deposit(amount){
        if (amount === amount++){
            return true
        }
        this.balance.push(accountNumber)
        return this.balance
    }

    withdraw(amount){
        if(balance !== 0 && balance > amount){
            return "approve"
        }
        this.balance-amount.push(accountNumber)
            return this.balance
    }

    getBalance(){
        return this.balance
    }

    getAccountNumber(){
        return this.accountNumber
    }    

    getTransactions(){
        return this.transaction
    }

    getTransaction(id){
        const transactions = this.transactions.length +1
        const transactionById = this.transactions.findIndex(bac => bac.id === id)
        if(transactionById){
            return transactions
        } else return "not Found"
    }

    recordTransaction(type, amount){
        return this.transactions(deposit) && this.transactions(withdraw) && this.transactions
    }

    transferFounds(targetAccountNumber, amount){
        if(balance !== 0 && balance > amount){
            return amount => targetAccountNumber
        } else return false
    }
}
 
// Example Usage
const myAccount = new BankAccount("123456789");
console.log(myAccount.deposit(100)); // Deposit $100
console.log(myAccount.withdraw(50)); // Withdraw $50
console.log(myAccount.getBalance()); // Get the current balance
console.log(myAccount.getTransactions()); // Get all transactions