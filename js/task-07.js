const rangeInput = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

const defaultRangeValue = rangeInput.value;
const maxTextValue = rangeInput.getAttribute("max");
const minTextValue = rangeInput.getAttribute("min");

// console.log(defaultRangeValue);
// console.log(maxTextValue);
// console.log(minTextValue);

rangeInput.addEventListener("input",(event)=>{

if (Number(rangeInput.value) > Number(defaultRangeValue)) {
    textEl.style.fontSize = `${maxTextValue}px`;
};
if (Number(rangeInput.value) < Number(defaultRangeValue)) {
    textEl.style.fontSize = `${minTextValue}px`;
    console.log(textEl.style.fontSize);
};
if (Number(rangeInput.value) === Number(defaultRangeValue)) {
    textEl.style.fontSize = `${defaultRangeValue}px`;
}
});

