const textInput = document.querySelector('#font-size-control')
let text = document.querySelector('#text')

textInput.addEventListener('input', call);

function call() {
    text.style.fontSize = textInput.value + 'px'
}