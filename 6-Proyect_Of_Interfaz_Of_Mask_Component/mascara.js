const numberCard = document.querySelector('#number_card');
const dateCard = document.querySelector('#date_card');
const cvvCard = document.querySelector('#cvv_card');

const maskNumber = '####-####-####-####'
const maskDate = '##/##'
const maskCvv = '###'

let current = '';

let arrayNumber = [];
let arrayDate = [];
let arrayCvv = [];

numberCard.addEventListener("keydown", (e) => {
    if (e.key == "Tab") {
        return;
    }
    e.preventDefault();
    handleInput(maskNumber, e.key, arrayNumber);
    numberCard.value = arrayNumber.join("");
});

dateCard.addEventListener("keydown", (e) => {
    if (e.key == "Tab") {
        return;
    }
    e.preventDefault();
    handleInput(maskDate, e.key, arrayDate);
    dateCard.value = arrayDate.join("");
});

cvvCard.addEventListener("keydown", (e) => {
    if (e.key == "Tab") {
        return;
    }
    e.preventDefault();
    handleInput(maskCvv, e.key, arrayCvv);
    cvvCard.value = arrayCvv.join("");
});

function handleInput(mask, key, arr) {
    let number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    if (key == "Backspace" && arr.length > 0) {
        arr.pop();
        return;
    };
    if (number.includes(key) && arr.length + 1 <= mask.length) {
        if (mask[arr.length] === "-" || mask[arr.length] === "/") {
            arr.push(mask[arr.length], key);
        } else {
            arr.push(key);
        }
    };
};