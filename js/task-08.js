const form = document.querySelector(".login-form");

form.addEventListener("submit", sendForm);

function sendForm(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Fill all the fields. You can't login now!");
  }
  const user = {
    email: email.value,
    password: password.value,
  };

  console.log(user);
  event.currentTarget.reset();
}
