var a = [3, -6, 8, -9, -4, 5, 12];
console.log(a);
//cau 1 tinh tong cac so trong mang a
var tong = 0;
for (var pt of a) {
    tong += pt;
}
console.log(tong);

//cau 2 tinh phan tu am lon nhat Xuat gia tri va chi so tai vi tri do
var a = [4, 16, 7, 3, 6, 8, 9, 5, 12, 4, 4];
console.log(a);
var chiSoAmDauTien = -1;
for (var i = 0; i < a.length; i++) {
    if (a[i] < 0) {
        chiSoAmDauTien = i;
        break;
    }
}
var chiSoAmMax = chiSoAmDauTien;
if (chiSoAmDauTien != -1) {
    for (var i = chiSoAmDauTien + 1; i < a.length; i++) {
        if (a[i] < 0 && a[i] > a[chiSoAmMax]) {
            chiSoAmMax = i;
        }
    }
    // console.log("Gia tri am lon nhat tai:"+ chiSoAmMax +"Gia tri la:"+ a[chiSoAmMax]);
    var mangAmLonNhat = [];
    for (var i = chiSoAmMax; i < a.length; i++) {
        if (a[i] === a[chiSoAmMax]) {
            mangAmLonNhat.push(i);
        }
    }
    for (var i = 0; i < mangAmLonNhat.length; i++) {
        var index = mangAmLonNhat[i];
        console.log("(" + index + ", " + a[index] + ")");
    }
} else {
    console.log("Mang khong co so am");
}

//cau 3: tong cac so le
var b = [4, 16, 7, -3, 6, 16, -9, 16, 12, -4, -4];

console.log(b);
var tongle = 0;
for (var item of b) {
    if (item % 2 != 0) {
        tongle += item;
    }
}
console.log(tongle);
//cau 4 tim so lon nhat trong mang a va xuat chi so tai do
console.log(b);
var indexMax = 0;
for (var i = 0; i < b.length; i++) {
    if (b[indexMax] < b[i]) {
        indexMax = i;
    }
}
var mangMax=[];
for (var i=indexMax;i<b.length;i++){
    if(b[indexMax===b[i]]){
        mangMax.push(i);
    }
}
for (var item of mangMax){
    console.log(item);
}