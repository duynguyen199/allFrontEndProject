function timSoLonNhat(a,b,c){
    var tam=a;
    if (b>tam){
        tam=b;
    }
    if (c>tam){
        tam=c;
    }
    return tam; 
}
function tong3So(a,b,c){
    return a+b+c;
}
function onClick(){
    var big=tong3So(8,15,6);
    console.log(big);
}
onclick();