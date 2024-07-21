

setTimeout(() => {
    console.log(`setTimeout 1 > ${Date()}`)
}, 3000);


console.log(`log 1 > ${Date()}`)
console.log(`log2 > ${Date()}`)
console.log(`log3 > ${Date()}`)

setTimeout(() => {
    console.log(`setTimeout 2 > ${Date()}`)
}, 7000);