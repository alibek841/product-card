// ===== Форма подписки в футере =====
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

// ===== Модальное окно =====
const registrationButton = document.getElementById("registrationButton");
const closeModalButton = document.getElementById("closeModalButton");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

// Открытие модалки
registrationButton.addEventListener("click", () => {
  modal.classList.add("modal-showed");
  overlay.classList.add("modal-showed");
});

// Закрытие модалки крестиком
closeModalButton.addEventListener("click", () => {
  modal.classList.remove("modal-showed");
  overlay.classList.remove("modal-showed");
});

// ===== Форма регистрации внутри модалки =====
const registrationForm = document.querySelector(".registration-form");
let user; // внешняя переменная

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

  //  Объект пользователя
  user = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    birthDate: formData.get("birthDate"),
    login: formData.get("login"),
    password: password,
    createdOn: new Date() 
  };

  console.log(user);
  //  Очищение формы и закрытие модалки
  registrationForm.reset();
  modal.classList.remove("modal-showed");
  overlay.classList.remove("modal-showed");
});