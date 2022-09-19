function myFuction() {
    var list = document.getElementsByTagName("ul");
    var ulDauTien = list[0];
    var listLI = ulDauTien.getElementsByTagName('li');
    var liDauTien = listLI[0];
    liDauTien.innerHTML = 'xin chao da doi';
    liDauTien.style.fontSize = "55px";
    var theDiv = document.getElementById('textDiv');
    var listTag = theDiv.getElementsByTagName("*");
    listTag[3].innerHTML = "thay doi noi dung";
    listTag[3].style.color = "red";
    changeByClass();
    // testQuerrySelector();
    testQuerryAll();
}
function changeByClass(){
    var list=document.getElementsByClassName("test");
    for (var item of list){
        item.style.color="red";
        item.style.fontSize="55px";
    }
}
function testQuerrySelector(){
    var theP=document.querySelector("p");
    theP.innerHTML= "noi dung queery";
    theP.style.color="green";

}
function testQuerryAll(){
    var list=document.querySelectorAll("p");
    for (var item of list){
        item.style.color="green";
        item.style.fontSize="55px";
    }
}