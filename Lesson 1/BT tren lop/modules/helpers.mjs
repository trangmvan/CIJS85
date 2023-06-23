// Bài 5: Cho mảng A = [1,5,3,8,10]
// 	+Viết chương trình JS tính giá trị trung bình của mảng.
// 	+Viêt chương trình JS để sắp xếp 1 mảng theo thứ tự giảm dần
// 		Input: A = [1,5,3,8,10]
// 		Output: A = [10, 8, 5, 3, 1]
// 	+Tính tổng các số dương trong mảng
// 	+Tính tổng các số lẻ trong mảng
// 	+Tìm số lớn thứ 2 trong mảng
// 		Output: 8
// 	+Đếm các số chính phương có trong mảng

const A = [1,5,3,8,10]

function avg(nums){
    const sum = nums.reduce((acc,num) => {acc=acc+num; return acc} )
    console.log('Gia tri trung binh: ',sum/(nums.length))
}
avg(A)


function descendingSort(nums_2){
    nums_2.sort(
        function(a,b){
            return b-a;
        }
    )
}

descendingSort(A)
console.log('Sap xep theo thu tu giam dan:',A)

function sumPositives(nums_3) {
    const positivesOnly = nums_3.filter(num => num>0);
    const sumPos= positivesOnly.reduce((acc,num)=>{acc=acc+num;return acc});
    console.log('Tong cac so duong trong mang:',sumPos)
}

sumPositives(A)

function sumOdds(nums_4) {
    const oddsOnly=nums_4.filter(num=>num%2!==0);
    const sumOdd=oddsOnly.reduce((acc,num)=>{acc=acc+num;return acc});
    console.log('Tong cac so le trong mang:', sumOdd)
}

sumOdds(A)

function secondLargestNum(nums_5){
    descendingSort(nums_5)
    console.log('So lon thu 2 trong mang:',nums_5[1])
}

secondLargestNum(A)

function sumSqurtNums(nums_6){
    const sqrtNums=nums_6.filter(num=> Math.sqrt(num) % 1 === 0)
    const sumSqN = sqrtNums.reduce((sum,current_num)=>{sum=sum+current_num;return sum})
    console.log('Tong so chinh phuong trong mang:', sumSqN)
}

sumSqurtNums(A)

export {avg, descendingSort, sumPositives, sumOdds, secondLargestNum, sumSqurtNums}