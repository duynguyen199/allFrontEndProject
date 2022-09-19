function getElec(id) {
    return document.getElementById(id);
}
function calculateTip() {
    var tongBill = getElec("billamt").value;
    var haiLongVaTip = getElec("serviceQual").value;
    var soNguoiShare = getElec("peopleamt").value;

    //validation
    if (tongBill === "" || haiLongVaTip == 0) {
        alert("Vui long chon gia tri");
        return;
    }
    // kiem tra co nhap vao so nguoi share tip hay khong
    if (soNguoiShare === "" || soNguoiShare <= 1) {
        soNguoiShare = 1;
        getElec("each").style.display = "none";
    } else {
        getElec("each").style.display = "block";
    }

    //tinh toan
    var tongTip = (tongBill * haiLongVaTip) / soNguoiShare;
    //lam tron den phan thap phan co hai chu so
    tongTip = Math.round(tongTip * 100) / 100;
    // dam bao luc nao cung co hai chu so o phan thap phan
    tongTip = tongTip.toFixed(2);
    //hien thi vung tien tip
    getElec('totalTip').style.display="block";
    getElec('tip').innerHTML=tongTip;
}
getElec('totalTip').style.display="none";
getElec('each').style.display="none";


getElec("calculate").onclick = function () {
    calculateTip();
}