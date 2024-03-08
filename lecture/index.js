// const addData = (e) => {
//   e.preventDefault();
//   const myCollection = document.getElementById("main");
//   // let input=document.getElementById("name").value;
//   const getDataFromLocal = JSON.parse(localStorage.getItem("users")) || [];

//   let input = document.querySelector("#name").value;
//   let obj = { name: input };
//   console.log(obj, "obj");
//   console.log(getDataFromLocal, "getDataFromLocal");
//   getDataFromLocal.push(obj);
//   console.log(getDataFromLocal, "data");
//   localStorage.setItem("users", JSON.stringify(getDataFromLocal));
//   document.querySelector("#name").value = "";
//   myCollection.innerHTML+=`${input} <br> `

// };

// const showData = () => {
//   let data = localStorage.getItem("users");
//   let result = JSON.parse(data);
//   let div = document.getElementById("main");
//   // result.map(val=>{

//   // })
//   const myCollection = document.getElementById("main");
//   // for (let i = 0; i < result.length; i++) {
//   //     myCollection.innerHTML+=`${result[i].name}<br>`;
//   // }
//   result.map((val, i) => (myCollection.innerHTML += `${result[i].name}<br>`));
// };
// // localStorage

// const deleteData=()=>{
//     // localStorage.removeItem("name");
//     localStorage.clear();
// }

// function myFunction(){
//     const myCollection = document.getElementById("main");
//     let data = localStorage.getItem("users");
//   let result = JSON.parse(data)||[];
//   console.log(result);
//   result.map((val, i) => (myCollection.innerHTML += `${result[i].name}<br>`));

// }

// function hobbiesHandler(e){
// console.log(e.target.checked);
// console.log(e.target.value);

// let hobby=JSON.parse(localStorage.getItem("hobby"))||[];
// if(e.target.checked)
// {
//     if(!hobby.includes(e.target.value))
//     {
//         hobby.push(e.target.value)
//         localStorage.setItem("hobby",JSON.stringify(hobby));
//     }
// }
// else
// {
//         let index=hobby.indexOf(e.target.value);
//         hobby.splice(index,1);
//         console.log(hobby,"after delete");
//         localStorage.setItem("hobby",JSON.stringify(hobby));
// }
// console.log(hobby);
// }

["abc", "sneha", "asha", "harshita", "amit"];

function names(arra1) {
  return arra1.filter((name) => name.startsWith("a"));
}
console.log(names(["abc", "sneha", "asha", "harshita", "amit"]));

let obj = {
  name: "ha",
  age: 20,
  email: "fgf",
};

let obj2 = { ...obj, num: "20" };
console.log(obj2);
