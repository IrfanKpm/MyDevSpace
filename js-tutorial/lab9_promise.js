

let Data = false;

const DataBase = new Promise((resolve, reject) => {
    if (Data) {
        resolve('Data fetched from DB successfully'); 
    } else {
        reject('Data fetching from DB failed'); 
    }
});

DataBase
    .then((message) => {
        console.log(message); // 'msg' is the resolved value from resolve()
    })
    .catch((error) => {
        console.error(error); // 'error' is the rejected value from reject()
    })
    .finally(()=>{
        console.log("finished....")
    });
