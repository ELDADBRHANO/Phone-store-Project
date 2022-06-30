let url = "https://my-json-server.typicode.com/Jeck99/fake-server/devices"
async function get(html = " "){
  let devices = await fetch(url)
  .then(res=>res.json())
  for (const key in devices) {
    html+= cardTemplate(devices[key])
  }
  document.getElementById("container_cards").innerHTML = html
}
get()

function cardTemplate(device) {
  let {id,brand,price,color,pic,isAvailable,ram,createdAt} = device
  return  `<div id="card">
  <div> brand : ${brand}  </div>
  <div> price : ${price}</div>
  <div> id : ${id}</div>
  <div> color : ${color}</div>
  <div> pic : ${pic}</div>
  <div> Available : ${isAvailable}</div>
  <div> ram : ${ram}</div>
  <div> createdAt : ${createdAt}</div>
  </div>
  `
  // return card.innerHTML += 
}


// function catchError(error) {
//   console.log(error);
// }


// return `
// <div class="card">
  // <div> brand : ${brand}</div>
  // <div> price : ${price}</div>
  // <div> id : ${id}</div>
  // <div> color : ${color}</div>
  // <div> pic : ${pic}</div>
  // <div> Available : ${isAvailable}</div>
  // <div> ram : ${ram}</div>
  // <div> createdAt : ${createdAt}</div>
//   </div>
// `




