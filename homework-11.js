// ===== ФОРМА ПОДПИСКИ В ФУТЕРЕ =====
const form = document.querySelector(".footer__form");
const emailInput = document.querySelector(".footer__form-input");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    return;
  }

  const email = emailInput.value;
  console.log({ email });
});

//  модальное окно
const registrationButton = document.getElementById("registrationButton");
const closeModalButton = document.getElementById("closeModalButton");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

registrationButton.addEventListener("click", () => {
  modal.classList.add("modal-showed");
  overlay.classList.add("modal-showed");
});

closeModalButton.addEventListener("click", () => {
  modal.classList.remove("modal-showed");
  overlay.classList.remove("modal-showed");
});

  //  форма регистрации             
const registrationForm = document.querySelector(".registration-form");
let user;

registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  //  Проверка валидности всех полей
  if (!registrationForm.checkValidity()) {
    alert("Регистрация отклонена");
    return;
  }

  const formData = new FormData(registrationForm);
  const password = formData.get("password");
  const repeatPassword = formData.get("repeatPassword");

  //  Проверка совпадения паролей
  if (password !== repeatPassword) {
    alert("Регистрация отклонена: пароли не совпадают");
    return;
  }

  //  автоматический сбор полей
  user = {
    ...Object.fromEntries(formData.entries()),
    createdOn: new Date()                     
	};
  // удаляем поле repeatPassword 
  delete user.repeatPassword;

  //  Вывод в консоль
  console.log(user);

  //  Очистка формы и закрытие модалки
  registrationForm.reset();
  modal.classList.remove("modal-showed");
  overlay.classList.remove("modal-showed");
});