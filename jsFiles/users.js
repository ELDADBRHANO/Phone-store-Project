let API = "https://my-json-server.typicode.com/Jeck99/fake-server/users";
async function getUsers(html = " ") {
  try {
    main.innerHTML= `<img src="../imges/container_img/loading.gif">`
    let users = await fetch(API)
    .then(res=>res.json())
    users.forEach(user => {
      html += printUser(user)
    });
  } 
  catch (error) {
    console.log(error);
  }
  document.getElementById("main").innerHTML= html
}
getUsers()

function printUser(user) {
 return `
 <div id="user">
 <div> Age : ${user.age} </div>
 <div> Email : ${user.email} </div>
 <div> private name: ${user.name.first}</div>
 <div> last name : ${user.name.last}</div>
 <div> Number : ${user.phone}</div>
 <div> Pic : ${user.picture}</div>
 <div> id : ${user._id}</div>
 </div>
 `;
}

 async function registerUser(event) {
  event.preventDefult()
  let obj = getFormInfo(event)
  let user = await fetch(API,{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(obj)
  }).then(res=> res.json())
  main.insertAdjacentHTML("beforeens",printUser(user))
 }

 function getFormInfo(event,obj={name:{}}) {
  let elments = [...document.getElementsByTagName("input")]
  elments.forEach(element =>{
    if(element.name =='first'||element.name=='last'){
      obj.name[element.name] = element.value
    }else{
      obj[element.name]= element.value
    }
  })
  return obj
 }