
const buttonColor = document.querySelector(".change-color")
const span = document.querySelector(".color")


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

buttonColor.addEventListener('click', callback)
function callback() {
  span.textContent = getRandomHexColor()
  document.body.style.backgroundColor = span.textContent
}


// console.log(getRandomHexColor());
