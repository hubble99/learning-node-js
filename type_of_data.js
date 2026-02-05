// Type data di JavaScript

// 1. Number
let aNInt = 1
console.log(typeof aNInt)

// 2. BigInt
let aBigInt = 1n
console.log(typeof aBigInt)

// 3. Boolean
let aBoolean = true
console.log(typeof aBoolean)

// 4. String
let aString = "alice"
console.log(typeof aString)

// 5. Object
let anObject = {name: "alice", age: 20}
console.log(typeof anObject)

// 6. Array
const anArray = [1,2,3,4,5]
console.log(typeof anArray, Array.isArray(anArray)) //Array.isArray(anArray) untuk memeriksa apakah itu array
console.log(typeof anArray, Array.isArray(anObject))

// 7. Function
function aFunction() {
    console.log("Hello")
}
console.log(typeof aFunction)
