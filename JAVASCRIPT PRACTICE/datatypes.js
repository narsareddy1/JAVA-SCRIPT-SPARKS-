//                                            DATATYPES
//datatypes are classified into 2 types namely 1.primitive,2.non-primitive

//1.PRIMITIVE DATATYPES:(IMMUTABLE:which cannot be changed once initialised)we have 7 types
//1.number ,2.string,3.boolean,4.null,5.bigInt,6.symbol,7.undefine

//1.number:which includes int,byte,short,float,long used to do several actions related to numbers
//syntax:variable name=any number;
//example1:
let num=50;
console.log(num);
console.log(typeof num);
//example2:
var currentscore=256;
let target=300;
console.log(target-currentscore);
console.log(typeof target);
//example3:
const totalcgpa=10;
let grade=7.8;
var percentage=grade/totalcgpa*100;
console.log(percentage+"%");
console.log(typeof percentage);
//example4:
let movieseats=345;
var price=250;
var profit=movieseats*price;
console.log(profit);
console.log(typeof profit);


//2.STRING:the data which is written in single/double quotes
//syntax:variable name=" " or ' '
//example1:
let firstName='narsa';
let middleName="reddy";
var surname="chinthalapally";
console.log(firstName+" "+middleName+" "+surname);
console.log(typeof firstName);
//example2:
let student1="narayan";
let student2="kapil";
let student3="arya";
console.log(student1+" is father of "+student2+" and grand father of  "+student3);
console.log(typeof student1);


//3.BOOLEAN: provide true or false by checking the conditions
//example1:
let a=5;
let b=6;
console.log(a>b);
console.log(b>=a);
console.log(typeof a,b);
//example2:
//while providing boolean values as data it values has to be give in small letters
let isTrue1=true;
// let isTrue=True;
// console.log(isTrue);
console.log(isTrue1);
let isFalse=false;
console.log(isFalse);
// let isFalse1=False;
// console.log(isFalse1);
let isFalse2=true;
console.log(isFalse2);
console.log(typeof isTrue1);
 

//4.null:it has the variable but the value is zero/null 
//# the datatype of null is "object".
//example1:
let data=null;
console.log(typeof data);
console.log(data);


//5.bigInt: used to manage the huge numbers to provide exact output
//syntax:variable name=bigInt(number)
//example1:
let num1=23445677878789777687765769876543234567890;
console.log(typeof num1);
console.log(num1);
// the above example cannot manage and provide exact output so that's why we use bigInt.
//example2:
let num2=BigInt(23445677878789777687765769876543234567890n);
console.log(typeof num2);
console.log(num2);


//6.symbol:when we have same data,it is used to show the uniqueness for eachdata.
//# only applicable for similar/same datatypes(provide true or false as outputs)
//syntax: variable name=symbol("value");
//example1:
// let data1=symbol(123);
// let data2=symbol(1232);
// console.log(data1 == data2);
// console.log(typeof data1);
// console.log(data1);


//7.undefine:creating a variable without assigning any value to it.
//# undefine lightcolor:light color indicates not assigning a value to variable.
//# undefine boldcolor:bold undefine indicates datatype.
//example1:
let book;
book=undefined;
console.log(book);
console.log(typeof book);
//example2:
console.log(action);
var action;
action="fight";
//example3:
// console.log(drama);
// let drama;
// drama="fight";




//2.NON-PRIMITIVE:(mutable:can make changes any time we need like add,delete,replace etc.)
//we have 4 types tehy are:1.array,2.arrayOfObject,3.object,4.function

//1.array:it is also an object, used to store data of multiple datatypes.
//# store values in square brackets[ , ] separated by commas,the starting index is zero.
//syntax:variable name=[value1,value2,....]
//example1:
let person=["karthik",36,'hyderabad',undefined,true];
console.log(person);
// we can take the objects and key-value pairs as values in arrays.
//example2:
let person1=["sandy",{age:36,location:"begumpet"},'hyderabad',null,{destination:'hyd'}];
console.log(person1);
console.log(typeof person1);
//Array.isArray is used to check it is an array or not,and return true or false based on it.
console.log(Array.isArray(person1));
//example3:
var person2=["narsareddy",1,{name:'karthik'},2,"shiva",3];
console.log(person2);
const person3=["book",123,"pen",25,"gift",3000,"happy married life"];
console.log(person3);
console.log(typeof person);


//2.arrayOfObjects:(here we will declare different objects as values)
//# mainly used for access a singledata inside a value in an array.
//syntax:variable name=[{key1:value1,key2:value2,....},{key1:value1,key2:value2,....},{key1:value1,key2:value2,....},.....]
//example1:
let info=[{name:"karthik",age:36,loc:'hyderabad',area:undefined,male:true},
    {name:"venu",age:25,loc:'hyderabad',salary:null,male:true},
    {name:"jack",age:61,loc:'arab',area:"dubai",male:true}];
console.log(info);
//example2:
//# to access single data inside an object we us ebelow method.
console.log(info[1],info[0],info[2]);
console.log(info[0].age,info[1].name,info[2].male);
console.log(typeof info);



//3.objects:(it will store the multiple datatypes as key-value pairs)
//syntax:variable name={key1:value1,key2:value2,....};
// In javascript all data is stored on objects.
//example1:
let staffinfo={name:"venu",
    age:25,
    loc:'hyderabad'
    ,salary:null,
    male:true};
    console.log(staffinfo);
//if we have to access each data inside a object we have two ways:
// 1(.),2([])
//example1(.):
console.log(staffinfo['loc'],staffinfo["name"]);
//example2([]):
console.log(staffinfo.loc);
console.log(staffinfo.name);
console.log(staffinfo.male);
console.log(typeof staffinfo);


//4.functions:(which used to perform many tasks in a block of code)
//syntax:function functionname(){}
//# the will execute when we are calling function call(functionname())
//example1:
function game(){
    let name="govardan";
    console.log(name)

}
game();  //function call
//example2:
function kabbadi(){
    let name="govardan";
    var duration=40;
    console.log(name+" "+duration);
    console.log(typeof duration);
    console.log(typeof kabbadi);
}
kabbadi();  //function call
//example3:
function cricket(){
    console.log(name);
     var name="kohli";
    console.log(typeof name);
}
cricket();
