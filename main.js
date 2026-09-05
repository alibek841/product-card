import "./homework-10.js";

import { Modal } from "./Modal.js";
import { Form } from "./Form.js";
import { Car } from "./Car.js";
import { Bike } from "./Bike.js";

import { Coffee } from "./Coffee.js";
import { Tea } from "./Tea.js";
import { Lemonade } from "./Lemonade.js";
import { Cafe } from "./Cafe.js";

// Первая карточка
const firstCard = document.querySelector('.card');
const changeColorBtnCard = document.getElementById('change_color_btn_card');

changeColorBtnCard.addEventListener('click', () => {
  firstCard.style.backgroundColor = '#a5a3b9';
});


const productCards = document.querySelectorAll('.card');
const changeAllCardsButton = document.getElementById('change_colors_btn_cards_all');

changeAllCardsButton.addEventListener('click', () => {
  productCards.forEach(card => {
    card.style.backgroundColor = '#a5a3b9';
  });
});


console.log("Ассаляму алейкум");

const pageTitle = document.querySelector('.page__title');

pageTitle.addEventListener('mouseover', () => {
  console.log(pageTitle.textContent);
});


const changeButtonColor = document.getElementById('changeButtonColor');

changeButtonColor.addEventListener('click', () => {
  changeButtonColor.classList.toggle('button--active');
});


const openGoogleButton = document.getElementById('open_Google');

openGoogleButton.addEventListener('click', () => {
  const userAnswer = confirm('Вы действительно хотите войти?');

  if (userAnswer) {
    window.open('https://google.com');
  }
});


const outputConsoleLogButton = document.getElementById('output_console_log');

outputConsoleLogButton.addEventListener('click', () => {
  console.log('Ассаляму алейкум');
  alert('Ассаляму алейкум');
});


// ДЗ № 12

// Проверка классов
const myCar = new Car("Toyota", "Camry", 2020, 4);
console.log(myCar.getInfo());

const myBike = new Bike("Harley", "Sportster", 2019, "cruiser");
console.log(myBike.getInfo());

// Модалка через класс Modal
const modal = new Modal("registrationModal");
const registrationButton = document.getElementById("registrationButton");

registrationButton?.addEventListener("click", () => modal.open());

// Форма через класс Form
const registrationForm = new Form("registrationForm");

document.getElementById("registrationForm")?.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!registrationForm.isValid()) {
        return;
    }

    const formData = registrationForm.getValues();
    const password = formData.password;
    const repeatPassword = formData.repeatPassword;

    if (password !== repeatPassword) {
        alert("Регистрация отклонена: пароли не совпадают");
        return;
    }

    const user = {
        ...formData,
        createdOn: new Date()
    };
    delete user.repeatPassword;

    console.log(user);
    registrationForm.reset();
    modal.close();
});

//  Форма подписки 
const subscribeForm = document.querySelector(".footer__form");
const emailInput = document.querySelector(".footer__form-input");

subscribeForm?.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!subscribeForm.checkValidity()) {
        return;
    }

    const email = emailInput.value;
    console.log({ email });
});

//  ДЗ № 13

const cafe = new Cafe("Альбина", "ул. Садовая, 10");


const espresso = new Coffee("Эспрессо", "маленький", 150, "Арабика");
const latte = new Coffee("Латте", "средний", 250, "Арабика", "овсяное");
const greenTea = new Tea("Зелёный чай", "средний", 120, "зелёный", false);
const lemonade = new Lemonade("Лимонад", "большой", 180, "лимон", true);


console.log(cafe.getInfo());


cafe.orderDrink(espresso);
cafe.orderDrink(latte);
cafe.orderDrink(greenTea);
cafe.orderDrink(lemonade);


cafe.showOrders();