const button = {
    decrement: document.querySelector("[data-action='increment']"),
    increment: document.querySelector("[data-action='decrement']"),
    span: document.querySelector("#value"),
};

let counterValue = 0;
const increment = () => {
    counterValue++;

    button.span.textContent = counterValue;
};

const decrement = () => {
    counterValue--;

    button.span.textContent = counterValue;
};

button.decrement.addEventListener("click", increment);
button.increment.addEventListener("click", decrement);