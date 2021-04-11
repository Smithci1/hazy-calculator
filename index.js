//define the characters I dont need .
// const notAllowed = (value) => {

// }

//create an array of operand's we will use.
//define the functions of the operands.
const numOperand = (value) => {
    let operators  = [`+`, `-`, `*`, `/`]
    let number = Number(value) || (null === 0)
    let stringNum = parseInt(value)

     return (operators.includes(value)
             || number === value
             || stringNum === value)
             

}
console.log(numOperand(2,'3', '4', '+',null))

// define rules.
// create main function which will do the arrithmetic calculation.
