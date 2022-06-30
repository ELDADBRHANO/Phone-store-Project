async function get(){
  try {
  return await fetch("https://my-json-server.typicode.com/Jeck99/fake-server/devices")
  .then(res=>res.json())
  } 
  catch (err) {
    catchError(err)
  }
}

function getSome() {
  get()
  .then(res=>res.console.log(res))
  catchSomething.innerHTML= res
}


function catchError(error) {
  console.log(error);
}