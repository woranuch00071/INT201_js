//destruction on array
const x = [5, 10, 15]
//rest + destructuring
const [firstItem, ...remainingItems] = x
console.log(firstItem) //5
console.log(remainingItems) //10,15