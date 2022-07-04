let API = "https://my-json-server.typicode.com/Jeck99/fake-server/users";
async function getUsers() {
  try {
   return await fetch(API).then(res=>res.json())
  } 
  catch (error) {
    console.log();(error)
  }
  finally{}
}

function printUsersToTable() {
  let myTable = document.getElementById("userTable")
  getUsers()
  .then((res)=>{
    res.forEach(element => {
      myTable.innerHTML+=`
      <tbody">
      <tr>
      <td>Age : ${element.age}</td>
      <td>${element.name.first}</td>
      <td>${element.name.last}</td>
      <td>${element.phone}</td>
      </tr>
      </tbody>
      `
      // myTable.style=`width:5vw; display:flex;flex-direction:column;flex-wrap:wrap;`
    });
  })
}
printUsersToTable()





// `
//       <tr id="myTr">
//       <td>${element.age}</td>
      
//       <td>${element.email}</td>
     
//       <td>${element.name.first}</td>
      
//       <td>${element.name.last}</td>
      
//       <td>${element.phone}</td>
      
//       <td>${element.picture}</td>
      
//       <td>${element._id}</td>
//       </tr>
//       `
// myTable.innerHTML+=`
// <tr>
// <td>${element.age}</td>
// </tr>
// <tr>
// <td>${element.email}</td>
// </tr>
// <tr>
// <td>${element.name.first}</td>
// </tr>
// <tr>
// <td>${element.name.last}</td>
// </tr>
// <tr>
// <td>${element.phone}</td>
// </tr>
// <tr>
// <td>${element.picture}</td>
// </tr>
// <tr>
// <td>${element._id}</td>
// </tr>


































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





 