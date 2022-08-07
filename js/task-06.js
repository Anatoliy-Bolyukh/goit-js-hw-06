{/* <input
    type="text"
    id="validation-input"
    data-length="6"
    placeholder="Please enter 6 symbols"
/> */}



let addBlur = document.querySelector('#validation-input');
let addDataLength = addBlur.getAttribute('data-length');

addBlur.onblur = () => {
    if (addBlur.value.length === +addDataLength) {
        addBlur.classList.add('valid')
        addBlur.classList.remove('invalid')
    } else if (addBlur.value.length === 0) {
        addBlur.classList.remove('valid');
        addBlur.classList.remove('invalid');
    } else {
        addBlur.classList.remove('valid');
        addBlur.classList.add('invalid');
    }

}