//                                              OPERATORS
//# used to do many tasks and provide useful data with help of operators and operands.
//we have several types of operators, they are 1.arthematic,2.assignment,3.comparision,4.logical,5.type operator.
// 6.increment,7.decrement,8.type casting

//1.ARTHEMATIC OPERATOR:(Which deals with +,-,*,/,%,**,++.--,etc.)
//example1:
let a=10;
let b=25;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);
console.log(a++,++a,--b,b--);


//2.ASSIGNMENT OPERATOR:(Which  used to assign or pass a value to variable)
//example1:
let c=100;
let d=50;
console.log(c+=d);
console.log(c-=d);
console.log(c*=d);
console.log(c/=d);
console.log(c%=d);
console.log(c+=-d);


//3.COMPARISION OPERATER:(compare the both 2 values and provide the output as true/false )
//# we have 3 types in these,they are:relational,abstract,strict
//*RELATIONAL OPERATOR:(DEALS WITH <,>,>=,<=)
//example:
let x=25;
let y=46;
console.log(x>y);
console.log(x<y);
console.log(x>=y);
console.log(x<=y);
//*ABSTRACT OPERATOR:(Only compare values, not compare/check datatypes)[==,!=]
//example:
let x1='255';
let y1=46;
console.log(x1==y1);
console.log(x1!=y1);
console.log(x1>=y1);
console.log(x1<=y1);
//*STRICT OPERATOR:( compare both the values,check datatypes)[===,!==]
//example:
let x2='255';
let y2=46;
console.log(x2===y2);
console.log(x2!==y2);
console.log(x2>=y2);
console.log(x2<=y2);


//4.LOGICAL OPERATORS(used to combine and compare multiple conditions and provide true/false values)
// # symbols for logical are:&&(logical and),||(logical or),!(not)
//# some falsy values are:(0,undefine,null," ",false)
//# NaN(not a number):it will show in the output. example:
console.log("hello"-1);
console.log("hello"*1);
console.log("hello"+1);// string will concate with a number ,but we cant subract or multiply a string with number.
//examples for(&&,||,!)
//1.logical And(&&):(the both conditions has to be true,if we want to execute the if condition in logical And.)
//example:
let u=28;
let v=65;
let w=20;
if(u<=v&&v>=w){
    console.log("logical and succesfully executed");
}
else{
    console.log("logical and not succesfully executed");
}
//2.logical or(||):(either any one  conditions has to be true,if we want to execute the if condition in logical or.)
//example:
let u1=60;
let v1=85;
let w1=40;
if(u1<=v1||v1<=w1){
    console.log("logical Or succesfully executed");
}
else{
    console.log("logical Or not succesfully executed");
}
//3.not operator:(it will print the quite opposite things)
//example:
let q1=60;
let z1=85;
console.log(!q1,!z1);


//5.TYPE OPERATOR:(Used to check the datatype of the variable)
//example:
let name="john wick";
console.log(typeof name);//string
let value=36;
console.log(typeof value);//number
var calories=360;
console.log(typeof calories);//number
const id="reddy";
console.log(typeof id);//string
let loc;
console.log(typeof loc);//undefined
let loc1='vijag';
console.log(typeof loc1);//string
let money=null;
console.log(typeof money);//object
let isTrue=true;
console.log(typeof isTrue);//Boolean
let data=Symbol("123");
let data1=Symbol(123);
console.log(data===data1);
console.log(typeof data);//Symbol


//6.INCREMENT OPERATOR:(Used to shift the values towards left side,increase the value)
//symbol is:(<<)
//example:
let m=8;
let n=7;
console.log(m<<n);//output is 1024
console.log(m<<2);
console.log(n<<5);


//7.DECREMENT OPERATOR:(Used to shift the values towards right side,decrease the value)
//symbol is:(>>)
//example:
let m1=8;
let n1=7;
console.log(m1>>n1);//output is 0
console.log(m1>>2);
console.log(n1>>5);


//8.TYPE CASTING:(USED TO CHANGE FROM ONE DATATYPE TO OTHER DATATYPE)
// we can do it in 2 ways,they are:1.Explicit type conversion,2.implicit type corrosion.

//1.EXPLICIT TYPE CONVERSION:(manually done/changed by us)
//#  includes number,string,boolean
//* NUMBER:converting other datatypes into number.example:
let age="56";
let presentage=Number(age);
let a2=Number(age)/2;
console.log(typeof presentage,typeof a2);
//* STRING:converting other datatypes into string.example:
let amount=560;
let balance=String(amount);
console.log(typeof balance);
//* BOOLEAN:converting other datatypes into boolean.example:
let amount1="560";
let balance1=Boolean(amount);
console.log(typeof balance1);
console.log(balance1);

//2.IMPLICIT TYPE CORROSION:(changes done automatically,not by us)
//#string will concat only with + operator.
//# string will do all operations sub,mul,div,% except +, because string is concat with the addition operator.
//# prompt:any input that we are giving in prompt is converted into string.if we give number,boolean 
// values it is bydefault it will convert them as string and take them as string inputs.so in these 
// place we use explicit type conversion if we need input as number.example:
// let value1=prompt("enter a value: ");
// console.log(value1);
// console.log(typeof value1);
// let remaining=Number(value1);
// console.log(remaining);
// console.log(typeof remaining);
//examples for implicit corrosion :
console.log("5"+256+'87'-200*2);
console.log("5"+256/2+'87'-200-9*2);
console.log("5"+256%56+'87'-200/65*2);
console.log('89'/3+53-"56"+42);
console.log(5+'200'-100);
console.log(5+'6');

