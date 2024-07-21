let nums = [0,1,2,3,4,5];


const sqr = nums.map(num=>num*num);

const mult2 = nums.filter(num => num %2 == 0);

console.log(sqr);
console.log(mult2);

const sum = nums.reduce((total, num) => total + num, 0);
console.log(sum); 


let nums2 = [8,4,7,1,5,3] 
const found = nums2.find(num => num <= 3);
console.log(found)

nums2.forEach((num,index)=>{
    console.log(`index ${index} > ${num}`);
})

let nums3 = [1, 2, 3, 4, 5];
const hasEven = nums3.some(num => num % 2 === 0);
console.log(hasEven); // Outputs: true (because there are even numbers in the array)

let nums4 = [2, 4, 6, 8,9];
const allEven = nums4.every(num => num % 2 === 0);
console.log(allEven); // Outputs: true (all numbers are even)


let nestedArray = [1, [2, [3, 4], 5]];
const flattened = nestedArray.flat(2);
console.log(flattened); // Outputs: [1, 2, 3, 4, 5]

let nums5 = [1, 2, 3];
const flattened2 = nums5.flatMap(num => [num, num * 2]);
console.log(flattened2); // Outputs: [1, 2, 2, 4, 3, 6]
