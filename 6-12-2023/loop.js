// let stringVar="harshita"; //string
// console.log(typeof stringVar,"stringVar"); //string
// let num=10;//number
// console.log(typeof num,"num"); //number

// let boolVar=true;//boolean
// console.log(typeof boolVar,"boolVar"); //boolean

// let bool=false;
// let obj={
//     age:20,
//     gender:"female"
// }//object
// console.log(typeof obj,"obj"); //object

// let arr=["a","hhh",1,10,true];//array
// console.log(typeof arr,"arr"); //object

// Array.isArray(arr);
// let undefinedVar=undefined;//undefined
// console.log(typeof undefinedVar,"undefinedVar"); //undefined

// let nullVar=null;//null
// console.log(typeof nullVar,"nullVar"); //object

// let bigNumber=123n;//bigint
// console.log(typeof bigNumber,"bigNumber"); //bigint


// //======array
// arr=10;

// //3 way
// // 1 method:-static
// // const newArr=[10,"dd",{name:"ddd",age:20},[10,20,"34"],null,undefined,true,false];

// // console.log(newArr[2]);

// // //2-method usong Array()
// // let arr2=new Array(5);
// // console.log(arr2);
// // arr2[0]="harshita";
// // arr2.push({age:23});
// // console.log(arr2);

// //3 method

// let arr3=[];

// // for(let i=0;i<5;i++)
// // {
// //     let num=prompt("Enter num");
// //     arr3.push(num)
// // }
// // console.log(arr3);


// //object

// let object={
//     age:20,
//     gender:"female",
//     obj:{
//         gmail:"abc@gmail.com"
//     },
//     arr:[1,4,5,5],
//     age:25
// }

// console.log("age",object.obj.gmail);
// console.log(object.arr[2]);
// console.log(object.arr);
// console.log(object);


// /**
//  * 1.for loop
//  * while
//  * do while
//  * for in
//  * for of
//  */

// // while(conditon)
// // {
// //     // code
// //     // incr/decr
// // }

// // while(i<=10)
// // {
// //     console.log(i);
// //     i++;
// // }

// // do{
// //     code
// // }while(condition)

// // do{
// //     console.log(i);
// //     i++;
// // }while(i<=10);
// // for(let i=1;i<=10;i++)
// // {
// //     console.log(i);
// // }

// // for of === value
// //use = array
// // for(let variable of array)
// // {

// // }


// // console.log("===============for of===============");
// // for(let value of newArr)
// // {
// //     console.log(value);
// // }
// // console.log("===============for in===================");

// // for(let key in object)
// // {
// //     console.log(object[key]);
// // }

// // console.log(newArr);

// // falsy and truthy

// /**
//  * null
//  * undefined
//  * ""
//  * 0
//  * false
//  */


// let str=" ";
// console.log(str.length);

// const newArr=[10,"dd",{name:"ddd",age:20},[10,20,"34"],null,undefined,true,0,""," ",[],{}];
// let truthyValue=[];
// let falsyValue=[];//[null,undefined,0,""]


// --



// for(let i=1;i<=5;i++)
// {
//     for(let j=1;j<=i;j++)
//     {
//         document.write("*");
//     }
//     document.write("<br>");
// }

// /============== 11-12 ==============

// var a;//undefined
// console.log(a);

// var a=10;//10
// console.log(a);
// // const b;//error
// // console.log(b);
// const b=10;//10
// console.log(b);

// let c;//undefined
// console.log(c);
// c=10;//error
// console.log(c);


// string
let number =100;
let str1="http://127.0.0.1:5500/lecture/index.html";
// console.log("slice",str1.slice(8,5));
// console.log("slice",str1.substring(8,5));
// console.log("substring -1",str1.substring(-2,1));//(1,-2)
// console.log("slice -1",str1.slice(-5));
// console.log("substr",str1.substr(5,7));
// console.log("replace",str1.replaceAll('a',"g"));
// console.log("concat",str1.concat(newStr,"dsfsdf"));

// console.log(str1.trim())
// console.log(str1.trimEnd())
// console.log(str1.trimStart())
// console.log(str1.charAt(4))
// console.log(str1.charCodeAt(7));
console.log(str1.split("/"));
// let newStr="World";
//         // 01234
// console.log(str1.length);
// console.log(str1);
// let str2='Hello Str2 ${number}'+ " " + number + "\n"
// +"ddd"
// console.log(str2);

// let str3=`Hello Str3 ${number} 
// vfdd `;//template string
// console.log(str3);

// patern slink
// https://codedost.com/c/character-alphabet-patterns-c/


for(let i=65;j<=69;j++)
{
  for(let i=65;i<=j;i++)
  {
     document.write(String.fromCharCode(i));
  }
  document.write("<br>")
}

///==================

// break , continue,math,date,sets,maps,regexp,useStrict

// for (let i = 0; i < 2; i++) {
//   for (let j = 0; j < 5; j++) {
//     if (j == 3) {
//       continue;
//     }
//     console.log(j, "j");
//   }
//   console.log(i, "i");
// }

// try {

//   let str="abcd";
//   str?.push("fff")
// } catch (error) {
//     throw new Error(error)
// }finally{
//     console.log("final");
// }

// // lexical scope: scope of parent function is lexical scope for child function
// // scope chain
// function fun1(){
//   let a=10;

//   function fun2(){
//       console.log(a);
//   }

// }



const addData = (e) => {
  e.preventDefault()
  // let input=document.getElementById("name").value;
  const getDataFromLocal = JSON.parse(localStorage.getItem("users")) || [];

  let input = document.querySelector("#name").value;
  let obj = { name: input };
  console.log(obj, "obj");
  console.log(getDataFromLocal, "getDataFromLocal");
  getDataFromLocal.push(obj);
  console.log(getDataFromLocal, "data");
  localStorage.setItem("users", JSON.stringify(getDataFromLocal));
  // document.querySelector("#name").value = "";
  // let input=document.querySelector("#name").style.color="red";
  // console.log(JSON.parse(result));
};

const showData = () => {
  let data = localStorage.getItem("users");
  let result = JSON.parse(data);
  let div = document.getElementById("main");
  // result.map(val=>{

  // })
  const myCollection = document.getElementById("main");
  // for (let i = 0; i < result.length; i++) {
  //     myCollection.innerHTML+=`${result[i].name}<br>`;
  // }
  result.map((val,i)=>(myCollection.innerHTML+=`${result[i].name}<br>`))
};
// // localStorage

// const deleteData=()=>{
//     // localStorage.removeItem("name");
//     localStorage.clear();
// }


/**
 * name
 * gender
 * email
 * phone number 
 * hobby //reading playing travelling
 */
