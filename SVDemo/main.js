var danhSachSinhVien = new DanhSachSinhVien();

GetStorage();

var validate = new Validation();
//bo sung thuoc tinh 

SinhVien.prototype.DiemToan='';
SinhVien.prototype.DiemLy='';
SinhVien.prototype.DiemHoa='';
SinhVien.prototype.DTB='';
SinhVien.prototype.XepLoai='';
// Them phuong thuc
SinhVien.prototype.TinhDTB=function(){
    this.DTB=(Number(this.DiemHoa)+Number(this.DiemLy)+Number(this.DiemToan))/3;
}
SinhVien.prototype.XepLoai= function(){
    if(this.DTB<=10 && this.DTB>=8){
        this.XepLoai= "G";
    }else if(this.DTB<6.5 && this.DTB>=5){
        this.XepLoai="K";
    }else{
        this.XepLoai="Y";
    }

}


function DomID(id) {

    var element = document.getElementById(id);
    return element;

}
function ThemSinhVien() {
    //lay du lieu tu nguoi dung nhap vao

    var masv = DomID("masv").value;
    var hoten = DomID("hoten").value;
    var cmnd = DomID("cmnd").value;
    var email = DomID("email").value;
    var sdt = DomID("sdt").value;
    var loi=0;
    //kiem tra validation 
    if(KiemTraDauVaoRong("masv",masv)== true){

        loi++;
    }
    if(KiemTraDauVaoRong("hoten",hoten)== true){

        loi++;
    }
    if(KiemTraDauVaoRong("cmnd",cmnd)== true){

        loi++;
    }
    if(validate.KiemTraEmail(email)){
        document.getElementById("email").style.borderColor= "green";
    }
    else{
        document.getElementById("email").style.borderColor= "red";
        loi++;
    }
    if(validate.KiemTraSoDT(sdt)){

        document.getElementById("sdt").style.borderColor= "green";
    }
    else{

        document.getElementById("sdt").style.borderColor= "red";
        loi++;
    }
    if(loi!=0){
        return; 
    }
    //them sinh vien
    var  sinhvien=new SinhVien(masv,hoten,email,sdt,cmnd);
    sinhvien.DiemToan= DomID("Toan").value;
    sinhvien.DiemLy= DomID("Ly").value;
    sinhvien.DiemHoa= DomID("Hoa").value;
    sinhvien.TinhDTB();
    sinhvien.XepLoai();
    danhSachSinhVien.ThemSinhVien(sinhvien);
    CapNhatDanhSachSinhVien(danhSachSinhVien);
    console.log(danhSachSinhVien);
}

function KiemTraDauVaoRong(ID,value){
    if(validate.KiemTraRong(value)== true){

        DomID(ID).style.borderColor='red';
        return true;

    }else{

        DomID(ID).style.borderColor='green';
        return false;
    }
}

function CapNhatDanhSachSinhVien(DanhSachSinhVien){

    var lstTableSV=DomID('tbodySinhVien');

    lstTableSV.innerHTML='';
    for (var i =0 ;i < DanhSachSinhVien.DSSV.length; i++ ){
        //lay thong tin sinh vien tu trong mang sinh vien
        var sv=danhSachSinhVien.DSSV[i];
        //tao the tr
        var trSinhVien =  document.createElement('tr');
        trSinhVien.id=sv.MaSV;
        trSinhVien.className="trSinhVien";
        trSinhVien.setAttribute('onclick',"ChinhSuaSinhVien('"+sv.MaSV+"')");
        //tao cac the td and filter du lieu sinh vien thu i vao
        var tdCheckBox=document.createElement('td');
        var chkbMasinhVien=document.createElement('input');
        console.log(chkbMasinhVien)
        hkbMasinhVien.setAttribute('class','ckbMaSV');
        chkbMasinhVien.setAttribute('type','checkbox');
        chkbMasinhVien.setAttribute('value',sv.MaSV)
        tdCheckBox.appendChild(chkbMasinhVien);
        

        var tdMaSv=TaoTheTD("MaSV", sv.MaSV);
        var tdHoTen=TaoTheTD("HoTen", sv.HoTen);
        var tdCMND=TaoTheTD("CMND", sv.CMND);
        var tdEmail=TaoTheTD("Email", sv.Email);
        var tdSoDT=TaoTheTD("SDT", sv.SoDT);
        //tao td xep loai va DTB
        var tdDTB= TaoTheTD("DTB",sv.DTB);
        var tdXepLoai=TaoTheTD("XepLoai",sv.XepLoai);
        //append cac td vao tr
        trSinhVien.appendChild(tdCheckBox);
        trSinhVien.appendChild(tdMaSv);
        trSinhVien.appendChild(tdHoTen);
        trSinhVien.appendChild(tdCMND);
        trSinhVien.appendChild(tdEmail);
        trSinhVien.appendChild(tdSoDT);
        trSinhVien.appendChild(tdDTB);
        trSinhVien.appendChild(tdXepLoai);
        //append cac tr vao tbody
        lstTableSV.appendChild(trSinhVien);

    }

    
}
function TaoTheTD(className,value){

    var td= document.createElement('td');
    td.className=className;
    td.innerHTML= value;
    return td;
}
function SetStorage(){
    //chuyen doi mang danh sach sinh vien thanh chuoi json
    var jsonDanhSachSinhVien = JSON.stringify(danhSachSinhVien.DSSV);
    //roi dem chuoi json dem vao storage va dat ten la DanhSachSV
    localStorage.setItem("DanhSachSV",jsonDanhSachSinhVien);

}
function GetStorage(){
    //lay ra chuoi json la mang danh sach sinh vien
    var jsonDanhSachSinhVien=localStorage.getItem("DanhSachSV");
    var mangDSSV=JSON.parse(jsonDanhSachSinhVien);
    danhSachSinhVien.DSSV=mangDSSV;
    CapNhatDanhSachSinhVien(danhSachSinhVien);
    
}
function XoaSinhVien(){
    var lstMaSV=document.getElementsByClassName('ckbMaSV');
    // mang ma sinh vien duoc chon
    var lstMaSVDuocChon=[];
    for(var i = 0; i<lstMaSV.length;i++){
        console.log(lstMaSV[i])
        if(lstMaSV[i].checked){// kiem phan tu check box do co duoc chon hay chua
            lstMaSVDuocChon.push(lstMaSV[i].value);
        }
    }
    danhSachSinhVien.XoaSinhVien(lstMaSV);
    CapNhatDanhSachSinhVien(danhSachSinhVien);
}
function TimKiemSinhVien(){
    var tukhoa=DomID('tukhoa').value;
    var lstDanhSachSinhVienTimKiem= danhSachSinhVien.TimKiemSinhVien(tukhoa);
    CapNhatDanhSachSinhVien(lstDanhSachSinhVienTimKiem);
}
function ChinhSuaSinhVien(masv){
    var sinhvien= danhSachSinhVien.TimSVTheoMa(masv);
    if(sinhvien !=null){
        DomID("MaSV").value = sinhvien.MaSV;
        DomID("hoten").value = sinhvien.HoTen;
        DomID("cmnd").value = sinhvien.CMND;
        DomID("email").value = sinhvien.Email;
        DomID("sdt").value = sinhvien.SDT;
    }
}
function LuuThongTin(){
    var masv = DomID("masv").value;
    var hoten = DomID("hoten").value;
    var cmnd = DomID("cmnd").value;
    var email = DomID("email").value;
    var sdt = DomID("sdt").value;
    var loi=0;
    //kiem tra validation 
    if(KiemTraDauVaoRong("masv",masv)== true){

        loi++;
    }
    if(KiemTraDauVaoRong("hoten",hoten)== true){

        loi++;
    }
    if(KiemTraDauVaoRong("cmnd",cmnd)== true){

        loi++;
    }
    if(validate.KiemTraEmail(email)){
        document.getElementById("email").style.borderColor= "green";
    }
    else{
        document.getElementById("email").style.borderColor= "red";
        loi++;
    }
    if(validate.KiemTraSoDT(sdt)){

        document.getElementById("sdt").style.borderColor= "green";
    }
    else{

        document.getElementById("sdt").style.borderColor= "red";
        loi++;
    }
    if(loi!=0){
        return; 
    }
    //them sinh vien
    var  sinhvien=new SinhVien(masv,hoten,email,sdt,cmnd);
    var dssvMoi=danhSachSinhVien.SuaSinhVien(sinhvien);
    CapNhatDanhSachSinhVien(dssvMoi);
}