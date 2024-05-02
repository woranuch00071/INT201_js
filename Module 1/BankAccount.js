//Constructor
//• constructor(accountNumber)
//• Parameters: name type: string, position type: string
//• Initializes a new BankAccount instance with a given account number. It 
//sets the initial balance to zero and prepares an empty array for storing 
//transaction details.
//Properties
//• accountNumber: A unique identifier for the account, type: String.
//• balance: The current balance of the account, type: number.
//• transactions: An array to store details of each transaction. Each transaction 
//object includes type, amount, and timestamp, type: array of object.
//{
//Id: id is running number create by transactions.length + 1, type: number
//type: type, type: String ex: "deposit", "withdrawal",
//amount: amount, type: number,
//timestamp: date, type: date
//}
class BankAccount {
  constructor(accountNumber) {
    this.accountNumber = accountNumber
    this.balance = 0
    this.transactions = []
  }
  //deposit(amount)
  //• Parameters: amount type: number
  //• Increases the account balance by the specified amount if it's positive. 
  //Records the deposit transaction with its details. Returns the new balance
  deposit(amount) {
    if (amount <= 0) { // ตรวจสอบว่า amount น้อยกว่า 0 หรือไม่
      throw new Error("Deposit amount must be greater than zero.")
    }
    const transaction = { 
      Id: this.transactions.length + 1,
      type: "deposit",
      amount: amount,
      timestamp: new Date()  // สร้างวันที่
    }
    this.balance += amount // ค่า balance คือยอดเงินในบัญชี และ amount คือจำนวนเงินที่โอน
    this.transactions.push(transaction) // ทำการเพิ่ม transaction ให้ transactions โดยใช้ push
    return this.balance
  }
 // withdraw(amount)
  //• Parameters: amount type: number
  //• Decreases the account balance by the specified amount if there are 
  //sufficient funds and the amount is positive. Records the withdrawal 
  //transaction with its details. Returns the new balance or null if insufficient funds.
  withdraw(amount) {
    if (amount <= 0) {
      throw new Error("Withdraw amount must be greater than zero.")
    }
    if (amount > this.balance) { // ตรวจสอบว่า amount มากกว่า balance หรือไม่
      return null
    }
    const transaction = {
      Id: this.transactions.length + 1,
      type: "withdrawal",
      amount: amount,
      timestamp: new Date()
    }
    this.balance -= amount
    this.transactions.push(transaction)
    return this.balance
  }

  getBalance() {
    return this.balance
  }

  getAccountNumber() {
    return this.accountNumber
  }

  getTransactions() {
    return this.transactions
  }
  //getTransaction(id)
  //• Parameters: id type: number
  //• Retrieves a specific transaction by its ID from the transactions array. 
  //Returns the transaction details or null if not found
  getTransaction(id) {
    return this.transactions.find(transaction => transaction.Id === id) || null // หากได้ transaction ที่มี Id เท่ากับ id ที่ส่งมา ให้ส่งออกไป หรือไม่ก็ส่งออก null ในกรณีที่ไม่พบ
  }
  //recordTransaction(type, amount)
  //• Parameters: type type: string, amount type: number
  //• Records details of a transaction, including its type ('deposit' or 
  //'withdrawal'), amount, and the current timestamp. This method is usually 
  //called internally by the deposit and withdraw methods
  recordTransaction(type, amount) {
    const transaction = {
      Id: this.transactions.length + 1,
      type: type,
      amount: amount,
      timestamp: new Date() 
    }
    this.transactions.push(transaction)
    return transaction
  }
  //transferFunds(targetAccountNumber, amount)
  //• Parameters: targetAccountNumber type: string, amount type: number
  //• Transfers the specified amount from this account to another account identified 
 // by the target account number, if funds allow. Deducts the amount from this 
  //account and adds it to the target account. Returns true if the transfer was 
  //successful, false if not enough funds or targetAccountNumber not exists.
  transferFunds(targetAccountNumber, amount) {
    if (this.balance < amount) {
      return false
    }
    this.withdraw(amount) // ทำการโอนเงินจากบัญชีนี้ไปยังบัญชีอื่นๆ เรียกใช้ฟังก์ชั่นหักเงิน
    return true// ทำการโอนเงินจากบัญชีอื่นๆไปยังบัญชีนี้
  }
}

  // Example Usage
  const myAccount = new BankAccount("123456789")
  console.log(myAccount.deposit(100)) //$100
  console.log(myAccount.withdraw(50)) // $50
  console.log(myAccount.getBalance()) // Get the current balance
  console.log(myAccount.getTransactions()) // Get all transactions
  
  console.log(myAccount.getAccountNumber())
  console.log(myAccount.transferFunds("123456789", 50))

