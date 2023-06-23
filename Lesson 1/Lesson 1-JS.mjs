// Get more details about 
// - arrow functions
// - module, import, export
// - params

import hocSinh, {sum, person1} from './math.mjs'
// Khi import phải đổi cả 2 file thành .mjs

// import {sum, person1} from './math.mjs'
console.log("hello")

console.log(sum(2,5))
console.log(person1)

// import personDefault from './math.mjs'
// import hocSinh from './math.mjs'


// console.log(personDefault)
console.log(hocSinh)


const number=[2,5,8,8,124,125,6]

const newNumber=number.map((num, i)=>{
    console.log(num);
    console.log(i)
})