let url = "https://my-json-server.typicode.com/Jeck99/fake-server/devices";
async function get(html = " ") {
  container_cards.innerHTML= `<img src="../imges/container_img/loading.gif">`
  let devices = await fetch(url).then((res) => res.json());
  for (const key in devices) {
    html += cardTemplate(devices[key]);
  }
  document.getElementById("container_cards").innerHTML = html;
}
get();

function cardTemplate(device) {
  let { id, brand, price, color, picture, isAvailable, ram, createdAt } =
    device;
  return `
  <div id="${id}" class="card">
  <div> brand : ${brand}  </div>
  <div> price : ${price} $</div>
  <div> serial number : ${id}</div>
  <div> color : ${color}</div>
  <div> pic : ${picture}</div>
  <div> Available : ${isAvailable}</div>
  <div>  ${ram}GB </div>
  <div> release in : ${createdAt}</div>
  <button id="btn_del" onclick="del('${id}')"> delete</button>
  </div>
  `;
}

async function del(id) {
  let response = await fetch(url+'/'+id)
  if(response.status <= 299) 
    document.getElementById(id).remove()
  else document.getElementById('errors').innerHTML = 'Something wrong, can`t delete'
}

