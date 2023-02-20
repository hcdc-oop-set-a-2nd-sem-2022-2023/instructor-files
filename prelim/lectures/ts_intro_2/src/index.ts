function prompt(question: string, callback: Function): void {
  const stdin = process.stdin,
    stdout = process.stdout

  stdin.resume()
  stdout.write(question)

  stdin.once('data', function (data): void {
    callback(data.toString().trim())
  })
}

// Accepting inputs
// PROBLEM 1: Accept user name and greet it
// prompt('Enter your name: ', function (inputName: string): void {
//   console.log(`Hi ${inputName}!`)
//   process.exit(0)
// })

// PROBLEM 2: Accept 2 integer inputs and calculate sum
// prompt('Enter first number: ', function (inputFirstNumber: string): void {
//   prompt('Enter second number: ', function (inputSecondNumber: string): void {
//     const firstNumber = +inputFirstNumber
//     const secondNumber = +inputSecondNumber
//     const sum = firstNumber + secondNumber

//     console.log(`The sum of ${firstNumber} and ${secondNumber} is ${sum}`)
//   })
// })

// PROBLEM 3: Calculate the area of the triangle in meters
prompt('Enter base in meters: ', function (inputBase: string): void {
  const base = +inputBase

  if (base < 0) {
    console.log('Invalid base input')
    return
  }

  // accept height input
  prompt('Enter height in meters: ', function (inputHeight: string): void {
    const height = +inputHeight

    if (height < 0) {
      console.log('Invalid height input')
      return
    }

    // if all good, calculate the area
    const area = (base * height) / 2

    console.log(`The area of the triangle is ${area} meters`)
  })
})
