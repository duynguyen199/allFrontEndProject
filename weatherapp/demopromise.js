const sum=10;
const promistID= new Promise ((resolve, reject)=>{
    //thuc thi vu bat dong bo
    setTimeout( ()=>{
        if(sum<10){
            reject('promise fail');
        }
        resolve('promise success');
    },2000);
});
promistID.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});
