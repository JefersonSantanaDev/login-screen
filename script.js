const showPassword = document.querySelector(".password-icon"),
  fieldPassword = document.getElementById("field-password");

showPassword.addEventListener("click", () => {
  if (fieldPassword.type === "password") {
    fieldPassword.type = "text";
    showPassword.classList.replace("bx-hide", "bx-show");
  } else {
    fieldPassword.type = "password";
    showPassword.classList.replace("bx-show", "bx-hide");
  }
});
