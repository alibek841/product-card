import {products} from "./products.js";

// Создать массив объектов с названиями и описаниями товаров

const productDescriptions = products.reduce((result, product) => {
  result.push({
    [product.name]: product.description
  });

 return result;
}, []);	

console.log(productDescriptions);

//  Получить количество карточек

function getCardsCount() {
  const count = Number(prompt("Сколько карточек отобразить? от 1 до 5"));

  if (count >= 1 && count <= 5) {
    return count;
  }	

  alert("Введите число от 1 до 5");

  return 5;
}

//  Получить контейнер для карточек

const cardTemplate = document.getElementById("card-template");
const cards = document.getElementById("cards");
 
//  Создать карточку

function createCard(product) {
	const cardClone = cardTemplate.content.cloneNode(true);
	cardClone.querySelector(".card__image").src = product.image;
  cardClone.querySelector(".card__image").alt = product.name;

  cardClone.querySelector(".card__category").textContent = product.category;
  cardClone.querySelector(".card__title").textContent = product.name;
  cardClone.querySelector(".card__description").textContent = product.description;

  cardClone.querySelector(".card__price_value").textContent =
  `${product.price.toLocaleString()} \u20BD`; 

const compoundList = cardClone.querySelector(".card__compound_list");

product.compounds.forEach((compound) => {
  const compoundItem = document.createElement("li");

  compoundItem.classList.add("card__compound_item");
  compoundItem.textContent = compound;

  compoundList.append(compoundItem);
});

return cardClone;

}

//  Отобразить карточки

function renderCards(productsArray) {
  cards.innerHTML = "";

  productsArray.forEach((product) => {
    cards.append(createCard(product));
  });
}

const count = getCardsCount();
renderCards(products.slice(0, count));