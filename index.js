//define the characters I dont need .
// const notAllowed = (value) => {



//this function accepts the correct characters
const numOperand = (value) => {
    let operators  = [`+`, `-`, `*`, `/`]
    let number = Number(value) || (null === 0)
    let stringNum = parseInt(value)

     return (operators.includes(value)
             || number === value
             || stringNum === value)
}
//this function assigns the correct operation to operators
const operation = (number1,operators,number2) => {
    if (operators === '+')
     return number1 + number2 
     else if (operators === '-')
     return number1 - number2 
    else if (operators === '*')
     return number1 * number2
    else if (operators === '/')
    return number1 / number2
    }
 
console.log(operation(2,'+',7))


// define rules.
// create main function which will do the arrithmetic calculation.
