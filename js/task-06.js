const inputField = document.querySelector("#validation-input");

let inputValue;
inputField.addEventListener("input", (event) => {
  inputValue = event.currentTarget.value;
});

inputField.addEventListener("blur", () => {
  const lengthToCheck = Number(inputField.getAttribute("data-length"));
  if (inputValue.length === lengthToCheck) {
    inputField.style.borderColor = "#4caf50";
  } else {
    inputField.style.borderColor = "#f44336";
  }
});
