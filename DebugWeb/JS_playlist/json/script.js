
const strObj = {
    id : 100,
    name : "irfan",
    age : 20
}

const strJson = `{
   "id" : 100,
   "name" : "irfan",
   "age" : 20
}`

console.log(typeof strObj); // object
console.log(typeof strJson); // string

let strJson_to_strObj = JSON.parse(strJson);
console.log(typeof strJson_to_strObj); // object
console.log(strJson_to_strObj.id)

let strObj_to_strJson = JSON.stringify(strObj)
console.log(typeof strObj_to_strJson)