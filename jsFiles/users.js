let API = "https://my-json-server.typicode.com/Jeck99/fake-server/users";
async function getUsers(html = " ") {
  try {
    let users = await fetch(API)
    .then(res=>res.json())
    users.forEach(user => {
      html += printUser(user)
    });

    // for (const key of users) {
    //   console.log(users[key])
    //   html += printUser(users[key])
    // }
  } 
  catch (error) {
    console.log(error);
  }
  document.getElementById("main").innerHTML= html
}
getUsers()

function printUser(user) {
  // let {age, email, name, phone, picture, _id} = user;
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
// printUser()

 async function registerUser() {
  tru
 }