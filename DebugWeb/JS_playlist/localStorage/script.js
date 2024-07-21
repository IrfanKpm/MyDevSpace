let input = document.querySelector("input");
let loginBtn = document.querySelector("#login");
let logoutBtn = document.querySelector("#logout");
let h1 = document.querySelector("h1");

if (localStorage.length == 1){
    let name = localStorage.getItem("user");
    h1.innerText = `Welcome ${name}`
}


loginBtn.onclick=()=>{
    if(input.value){
        localStorage.setItem("user",input.value)
        h1.innerText = `Welcome ${input.value}`
    }
}

logoutBtn.onclick=()=>{
    localStorage.clear();
    location.reload();
}

