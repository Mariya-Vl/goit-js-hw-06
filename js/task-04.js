let counterValue = 0;
const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement = document.querySelector('button[data-action="increment"]');
const value = document.querySelector("#value");

const reduce = () => {
    counterValue -=1;
    value.textContent =`${counterValue}`;
}

const increase = () => {
    counterValue +=1;
    value.textContent =`${counterValue}`;
}

buttonDecrement.addEventListener("click",reduce);
buttonIncrement.addEventListener("click",increase);