let url = "https://my-json-server.typicode.com/Jeck99/fake-server/devices";
async function get(html = " ") {
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
  <div id="card">
  <div> brand : ${brand}  </div>
  <div> price : ${price} $</div>
  <div> serial number : ${id}</div>
  <div> color : ${color}</div>
  <div> pic : ${picture}</div>
  <div> Available : ${isAvailable}</div>
  <div>  ${ram}GB </div>
  <div> release in : ${createdAt}</div>
  <button id="btn_del" onclick="del()"> delete</button>
  </div>
  `;
}

function del() {
  let s = document.getElementById("card");
  s.innerHTML = "";
}

