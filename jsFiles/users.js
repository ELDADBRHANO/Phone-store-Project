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
      <td> ${element.age}</td>
      <td>${element.name.first}</td>
      <td>${element.name.last}</td>
      <td>${element.phone}</td>
      </tr>
      </tbody>
      `
    });
  })
}
printUsersToTable()











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





 