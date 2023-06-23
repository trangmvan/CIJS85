// Exercise 1: Sum of Array Elements
// Write a function that takes an array of numbers and returns the sum of all the elements using the reduce() method.

// arr=[1,2,3,4,5,6,7,8,9]
// const sum = arr.reduce( (acc,num) => {acc=acc+num; return acc},0)

// console.log(sum)


function sum(arr) {
    return arr.reduce(
       (acc,num)=> acc=acc+num,0 
    )
}
console.log(sum([1,2,3,4,5,6,7,8,9]))

//BT2: Exercise 2: Flatten an Array
// Write a function that takes an array of arrays and flattens it into a single array using the reduce() method.

const arr1= [['a','b'],['c','d'],['e','f']]

const arr2 = arr1.reduce(
    (acc,item) => acc= acc.concat(item)
)

console.log(arr2)

//BT3: Exercise 3: Counting Word Occurrences
// Write a function that takes an array of words and returns an object with the count of each word using the reduce() method.

function wordCount(arr){
    return arr.reduce(
        (count,currentWord) => {
            count[currentWord] = 1 + (count[currentWord] || 0);
            return count
        }
    ,{})
}
const array1=['apple','orange','mango','mango']
console.log(wordCount(array1))

//BT4: Exercise 4: Grouping Objects by Property
// Write a function that takes an array of objects and groups them by a specific property using the reduce() method.



  /* Output:
{
  A: [
    { name: 'Alice', grade: 'A' },
    { name: 'Charlie', grade: 'A' }
  ],
  B: [
    { name: 'Bob', grade: 'B' },
    { name: 'Eve', grade: 'B' }
  ],
  C: [
    { name: 'David', grade: 'C' }
  ]
}
*/

function studentByGrade(arrStudents) {
    return arrStudents.reduce(
        (acc,student) => {
            acc[student.grade] = (acc[student.grade] || []).concat(student);
            return acc
        },{}
    )
}

const students = [
    { name: 'Alice', grade: 'A' },
    { name: 'Bob', grade: 'B' },
    { name: 'Charlie', grade: 'A' },
    { name: 'David', grade: 'C' },
    { name: 'Eve', grade: 'B' }
  ];

  console.log(studentByGrade(students))