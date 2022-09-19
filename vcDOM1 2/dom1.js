function getEle(id){
    return document.getElementById(id);
}

function thayDoiNoiDung(id, noiDung){
    var theP = getEle(id);
    theP.innerHTML = noiDung;
}

function anThe(id){
    var the = getEle(id);
    the.style.display = "none";
}

function thayDoiStyle(id){
    var the = getEle(id);
    the.style.fontSize = "30px";
    the.style.color ="#00ef12";
}

function changeDiv(id){
    var the = getEle(id);
    the.style.backgroundColor ="green";
    the.style.width = "100px";
}

function getStyleInfo(id){
    var the = getEle(id);
    return the.style.width;
}
function nhanNut1(){
   //thayDoiNoiDung("theP"," thay đổi đi");
   thayDoiStyle("theP");
}

function nhanNut2(){
    changeDiv("theDiv");
    thayDoiNoiDung("content1", getStyleInfo("theDiv"));
    createButton();
 }

 function createButton(){
     var btn = document.createElement("button");
     btn.innerHTML = " CyberLearn button";

     var theP = document.createElement("p");
     theP.innerHTML = "Thẻ p tạo tự động trong the div";
     theP.style.color ="red";
     document.body.appendChild(btn);
     var theDiv = getEle("theDiv");
     theDiv.appendChild(theP);
 }