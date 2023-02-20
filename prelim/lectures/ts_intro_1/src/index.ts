// variables - modifiers can be
// var name = "Karl"
// let name1 = "Kobe"
// const PASSING_GRADE = 75

// name = "Slark"
// name1 = "Lina"
// PASSING_GRADE = 70

// variables - data types
// let age: number = 20
// let age1 = 20
// let age2: number
// age2 = 21
// age2 = true
// let name: string = 'Karl'
// let isEnabled: boolean
// isEnabled = true

// multiple data types
// let age: string | number
// age = 22
// age = "22"

// variables - fundamentals
// variable should be in plural form
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let firstNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const names = ['Karl', 'Kobe', 'Slark', 'Lina']

// console.log(numbers[6])
// console.log(names[2])

// variables - objects/mapping
// let userInfo = {
//   name: 'Karl',
//   address: {
//     street: 'Sta Ana',
//     barangay: 'Calinan',
//     city: 'Davao',
//     province: 'Davao Del Sur',
//     postal: 8000,
//     sitio: {
//       purok: 'starfish',
//     },
//   },
//   age: 20,
//   isStudent: false,
// }

// print: Hi I'm Karl, 20, from Davao.
// console.log("Hi I'm " + userInfo["name"] + ", " + userInfo["age"] + ", from " + userInfo["address"])
// string interpolation
//console.log(`Hi I'm ${userInfo["name"]}, ${userInfo["age"] + 10}, from ${userInfo["address"]}`)
// console.log(userInfo["address"]["street"])
// print full address: Sta Ana street, Barangay Calinan, Davao City, Davao Del Sur, 8000
// console.log(
//   `${userInfo['address']['street']} street, Barangay ${userInfo['address']['barangay']}, ${userInfo['address']['city']} City, ${userInfo['address']['province']}, ${userInfo['address']['postal']}`
// )
// console.log(userInfo["address"]["sitio"]["purok"])

// arithmetics/operations
// let counter: number
// counter = 1
// counter = counter + 1
// counter += 1
// counter++

// console.log(counter) // 4
// console.log(counter * 4)
// console.log(counter - 3)
// console.log(counter / 2)
// console.log(counter % 2)

// logical operators
let a = 1
let b = 1
let c = '1'
let isPassed = true
// console.log(1 == 1)
// console.log(a === b)
// console.log(a !== b)
// console.log(2 > 5)
// console.log(2 >= 2)
// console.log(2 < 5)
// console.log(2 <= 1)
// console.log(!isPassed) // not operator

// conditions
// let age = 17

// if (age >= 18) {
//   console.log('Legal age')
// } else {
//   console.log('Minor age')
// }

// PROBLEM: print passed if >= 75, if 72-74 eligible for removal, 71 below are failed
// let grade = 71

// if (grade >= 50 && grade <= 71) {
//   console.log('failed')
// } else if (grade >= 72 && grade <=74) {
//   console.log('eligible for removal')
// } else if (grade >= 75 && grade <= 100) {
//   console.log('passed')
// } else {
//   console.log('invalid input')
// }

// switch
// PROBLEM: print the actual status based from status code
// 'PENDING', 'PROCESSING', 'SHIPPED', 'DELIVERED', 'CANCELLED', 'RETURNED'
// 0 - PENDING
// 1 - PROCESSING
// 2 - SHIPPED
// 3 - DELIVERED
// 4 - CANCELLED
// 5 - RETURNED
// 6 - DESTROYED
// 7 - DESTROYED

let statusCode = 7

switch (statusCode) {
  case 0:
    console.log('PENDING')
    break
  case 1:
    console.log('PROCESSING')
    break
  case 2:
    console.log('SHIPPED')
    break
  case 3:
    console.log('DELIVERED')
    break
  case 4:
    console.log('CANCELLED')
    break
  case 5:
    console.log('RETURNED')
    break
  case 6:
  case 7:
    console.log('DESTROYED')
    break
  default:
    console.log('INVALID STATUS CODE')
    break
}
