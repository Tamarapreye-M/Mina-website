// // // console.log('Hi ladies')
// // // console.log('Hi ladies')
// // // console.log('Hi ladies')
// // // console.log('Hi ladies')
// // // console.log('Hi ladies')
// // // console.log('Hi ladies')
// // // console.log('Hi ladies')
// // // console.log(500 + 300)


// // // first is keyword

// //  let student = 'Esther'

// //  // reassign the variable to a new or a different value
// // let Jill = 'John'

// // student = Jill


// // console.log(student)


// // const teacher = 'Tamara'

// // let myAge = 90

// // // second is the variable name

// // // third is the equal sign, which is our assignment operator

// // // last is the value


// // // let beautifulName = firstName

// // // console.log(firstName)
// // // console.log(beautifulName)


// // // data types have to do with the values
// // // 5 diff data types 

// // // catogories of data types 

// // // primitive and non-primitive 

// // /**
// //  * string
// //  * number
// //  * boolean
// //  * array
// //  * object
// //  * 
// //  */

// // // string
// // // single quotes
// //  let firstName = 'Judy is a good student who I have not met'

// //  // double quotes

// //  let lastName = "Tamara"

// //  // back ticks

// //  let friend = `905272653`


// //  // number

// //  // integer
// //  let numOne = 17191


// //  // float decimal
// //  let age = 7.8

// // // neegative
// //  let num1 = -1

// //  // zero
// //  let zero = 0

// //  let twoTimesFive = 2 * 5


// //  // boolean 

// //  let hasEatenToday = false

// //  let classIsAlmostOver = true

 
// // // non-primitive
// //  // array 
// // let fruitsArray = ['Orange', 'Banana', 'Watermelon', "Grapes", "Pear"]

// // let studentAges = [90, 105, 2, 67, 50, 12]

// // let isPresent  = [true, false, false, true, false]

// // let webDev = [ ['HTML', 'CSS', 'JavaScript'], ['Node JS', 'Mongoose', 'React', 'Express']]

// //  const arr = ['Judy', 'Tamara', 7, -1, 0, 2.8, true, false, [1, 2, 3, 4, 5]]

// // // object

// // // key, value pairs
// // const attendance = {
// //     Eman: true, 
// //     Ruth: false, 
// //     Omomayowa: false, 
// //     Esther: true, 
// //     Gifty: true
// // }


// // const dog = {
// //     name: 'Bingo', 
// //     age: 3, 
// //     color: 'brown', 
// //     isSleeping: true,
// //     skills: ['running quickly', 'protecting against theives', 'playing']
// // }





// // how to check which data type our value is




// // const PI = 3.142
// // console.log(typeof PI)

// // const isActiveInClass = true
// // console.log(typeof isActiveInClass)




// // console.log(typeof fruits)

// // const dog = {
// //     name: 'Bingo',
// //     age: 3, 
// //     color: 'brown', 
// //     isSleeping: true,
// //     skills: ['running quickly', 'protecting against theives', 'playing']
// // } 

// // console.log(typeof dog)




// const student = 'Eman'

// // method length
// console.log(student.length)

// // casing method
// console.log(student.toUpperCase())
// console.log(student.toLowerCase())


// // i want to know if my string, greeting has the letter s

// const greeting = 'Hello Ladies'

// console.log(greeting.length)
// let hi = greeting.length
// console.log(hi)


// console.log(greeting.includes('Ladies'))

// let ladiesIsInGreeting = greeting.includes('Ladies')

// console.log(ladiesIsInGreeting)

// console.log(greeting.indexOf('d'))
// console.log(greeting.lastIndexOf('d'))


// console.log(greeting.charAt(8))
// console.log(greeting[1])

// // slice method
// console.log(greeting.slice(0, 5))

// let str = 'love is a good feeling'

// console.log(str.indexOf('d'))
// console.log(str.slice(3, str.indexOf('d') + 1))


// //  array methods 

// let fruits = ['Orange', 'Banana', 'Watermelon', "Grapes", "Pear"]

// console.log(fruits.indexOf('Orange'))
// console.log(fruits.indexOf('Banana'))
// console.log(fruits.indexOf('Watermelon'))

// console.log(fruits[0])

// console.log(fruits.includes('pineapple'))

// console.log(fruits.slice(0, 3))
// console.log(fruits.length)

// console.log(fruits[fruits.length - 1])


// fruits.push('Pineapple')
// fruits.push('Pawpaw')
// fruits.push('Blueberry')

// console.log(fruits)
// console.log(fruits[fruits.length - 1])


// let lastThing = 'Blueberry'

// // find out the method for adding items to the beginning of an array
// // find out the method that removes items from the beginning of an array


// fruits.pop()

// console.log(fruits)



// console.log(lastThing)

// let newStr = 'I love JavaScript'
// console.log(newStr[0])

// newStr[0] = 'J'
// newStr = 'J love Javascript'

// console.log(fruits)
// console.log(fruits[0])

// fruits[0] = 'Mango'
// fruits[1] = 'Strawberry'

// console.log(newStr)
// console.log(fruits)


// && AND operator
// || OR operator


let myAge = 67
let ruthAge = 105

if(myAge == 67 && ruthAge === 105 ){
    console.log('I got it correctly')
}

if(myAge >= 60 && ruthAge >= 100) {
    console.log('I got it correctly')
}

if(myAge < 60 || ruthAge > 100) {
    console.log('I got it correctly')
}




let age = 20

if(age == 15){
    console.log('You can have a permit to learn to drive')
} else if (age == 16 || age == 17){
    console.log('You can learn to drive and apply for a drivers license')
} else {
    console.log('You have a few more years to go')
}


let veggiesArr = ['Lettuce', 'Brocolli', 'Carrot', 'Cucumber', 'Onion']

// veggies.pop()

// console.log(veggies)
// veggies[0] = veggies[0].toUpperCase() 
// veggies[1] = veggies[1].toUpperCase() 
// veggies[2] = veggies[2].toUpperCase() 
// veggies[3] = veggies[3].toUpperCase() 
// veggies[4] = veggies[4].toUpperCase()

// console.log(veggies[4])
let newArray = []

// newArray.push(veggiesArr[0].toUpperCase())
// newArray.push(veggiesArr[1].toUpperCase())

console.log(newArray)
for(let item of veggiesArr){

    if(item !== 'Onion' && item !== 'Brocolli'){
        newArray.push(item.toUpperCase())
    } else {
        newArray.push(item.toLowerCase())
    }
}
console.log(newArray)


let oldArr = [10, 20, 30, 40, 50]
let anorArr = [100, 200, 300, 400, 500]
let aNewArr = [1000, 2000, 3000, 4000, 5000]
let oneArr = [1, 2, 3, 4, 5]
let newNumbersArray = []

for(let number of oldArr){
    newNumbersArray.push(number * 2)
}

console.log(newNumbersArray)
 
// functions 
// function declaration

function sayHi (){
    console.log('I am saying hi')
    console.log('I am not saying hi')
    console.log(108 * 5)
    console.log(108 / 5)
    console.log(108 - 5)
    console.log(108 + 5)
    console.log(2 ** 3)
    console.log(4 ** 2)
}

sayHi()

function multiply (){
    let a = 6
    let b = 8
    console.log(a * b)
    return a * b
}
console.log(multiply())

let fineFunc = function multiplyTimesTwo (num) {
    // let num = 8
    let result = num * 2
    console.log(result)
}

fineFunc(8)
// multiplyTimesTwo(7)
// multiplyTimesTwo(10)
// multiplyTimesTwo(50)
// multiplyTimesTwo(-4)


function addTwoNums (a, b) {
    let result = a + b
    console.log(result)
    return result
}

console.log(addTwoNums(4, 9))


// console.log('Jill'.toUpperCase())

const anonFunc = function () {

}
// arrow function
const myFunc = (a, b) => {
    return a + b
}

console.log(myFunc(10, 67))
console.log(myFunc(100, 77))
console.log(myFunc(-6, 67))
console.log(myFunc(1, 91725661))

