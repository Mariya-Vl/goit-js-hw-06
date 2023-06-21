const inputText = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

inputText.addEventListener("input", (event) => {
    output.textContent = event.currentTarget.value;
    if (output.textContent == "") {
        output.innerHTML = "Anonymous";
      }
  });


