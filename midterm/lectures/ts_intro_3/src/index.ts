// Loops

// while loop
// infinite loop
// const condition = true

// while (condition) {
//   console.log('this is a endless lopo')
// }

// Problem 1: Print numbers 1 to 10 using while loop
// let counter = 1

// while (counter <= 1000) {
//   console.log(counter)
//   counter++
// }

// let counter = 0

// while (counter < 10) {
//     console.log(counter + 1)
//     counter++
// }

// Problem 2: print numbers 2 to 100 by increment of 2
// let counter = 2

// while (counter <= 100) {
//     console.log(counter)
//     counter += 2
// }

// Problem 3: Print 100 to 1
// let counter = 100

// while (counter >= 1) {
//   console.log(counter)
//   counter--
// }

// Problem 4: Calculate the summation of a given integer
// let counter = 1
// let sum = 0

// while (counter <= 10) {
//     sum += counter
//     counter++
// }

// console.log(sum)

// For loops
// Problem 5: Solve Problem 1 using for loops
// for (let counter = 1; counter <= 10; counter++) {
//   console.log(counter)
// }

// Print infinite loops using for loop
// for (;;) {
//   console.log('this is a endless loop')
// }

// Problem 6: Solve problem 3 using for loop
// for (let counter = 100; counter >= 1; counter--) {
//   console.log(counter)
// }

// using arrays
// const numbers= [1, 10, 4, 6, 2, 99, 1000, 2000, 3000]

// for(let index = 0; index < numbers.length; index++) {
//     console.log(numbers[index])
// }

// Problem 7: print passing grades and failing grades from array
// const grades = [100, 75, 89, 72, 74, 80]

// for (let index = 0; index < grades.length; index++) {
//   if (grades[index] >= 75) {
//     console.log(`${grades[index]} is passed`)
//   } else {
//     console.log(`${grades[index]} is failed`)
//   }
// }

// Problem 8: separate passing grades and failing grades
// const grades = [100, 75, 89, 72, 74, 80]
// let passingGrades = []
// let failingGrades = []

// for (let index = 0; index < grades.length; index++) {
//   if (grades[index] >= 75) {
//     passingGrades.push(grades[index])
//   } else {
//     failingGrades.push(grades[index])
//   }
// }

// console.log('passed grades:', passingGrades)
// console.log('failed grades:', failingGrades)

// accessing objects
// const users = [
//   {
//     name: 'Karl',
//     age: 20,
//     location: 'Davao',
//   },
//   {
//     name: 'Anna',
//     age: 17,
//     location: 'Manila',
//   },
//   {
//     name: 'Dan',
//     age: 18,
//     location: 'Cebu',
//   },
// ]

// for (let index = 0; index < users.length; index++) {
//   console.log(
//     `User #${index + 1}: Name: ${users[index]['name']}, Age: ${
//       users[index]['age']
//     }, Location: ${users[index]['location']}`
//   )
// }

// for (let index = 0; index < users.length; index++) {
//   if (users[index]['age'] >= 18) {
//     console.log(
//       `User #${index + 1}: Name: ${users[index]['name']}, Age: ${
//         users[index]['age']
//       }, Location: ${users[index]['location']}`
//     )
//   }
// }

// using foreach
// const cities = ['Manila', 'Tokyo', 'Beirut', 'New York']

// cities.forEach((city) => {
//   console.log(city)
// })

const users = [
  {
    name: 'Karl',
    age: 20,
    location: 'Davao',
  },
  {
    name: 'Anna',
    age: 17,
    location: 'Manila',
  },
  {
    name: 'Dan',
    age: 18,
    location: 'Cebu',
  },
]

users.forEach((user) => {
  console.log(
    `Name: ${user['name']}, Age: ${user['age']}, Location: ${user['location']}`
  )
})
