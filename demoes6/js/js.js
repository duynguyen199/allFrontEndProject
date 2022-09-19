// //es5
// var cyberSoft = "firstName";

// cyberSoft = 'lastName';

// //khai bao trung ten bien
// var cyberSoft = "firstName1";
// console.log(cyberSoft);
//es6
// let firstName2 = 'CyberSOftnew';
// firstName2 = "cybersoft new2";
// console.log(firstName2);

// const PI= 3.14;
// //khong the khai bao trung ten
// const PIi= 4.66;
// // console.log(PI);

// //hoisting 
// //es5 var
// // console.log(sum(2,3));
// // console.log(city);// undefine chua gan gia tri
// function sum(x,y){
//     return x+y;

// var city="Ho Chi Minh";

//es6
// console.log(NAME);
// console.log(address);
// console.log(city);
// const NAME = "cyber soft";
// let address= "ahaha";
// var city= "ho chi minh";


//scope
//golbal
// var name = "be heo";
// function weight(){
//     //local
//     var w= 100;
//     console.log(name + "nang"+ w + "kg");
// }
// weight();
// console.log(name);
// console.log(w);




/****
 * ES6 Arrow Function
 * 
 * 
 */
// let hello1= (name)=>{
//     return 'hello' +name;
// }

// //chi co tham so
// //co the bo dau tron
// let hello2= name=>{
//     return 'hello' +name;
// }
// console.log(hello2("aha"))

// //neu chi co mot lenh return bo dau {} va tu khoa return
// let hello3= name=>'hello' +name;

// console.log(hello3("aha"));


/**loi cu phap
 * 
 * Dont enter at the arrow, just before and after
  */
// let hello=(name)=>{
//     return 'hello'+ name
// }


// let hello= ()=>"hello MI";
// console.log(typeof hello);

/**this in es6 */



// let hocVien = {
//     hoTen: "A",
//     lop: " 12",
//     diemThi: [8, 9, 10],


//     layThongTinHocVien: function() {
//         this.diemThi.map((diem,index)=>{
//             console.log("ho ten" + this.hoTen + this.lop);
//         });
//         // this.diemThi.map(diem, index){
//         //     console.log("ho ten" + this.hoTen + this.lop);
//         // }.bind(this));

//     }
// }

// let hello= ()=>{
//     console.log("hello");
// }
// hello();

//es5
// function getUserInfo(name,age){

/**cach 1 dung if else */
// if(name == undefined || age == undefined){
//     console.log("gia tri khong hop le ");
//     name="default";
//     age='18';
// }
// if(age>18 && age<30){
//     console.log(name + " dang con tre")
// }else{
//     console.log(name+ " lon tuoi roi")
// }
/**cach 2 terrnary operator */
//     name= name== undefined ? "defaul name": name;
//     age=age == undefined ? "default age": name;
//     if(age>18 && age<30){
//         console.log(name + " dang con tre")
//     }else{
//         console.log(name+ " lon tuoi roi")
//     }
//     /**cach 3 toan tu */
//     name = name || "default name"
//     age = age || 18;
//     // if(age>18 && age<30){
//     //     console.log(name + " dang con tre")
//     // }else{
//     //     console.log(name+ " lon tuoi roi")
//     // }
// }
// getUserInfo();
// let getUserInfo = (name = 'mi', age = '18') => {
//     if (age > 18 && age < 30) {
//         console.log(name + " dang con tre")
//     } else {
//         console.log(name + " lon tuoi roi")
//     }
// }
// getUserInfo();

/*
Res Parameters
*/

// let tinhDiemTB=(... danhSachDiem)=>{
//     console.log(danhSachDiem);
//     let tongDiem=0;
//     for(let i=0;i<danhSachDiem.length;i++){
//         tongDiem+= danhSachDiem[i];
//     }
//     let dtb=tongDiem/3;
//     console.log(dtb);
// }
// tinhDiemTB(7,7,7)


/*
Spread parameter
*/

//them phan tu vao mang
// let magC=[1,2,3,4];
// let magA=[...magC];
// console.log(magA);
// magA.push(5);
// magA.push(8);
// console.log(magA);


// //them thuoc tinh cho doi tuong
// let pet={
//     name:"be na",
//     breed:"cho",

// }
// let newPet={
//     age:'4',
//     ...pet
// }
// console.log(newPet);

/*Destructoring 

*/
//array
// let program=['javaScript','java','python','C++']
// //es5
// console.log(program[3]);
//es6
// let [first,second,third,fourth]=program;
// console.log(first);
// console.log(second);

//object
// 
// let pet={
//     name:"gau dan",
//     tuoi:'23',
//     size:{
//         weight:"55",
//         height:'56'
//     }
// }

// let{name,tuoi}=pet;
// let{weight: w, height: h}=pet.size;


/*
Template Strings
 */
// let pet="fish";
// let action="swim";
// // I am fish,I am swimming
// // es5
// // console.log("I am "+pet + ", I am "+action);
// //es6
// console.log(`I am fish ${pet},
// I am ${action}ming`);
// let a=4;
// let b=6;
// console.log(`Sum ${a+b}`)
// document.querySelector("#section1").innerHTML=`
// <div>
//     <p>
//     I am fish ${pet},
//     I am ${action}ming  
//     </p>
// </div>`;


/* 
Object literals
*/

//es5
// var name='mi'; 
// var my_object={
//     name:name,
//     sayHi:function(){
//         console.log('hi my name '+ this.name)
//     }
// }
// my_object.sayHi();
//es6
// let name='mi'; 
// let my_object={
//     name,
//     sayHi(){
//         console.log('hi my name '+ this.name)
//     }
// }
// my_object.sayHi();


// let name='ten'; 
// let my_object={
//     //ten:'mi'
//     [name]:'mi',
//     sayHi(){
//         console.log('hi my name '+ this.name)
//     }
// }
// my_object.sayHi();

//for

// let currencies=['VND','USD','SGN'];
// // for(let i=0;i<currencies.length;i++){
// //     console.log(i,currencies[i]);
// // }

// //es5
// //for .. in
// // for (let i in currencies){
// //     console.log(i,currencies[i]);
// // }

// //es6
// //for ... of
// // for (let value of currencies){
// //     console.log(value);
// // }

// for(let[index,value]of currencies.entries()){
//     console.log(index,value)
// }

// let arr1=[1,2,3];
// let arr2=arr1;
// arr1.push(4);
// arr2.push(5);

//   console.log(arr1);
//   console.log(arr2);


// const objStudent=[
//   {
//     name:'John',
//     age:19,
//     email:'aaa@gmail.com',
//   },
//   {
//     name:'nicole',
//     age:22,
//     email:'bb@gmail.com',
//   }
// ];
// for(let i=0; i<objStudent.length;i++){
//   const{name,age,email}=objStudent[i];
//   console.log(name,age,email);
// }

// let arrStudent= ['M',"Mi","S"];
// for (let student of arrStudent.entries()){
//   console.log(student[1]);

// const phone=[
//   {id:1,model:'iphone1',price:100000},
//   {id:2,model:'iphone2',price:110000},
//   {id:3,model:'iphone3',price:120000},
//   {id:4,model:'iphone4',price:130000},
//   {id:5,model:'iphone5',price:140000},

// ]
// let newpHone=[];
// for(let key in phone){
//   if(phone[key].price>110000){
//     newpHone.push(phone[key])
//   }
// }
// console.log(newpHone);

// const fetchFood=(id)=>{
//   axios({
//     method: "DELETE",
//     url:`https://api.example.com/${id}`
//   })
//   .then((res)=>{
//     console.log(res.data);
//   })
//   .catch((err)=>{
//     console.log(err);
//   })
// };
// fetchFood("123")
// console.log(a);
// var a=1;

// let arrStudents=['Mark','Mike','Sonya'];
// for (let student of arrStudents.entries()){
//   console.log(student[1]);
// }

// let arr1=[1,2,3]
// let arr2=arr1.concat(4,5)
// console.log(arr1);
// console.log(arr2);


// const cars=[
// {type:'Volvo',year:'2016'},
// {type:'Saab',year:'2001'},
// {type:'BMW',year:'2010'}
// ]
// console.log(cars.sort((a,b)=>a.year-b.year));

const value= {number:10};
const multiply=(x={...value})=>{
  console.log((x.number*=2))
};
multiply();
multiply();
multiply(value);
multiply(value);