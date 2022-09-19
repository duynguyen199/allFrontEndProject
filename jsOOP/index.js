//dinh nghia su kien cho nut xac nhan
var xuLyXacNhan = function () {
    //lay thong tin nguoi dung nhap vao
    var maSinhVien = document.querySelector('#maSinhVien').value;
    var tenSinhVien = document.querySelector('#tenSinhVien').value;
    var loaiSinhVien = document.querySelector('#loaiSinhVien').value;
    var diemToan = document.querySelector('#diemToan').value;
    var diemLy = document.querySelector('#diemLy').value;
    var diemHoa = document.querySelector('#diemHoa').value;
    var diemRenLuyen=document.querySelector('#diemRenLuyen').value;
    //tinh diem trung binh
    var diemTrungBinh = tinhDiemTrungBinh(diemToan, diemLy, diemHoa);
    //xep loai
    var xepLoaiSinhVien= xepLoai(diemTrungBinh,diemRenLuyen);
    //xu li in ket qua ra giao dien
    document.querySelector('#txtTenSinhVien').innerHTML=tenSinhVien;
    document.querySelector('#txtMaSinhVien').innerHTML=maSinhVien;
    document.querySelector('#txtLoaiSinhVien').innerHTML=loaiSinhVien;
    document.querySelector('#txtTenSinhVien').innerHTML=tenSinhVien;
    document.querySelector('#txtDiemTrungBinh').innerHTML=diemTrungBinh.toFixed(2);
    document.querySelector('#txtXepLoai').innerHTML=xepLoaiSinhVien;

}
//ham tinh diem trung binh
var tinhDiemTrungBinh = function (diemToan, diemLy, diemHoa) {
    var dtb = (Number(diemHoa) + Number(diemLy) + Number(diemToan)) / 3;
    return dtb;
    
}
//ham xep loai
var xepLoai = function (diemTrungBinh, diemRenLuyen) {
    if (diemRenLuyen < 5) {
        return 'yeu';
    } else {
        if (diemTrungBinh < 5) {
            return 'yeu';
        } else if (diemTrungBinh >= 5 && diemTrungBinh < 6.5) {
            return 'trung binh';
        } else if (diemTrungBinh > -6.5 && diemTrungBinh < 7) {
            return 'kha';
        } else if (diemTrungBinh >= 8 && diemTrungBinh < 9) {
            return 'Gioi';
        } else if (diemTrungBinh >= 9 && diemTrungBinh < 10) {
            return 'xuat xac';
        } else {
            return 'khong hop le';
        }
    }
}
document.querySelector('#btnXacNhan').onclick = xuLyXacNhan;
