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
