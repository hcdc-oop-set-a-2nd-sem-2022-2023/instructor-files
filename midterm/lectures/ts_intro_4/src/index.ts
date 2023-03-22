// Functions
// non-value returning function
// function display(firstName: string, lastName: string): void {
//   console.log(`Hi, ${firstName} ${lastName}`)
// }

// // value returning function
// function add(firstNumber: number, secondNumber: number): number {
//   const sum = firstNumber + secondNumber
//   return sum
// }

// function multiply(firstNumber: number, secondNumber: number): number {
//   return firstNumber * secondNumber
// }

// function calculateIncomeTax(amount: number, tax = 0.2): number {
//   return amount * tax
// }

// call a function
// display('Karl', 'Li')
// display('Anna', 'Li')
// display('Henry', 'Li')

// const sum = add(5, 10)
// console.log(sum)
// const deductedAmount = calculateIncomeTax(100000)
// console.log(deductedAmount)

// const deductedAmount1 = calculateIncomeTax(100000, 0.25)
// console.log(deductedAmount)

let counter = 0

function printNumber(): void {
  counter++
  console.log(counter)
}

setInterval(printNumber, 1000)
console.log('stop')
