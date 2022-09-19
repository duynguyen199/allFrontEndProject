/*OOP 
 */
//es5

//class: khai bao lop doi tuong

// function Student(name,address){
//     this.name=name;
//     this.address=address;
// }

// var st = new Student('ha','132');
// console.log(st.name,st.address);

//es6
// class Student{
//     constructor(name,address){
//         this.name=name;
//         this.address=address;
//     }
// }
// let student=new Student('ha','7');
// console.log(student.name,student.address);

/*EXtend**/

//es5
// function Father(name){
//     this.name=name;
// }
// Father.prototype.createColorEyes=function(){
//     console.log("Black");
// }
// function Children(name){
//     // ke thua thuoc tinh
//     Father.apply(this,arguments);
// }
// //ke thua phuong thuc tu Father
// Children.prototype= new Father;
// // Children.prototype.createColorEyes =function(){
// //     console.log("Green");
// // }
// Children.prototype.createColorSkins=function(){
//     console.log("White");
// }

// var child=new Children('con');
// console.log(child.name);
// child.createColorEyes();
// child.createColorSkins();


//es6
// class Father{
//     constructor(name){
//         this.name=name;
//     }
//     createColorEyes(){
//         console.log("black");
//     }
// }
// //ke thua thuoc tinh va phuong thuc tu class Father
// class Child extends Father{
//     createColorSkins(){
//         console.log("brown");
//     }
// }

// let instanceChild= new Child('Trang');
// console.log(instanceChild.name);
// instanceChild.createColorEyes();
// instanceChild.createColorSkins("black");


/***
 * 
 * Method Override
 */

// class Person{
//     constructor(name){
//         this.name=name;
//     }
// }
// Person.prototype.getName=function(){
//     return this.name;
// }
// class Student extends Person{
//     // super()
//     getPersonName(){
//         return super.getName();
//     }
// }
// Student.prototype.getName=function(){
//     return 'hello ' +this.name;
// }
// let st=new Student("thanh");
// console.log(st.getName());
// console.log(st.getPersonName());


/**
 * Proxy
 */

let pet = {
    name: 'cau vang',
    age: '2',
    breed: 'shiba'
}
// let pet1 = new Proxy(pet, {
//     get(target, prop, receiver) {
//         if (typeof target[prop] === 'string') {
//             return target[prop].toUpperCase();
//         }
//         return target[prop];
//     }
// });

// console.log(pet1.name,pet1.age,pet1.breed);

let pet1= new Proxy(pet,{
    set(target,prop,val){
        if(prop==='age' &&typeof val !=='number'){
            throw new TypeError('Age must be a number');
        }
        target[prop]= val;
        return true;
    }
});
// pet1.age='123';
pet1.age= 10;
console.log(pet1.age)