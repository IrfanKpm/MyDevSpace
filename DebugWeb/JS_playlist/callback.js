
 // problem
//console.log("start")
//function getAPI(){
//    setTimeout(()=>{
//       return "DebugMedia"
//   },2000)
//}
//console.log(getAPI())
//console.log("end")

// solution
console.log("start")
function getAPI(callback){
    setTimeout(()=>{
       callback("DebugMedia");
    },2000)
}
getAPI((value)=>{
    console.log(value)
})
console.log("end")