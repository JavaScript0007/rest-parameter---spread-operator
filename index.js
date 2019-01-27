// rest parameter
const rest = (a, b, ...rest) => {
  console.log(a + b + rest.reduce((a, b) =>  a + b))
}

let word = 'niceday';
// spread operator
let newWord = {...word}

rest(2, 3 , 3, 4, 5)
console.log(newWord)
