let API = "https://my-json-server.typicode.com/Jeck99/fake-server/users";
async function getUsers(html = " ") {
  try {
    let users = await fetch(API)
    for (const key in users) {
      html+= print(users[key])
    }
  } 
  catch (error) {
    console.log(error);
  }
  document.getElementById("main").innerHTML= html
}
getUsers()

function print(user) {
  let {age, email,index,name ,phone,picture,_id} = user;
 return `
 <div id="card">
 <div> Age : ${age} </div>
 <div> Email : ${email} </div>
 <div> Name : ${name}</div>
 <div> Color : ${index}</div>
 <div> Pic : ${phone}</div>
 <div> Available : ${picture}</div>
 <div> id : ${_id}</div>
 </div>
 `;
}
print()

// age: 35
// email: 
// index: 
// name:
// phone: 
// picture: 
// _id: 