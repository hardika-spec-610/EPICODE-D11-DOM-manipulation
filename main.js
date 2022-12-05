function changeH1Ttitle(newTitle) {
  let h1Node = document.getElementsByTagName("h1")[0];
  h1Node.innerText = newTitle;
  console.log(h1Node);
}
function changeBackgroundColor() {
  let backgroundColor = document.getElementsByTagName("body")[0];
  backgroundColor.classList.toggle("background-color");
  console.log(backgroundColor);
}
function changeAddress(newAddress) {
  let divNode = document.getElementsByClassName("ftr-address")[0];
  divNode.innerText = newAddress;
  console.log(divNode);
}
function displayImg() {
  let display = document.getElementsByTagName("img");
  for (let i = 0; i < display.length; i++) {
    let imagenode = display[i];
    imagenode.classList.toggle("toggle-img");
  }
}

function changeColor() {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);

  let price = document.getElementsByClassName("price-block");
  for (let i = 0; i < price.length; i++) {
    let priceNode = price[i];
    priceNode.style.color = randomColor;
  }
  console.log(randomColor);
}
