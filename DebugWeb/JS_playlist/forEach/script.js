
let colors = ["red","green","blue"];

let texts = document.querySelectorAll("#ech")
console.log(texts)

texts.forEach((value,index)=>{
    value.style.color = colors[ index % colors.length ]
})