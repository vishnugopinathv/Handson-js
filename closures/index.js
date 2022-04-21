// //closures

// //   function counter(){
// //     var counter = 0;

// //     function IncreaseCounter() {//this function can access var counter beacuse both function and var counter was created on execution of counter();
// //         return counter += 1;
// //     };

// //     return IncreaseCounter;//it will return the incremented value of counter
// // }

// // var counter = counter();//it assigns the function increaseCounter to counter
// // alert(counter());//1
// // alert(counter());//2
// // alert(counter());//3
// // alert(counter());//4

// //question 2

// let count = 0;
// (function immediate() {
//   if (count === 0) {
//     let count = 1;
//     console.log(count); // 1 is logged since if condition is true
//   }
//   console.log(count); // 0 is logged because the 1 assigned is inside block so it will log the 0 from the count in global scope
// })();

// //question 3

// for (var i = 0; i < 3; i++) {
//     setTimeout(function log() {
//       console.log(i); // What is logged? it logs 3 three times its because the call back function is executed after the execution of the loop and every callback takes value of i as last value which is 3.
//     }, 1000);
//   }

//   //this can be solved by using let i=0 because let has block scopeand when used in for loop you get diffrent value for i on each iteration


//   //question 4-Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.

//   function outer(length){
//     let area;    
//     inner(20);
//     function inner(breadth){
//             area= length*breadth;//it can access parameter of outer since it is created on the execcution of outer and parameter is part of the closure
//         }
//         console.log(area);
//   }
//   outer(10);

//   //question 5-Take a variable in outer function and create an inner function to increase the counter every time it is called

//   const outerCounter=function(){
//       let a=0;
//       innerCounter=function(){
//           console.log(++a);
//       }
//   }
//   outerCounter();//1
//   innerCounter();//2
//   innerCounter();//3
//   innerCounter();//4

//   //question-6 print output

// // var a = 12;
// // (function () {
// //   alert(a);//output is 12 , it can acess var a=12 since its on global scope
// // })();

// //question -7

// var a = 10;
// var x = (function () {
//   var a = 12;
//   return function () {
//     alert(a);//output is 12, access the variable that is last declared
//   };
// })();
// x();

//question 8

var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = "+ outerArg + "\n"+
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);
    
    })(456);
})(123);

//the output is 

//outerArg = 123
//innerArg = 456
//outerVar = a
//innerVar = b
//globalVar = xyz