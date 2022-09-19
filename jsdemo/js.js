function getElec(id){
    return document.getElementById(id);
}
function anThe(id){
    var the =getElec(id);
    the.style.display= "none";
}
// function nhanNut1(){
//     anThe("theP");
// }
function thayDoiStyle(id){
    var the=getElec(id);
    the.style.color="#00ef12";
    the.style.fontSize="55px";
}
function getStyleInfo(id){
    var the=getElec(id);
    return the.style.width;
}

function changeBackGround(id){
    var the= getElec(id);
    the.style.backgroundColor="green";
    the.style.width="66px";
}

function nhanNut1(){
    thayDoiStyle("theP");
    changeBackGround("theDiv");
    
}
// function thucHienDisable(){
//     pass.disabled=true;
//     username.disabled=true;
// }
function dangNhap(){
    var username=getElec("username");
    var pass=getElec("password");
    var thePThongBao=getElec('thePThongBao');
    var sectionThongBao=getElec('sectionThongbao');
    if (username.value == "cybersoft" && pass.value =="cybersoft"){
        sectionThongBao.style.color= "green";
        thePThongBao.innerHTML="Dang Nhap Thanh COng";
    }
}