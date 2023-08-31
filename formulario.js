const formulario = document.getElementById("formulario");
const inputs = formulario.querySelectorAll(
  ".form-control input, .form-control textarea"
);
const errorDiv = document.getElementById("error");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  let valid = true;
  errorDiv.innerHTML = "";

  inputs.forEach((input) => {
    if (!input.value) {
      showErrorMessage(input, "Este campo es requerido");
      valid = false;
    } else if (
      input.classList.contains("email") &&
      !isValidEmail(input.value)
    ) {
      showErrorMessage(input, "Ingresa una dirección de correo válida");
      valid = false;
    } else {
      showSuccessMessage(input);
    }
  });

  if (valid) {
    formulario.reset();
    errorDiv.innerHTML =
      "<p class='success-message'>Formulario enviado correctamente</p>";
  }
});

function showErrorMessage(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector(".error-message");
  small.innerText = message;
  formControl.classList.add("error");
}

function showSuccessMessage(input) {
  const formControl = input.parentElement;
  const small = formControl.querySelector(".error-message");
  small.innerText = "";
  formControl.classList.remove("error");
}

function isValidEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}
