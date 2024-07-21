

function Data(email,callback){
    setTimeout(()=>{
        callback(email)
    },3000)
}


let getEmail = Data("test@mail.com",(email)=>{
    console.log(`Email received: ${email}`);
})