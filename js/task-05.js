const inputText = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

inputText.addEventListener("input", (event) => {
  output.textContent = event.currentTarget.value;
  if (output.textContent.trim() == "") {
    //метод .trim() прибирає пробіли з обох боків рядка та повертає новий рядок
    output.innerHTML = "Anonymous";
  }
});
