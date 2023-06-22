const rangeInput = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

textEl.style.fontSize = `${rangeInput.value}px`;

rangeInput.addEventListener("input", (event) => {
  textEl.style.fontSize = `${event.currentTarget.value}px`;
});
