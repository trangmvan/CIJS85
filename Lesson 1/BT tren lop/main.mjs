import {avg, descendingSort, sumPositives, sumOdds, secondLargestNum, sumSqurtNums} from './modules/helpers.mjs'

// Bài 1: Cho 2 mảng sau: arr1 = [1,2,4,5,6]; arr2 = [1, 6, 8, 9, 0]. 
// Hãy lọc ra một mảng mới chứa 2 phần tử trùng nhau của 2 mảng cho bên trên. (sử dụng filter() )

const arr1 = [1,2,4,5,6];
const arr2 = [1, 6, 8, 9, 0];

// filter: if return true=> push inside new array

const newArr = [...arr1,...arr2]
const repeatedNums = newArr.filter (
    (num,index,array)=> array.indexOf(num) !==index
)
console.log(repeatedNums)

//Bai 2: Sử dụng map() với arr = [1,54,6,7] để tạo ra một newArr có newArr[i] = arr[i] + 5
const arr = [1,54,6,7]
const newArr2 = arr.map((num=>num+5))
console.log(newArr2)

//Bai 3: Cho array sau: m = [1,2,4,5,6,7]; n = [3,5,675,8,96]. Hãy viết một hàm, duyệt cả các mảng m và n; loại bỏ đi phần tử có giá trị bằng 1, 8,10,96,7.

const m = [1,2,4,5,6,7] 
const n = [3,5,675,8,96]

const l = [1,8,10,96,7]

function filteredArr(array) {
  const newArr3= array.filter((num)=>!(l.includes(num)))
  console.log(newArr3)
}

filteredArr(m)
filteredArr(n)


//Bai 4: Cho array 1 như sau:
const players = [
    { id: 11, name: 'Messi', age: 33 },
    { id: 12, name: 'Ronaldo', age: 34 },      
    { id: 13, name: 'Young', age: 35 },        
    { id: 14, name: 'Mane', age: 21 },          
    { id: 15, name: 'Salah', age: 24 },]
// Hãy chuyển đổi nó về array có dạng sau:
// playersModified = 
// 	{ 
// 	    11: {id: 11, name: "Messi", age: 33},
// 		12: {id: 12, name: "Ronaldo", age: 34},
// 		13: {id: 13, name: "Young", age: 35},
// 		14: {id: 14, name: "Mane", age: 21},
// 		15: {id: 15, name: "Salah", age: 24}
//     }
 

function modifiedArr(ogArr){
    return ogArr.reduce(
        (acc,player) => { acc[player.id] = player; return acc },
        {}
    )
}
console.log(modifiedArr(players))


avg(m);
descendingSort(m);
sumPositives(m);
sumOdds(m);
secondLargestNum(m);
sumSqurtNums(m);