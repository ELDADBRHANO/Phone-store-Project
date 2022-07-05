let url = "https://my-json-server.typicode.com/Jeck99/fake-server/devices";
let counter =0;
let arrayImg = [
  "../imges/arrayImg/samsung.png",
  "../imges/arrayImg/samsung.png",
  "../imges/arrayImg/iphone2.jpg",
  "../imges/arrayImg/miiii.webp",
  "../imges/arrayImg/sony.webp",
  "../imges/arrayImg/googgggg.webp",
  "../imges/arrayImg/iphone6.gif",
  "../imges/arrayImg/iphone5.jpg",
  "../imges/arrayImg/sony2.webp",
  "../imges/arrayImg/iphone4.jpg",
  "../imges/arrayImg/iphone4.jpg",
  "../imges/arrayImg/google.webp",
  "../imges/arrayImg/sony3.webp",
  "../imges/arrayImg/mii.webp",
  "../imges/arrayImg/iphone5.jpg",
];
async function get(html = " ") {
  container_cards.innerHTML = `<img src="../imges/container_img/loading.gif">`;
  let devices = await fetch(url).then((res) => res.json());
  for (const key in devices) {
    html += cardTemplate(devices[key]);
  }
  document.getElementById("container_cards").innerHTML = html;
}
get();

function cardTemplate(device) {
  let { id, brand, price, color, isAvailable, ram, createdAt } =
    device;
  return `
  <div id="${id}" class="card">
  <img style="width:10vw;" src="${arrayImg[counter++]}">
  <div> brand : ${brand}  </div>
  <div> price : ${price} $</div>
  <div> serial number : ${id}</div>
  <div> color : ${color}</div>
  <div> In store : ${isAvailable}</div>
  <div>  ${ram}GB </div>
  <div> release in : ${createdAt}</div>
  <button id="btn_del" onclick="del('${id}')"> delete</button>
  </div>
  `;
}

async function del(id) {
  let response = await fetch(url + "/" + id);
  if (response.status <= 299) document.getElementById(id).remove();
  else
    document.getElementById("errors").innerHTML =
      "Something wrong, can`t delete";
}
