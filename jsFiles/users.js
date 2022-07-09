let API = "https://my-json-server.typicode.com/Jeck99/fake-server/users";
async function getUsers() {
  try {
    return await fetch(API).then((res) => res.json());
  } catch (error) {
    console.log(error);
  } finally {
  }
}

function printUsersToTable() {
  let myTable = document.getElementById("tbody");
  getUsers().then((res) => {
    res.forEach((element) => {
      myTable.innerHTML += `
      <tr>
      <td> ${element.age}</td>
      <td>${element.name.first}</td>
      <td>${element.name.last}</td>
      <td>${element.phone}</td>
      </tr>
      `;
    });
  });
}
printUsersToTable();

async function getUser() {
  let myTable = document.getElementById("userTable");
  const newUser = {
    info: {
      phone: input_phone.value,
      name: {
        last: input_lastName.value,
        first: nameRegister.value,
      },
      age: input_birth.value,
    },
  };
  try {
    await fetch(API, {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
  } finally {
    myTable.innerHTML += `
  <tr>
  <td>
  ${input_birth.value}
  </td>
  <td>
  ${nameRegister.value}
  </td>
  <td>
  ${input_lastName.value}
  </td>
  <td>
  ${input_phone.value}
  </td>
  </tr>
  
  `;
  }
}

function registerUser() {
  getUser();
}


// d

// function registerUser() {
//   registration.innerHTML=`<div>Thank you for signing up!</div><br>`
// }

//  async function registerUser(event) {
//   event.preventDefult()
//   let obj = getFormInfo(event)
//   let user = await fetch(API,{
//     method:'POST',
//     headers:{
//       'Content-Type':'application/json'
//     },
//     body:JSON.stringify(obj)
//   }).then(res=> res.json())
//   main.insertAdjacentHTML("beforeens",printUser(user))
//  }

//  function getFormInfo(event,obj={name:{}}) {
//   let elments = [...document.getElementsByTagName("input")]
//   elments.forEach(element =>{
//     if(element.name =='first'||element.name=='last'){
//       obj.name[element.name] = element.value
//     }else{
//       obj[element.name]= element.value
//     }
//   })
//   return obj
//  }
