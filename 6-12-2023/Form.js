function addData() {
  let inputName = document.getElementById("name").value;
  let inputgender = document.querySelector(
    'input[name="gender"]:checked'
  ).value;
  let inputEmail = document.getElementById("email").value;
  let inputNumber = document.getElementById("number").value;
  let inputreading = document.getElementById("reading").checked;
  let inputplaying = document.getElementById("playing").checked;
  let inputtravelling = document.getElementById("travelling");

  if (inputName == "" || inputEmail == "" || inputNumber == "") {
    alert("All Fields are mandatory");
    return false;
  } else if (inputName == "") {
    alert("Please fill Name");
    return false;
  } else if (inputName.length < 4) {
    alert("Name must be 3 character");
    return false;
  } else if (inputName.length > 20) {
    alert("Name must be less than 20 character");
    return false;
  } else if (!isNaN(inputName)) {
    alert("Only letters are allowed ! Please enter Valid character");
    return false;
  } else {
    true;
  }

  if (inputEmail.indexOf("@") <= 0) {
    alert("Invalid @ position");
    return false;
  } else if (
    inputEmail.charAt(inputEmail.length - 4) != "." &&
    inputEmail.charAt(inputEmail.length - 3) != "."
  ) {
    alert("Invalid . position");
    return false;
  } else {
    true;
  }

  if (inputNumber.length < 10 || inputNumber.length > 10) {
    alert("Number should be of 10 Digits ! Please enter Valid Number");
    return false;
  } else if (isNaN(inputNumber)) {
    alert("Only Numbers are allowed ! Please enter Valid Number");
    return false;
  } else {
    true;
  }

  let Data = JSON.parse(localStorage.getItem("UserData")) || [];

  let hobby = [];
  // let obj = ({name: nameField, email:inputEmail, phno:inputPhone});
  // console.log(obj, "obj");
  // console.log(Data, "obj");

  if (inputreading) {
    hobby.push("reading");
  }
  if (inputplaying) {
    hobby.push("playing");
  }
  if (inputtravelling) {
    hobby.push("travelling");
  }

  Data.push({
    name: inputName,
    gender: inputgender,
    email: inputEmail,
    number: inputNumber,
    hobbies: hobby,
  });

  localStorage.setItem("UserData", JSON.stringify(Data));

  document.getElementById("name").value = "";
  document.querySelector('input[name="gender"]:checked').checked = false;
  document.getElementById("email").value = "";
  document.getElementById("number").value = "";
  document.getElementById("reading").checked = false;
  document.getElementById("playing").checked = false;
  document.getElementById("travelling").checked = false;
  let data = localStorage.getItem("UserData");
  let result = JSON.parse(data);
  const myCollection = document.getElementById("main");
  myCollection.innerHTML = " ";
  myFunction();
}

let updateUserId;
function editData(index) {
  console.log(index);
  let data = localStorage.getItem("UserData");
  let result = JSON.parse(data) || [];
  let updateData = result[index];
  console.log(updateData);
  let updatebtn = document.getElementById("updateBtn");
  // updatebtn.style.display = "inline-block";
  let addBtn = document.getElementById("addBtn");
  // addBtn.style.display = "none";
  let inputName = document.getElementById("name");
  let inputEmail = document.getElementById("email");
  let inputNumber = document.getElementById("number");
  let inputGenderMale = document.querySelector("#male");
  let inputGenderFemale = document.querySelector("#female");
  let inputreading = document.getElementById("reading");
  let inputplaying = document.getElementById("playing");
  let inputtravelling = document.getElementById("travelling");
  inputName.value = updateData.name;
  inputEmail.value = updateData.email;
  inputNumber.value = updateData.number;
  if (updateData.gender === inputGenderMale.value) {
    inputGenderMale.checked = true;
  } else if (updateData.gender === inputGenderFemale.value) {
    inputGenderFemale.checked = true;
  }
  inputreading.checked = updateData.hobbies.includes("reading");
  inputplaying.checked = updateData.hobbies.includes("playing");
  inputtravelling.checked = updateData.hobbies.includes("travelling");
  updateUserId = index;

  const myCollection = document.getElementById("main");
  for (let value in updateData.hobbies) {
    myCollection.innerHTML += ` <span style="margin:4px">${value}</span>`;
  }
  myCollection.innerHTML += `<button onclick="editData(${i})">Edit</button> <button onclick="deleteData(${i})">Delete</button> <br>`;
  myCollection.innerHTML += `<br>`;
}

function updateData() {
  let nameField = document.getElementById("name").value;
  let inputEmail = document.getElementById("email").value;
  let inputNumber = document.getElementById("number").value;
  let inputgender = document.querySelector(
    'input[name="gender"]:checked'
  ).value;
  let inputreading = document.getElementById("reading").checked;
  let inputplaying = document.getElementById("playing").checked;
  let inputtravelling = document.getElementById("travelling");
  let data = localStorage.getItem("UserData");
  let result = JSON.parse(data) || [];
  let updateUser = {
    name: nameField,
    email: inputEmail,
    number: inputNumber,
    gender: inputgender,
  };

  if (inputreading) {
    updateUser.hobbies.push("reading");
  }
  if (inputplaying) {
    updateUser.hobbies.push("playing");
  }
  if (inputtravelling.checked) {
    updateUser.hobbies.push("travelling");
  }

  result.splice(updateUserId, 1, updateUser);
  localStorage.setItem("UserData", JSON.stringify(result));

  myFunction();
}

function myFunction() {
  let data = localStorage.getItem("UserData");
  let result = JSON.parse(data) || [];
  // let div = document.getElementById("main");
  console.log(result);

  const myCollection = document.getElementById("main");

  // result.map((val,i)=>(myCollection.innerHTML+=`${result[i][val]}<br>`))

  for (i = 0; i < result.length; i++) {
    // console.log(result[i]);
    for (let val in result[i]) {
      // console.log(result[i][val]);

      myCollection.innerHTML += `<span style="margin:4px">${result[i][val]}</span>`;
    }
    myCollection.innerHTML += `<button type="button" onclick="editData(${i})">Edit</button> <button onclick="deleteData(${i})">Delete</button><br>`;
  }
}

function deleteData(index) {
  let data = localStorage.getItem("UserData");
  let result = JSON.parse(data) || [];
  result.splice(index, 1);
  localStorage.setItem("UserData", JSON.stringify(result));
  const myCollection = document.getElementById("main");
  myCollection.innerHTML = "";
  myFunction();
}

// function showData() {
//     let data = localStorage.getItem("user");
//     let result = JSON.parse(data);
//     // let div = document.getElementById("main");
//     console.log(result);

//     const myCollection = document.querySelector(".main");

//     result.map((val,i)=>(myCollection.innerHTML+=`${result[i].name}<br>`))
//     result.map((val,i)=>(myCollection.innerHTML+=`${result[i].gender}<br>`))
//     result.map((val,i)=>(myCollection.innerHTML+=`${result[i].email}<br>`))
//     result.map((val,i)=>(myCollection.innerHTML+=`${result[i].number}<br>`))
// }
