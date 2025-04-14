//                                       VARIABLES:(a container which used to store the organised data)
//# we have 3 types of variables 1.var,2.let,3.const
//1.var variable:(global scope)
var topic="java script";
console.log(topic);
//# we can assign,reassign,declare,redeclare with the var. 
//example:
var book;
 book="sandya";
console.log(book);
 var book="karthik"
 console.log(book);

//2. let variable:(block scope)
//# we can assign,reassign,declare but we cannot redeclare with let.
//example:
let book1;
 book1="panda";
console.log(book1);
book1="panda1";
console.log(book1);
//  let book1="karthik"
//  console.log(book1);

//3.const variable:(block scope)
//# which is cannot be changed after once it is created.
//# we cannor reassign or redeclare with const variable.example:
const mouse="dada";
console.log(mouse);
//  mouse="dada";
// console.log(mouse);


//                                    SCOPES
//1.LOCAL SCOPE:variable which is declared and access within a method/block cannot access oustside the block for entire code.
//# we can use let,var,const as variables.eg:let,var,const
//example1:
function key(){
  let course="python";
//   var course="python";
//   const course="python";
  console.log(course);
}
key();
// console.log(course);

//example2:
//# if we use any conditional block inside a function using var variable,that will act as local variable for the code inside a function.
function key1(){
    if(true){
    var bed="python1";
    console.log(bed);
}
console.log(bed);
  }
  key1();
//   console.log(bed);

//example3:
//# if we use any conditional block inside a function using let,const variable,that will not act as local variable don not produce output.
function key2(){
    if(true){
    // const buds="python2";
    // let buds="python2";
    var buds1="python2";
    console.log(buds1);
}
console.log(buds1);
}
  key2();
//   console.log(buds1);



//2.GLOBAL SCOPE:variable which is declared outside a block and can be access for entire code.
//# we can use var as variable.eg:var
//example 1:
//# if we are redeclare the variable, then the variable which is redeclared inside a block is
//  cannot accessed by any statement outside the block
var course1="javafs";
function lock(){
    var course1="javafs1";
    console.log(course1)
  }
  console.log(course1);
  lock();
  console.log(course1);

  //example 2:
//# if we are reassingn without redeclaring then the variable, then the reassign value will replace
//  the initial value and and can be accessed by any statement outside the block.
var bed1="javafs";
function lock1(){
    bed1="javafs2";
    console.log(bed1)
  }
  console.log(bed1);
  lock1();
  console.log(bed1);

   //example 3:
 //# we cant reassign to const variable ,but we can redeclare const variable to produce output.
 //# we can reassign and redeclare let,var variables.
let buds1="javafs";
// var buds1="javafs";
// const buds1="javafs";
function lock2(){
    buds1="javafs3";
    console.log(buds1)
  }
  console.log(buds1);
  lock2();
  console.log(buds1);

   //example 4:
 //# we cant reassign to const variable ,but we can redeclare const variable to produce output.
const pen="javafs";
// let pen="javafs";
// var pen="javafs";
function lock3(){
   const pen="javafs4";
//    let pen="javafs4";
//    var pen="javafs4";
    console.log(pen)
  }
  console.log(pen);
  lock3();
  console.log(pen);




//3.BLOCK SCOPE:variable which is declared and access within a method/block cannot access oustside the block for entire code.
//# we can use only let,var variables and we cannot use const variable because it is a global variable.eg:let,const
//# similar to local scope,but we dont use "var variable".
//example1:
function letter(){
    let course2="css";
  //   const course2="css";
    console.log(course2);
  }  
  letter();
  // console.log(course2);
  
  //example2:
  //# if we use any conditional block inside a function using var variable,that will act as local variable for the code inside a function.
  function letter1(){
      if(true){
      var bed2="css1";
    //   let bed2="css1";
    //   const bed2="css1";
      console.log(bed2);
  }
  console.log(bed2);
    }
    letter1();
    // console.log(bed2);