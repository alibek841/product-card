import {products} from "./products.js";

//  получить контейнер для карточек

const cards = document.querySelector('.cards');

//  Создать HTML-разметку для одной карточки

function createCard(product) {
  return `
    <li class="cards__item">
      <article class="card">
        <img class="card__image" src="${product.image}" alt="${product.name}" width="290">
        <span class="card__category">${product.category}</span>
        <h2 class="card__title">${product.name}</h2>
        <p class="card__description">${product.description}</p>
        <span class="card__subtitle">Состав:</span>
        <ul class="card__compound_list">
          ${product.compounds.map(compound => `<li class="card__compound_item">${compound}</li>`).join('')}
        </ul>
        <div class="card__price_row">
          <span class="card__price_label">Цена</span>
          <span class="card__price_value">${product.price.toLocaleString()} &#8381;</span>
        </div>
      </article>
    </li>
  `;
}

//  Отобразить карточки на странице

function renderCards(productsArray) {
  cards.innerHTML = "";

  productsArray.forEach((product) => {
    cards.insertAdjacentHTML('beforeend', createCard(product));
  });
}	

//Создать объект с названиями товаров и их описаниями 

const productDescriptions = products.reduce((result, product) => {
  result [product.name] = product.description;
  return result;
}, {});	
console.log(productDescriptions);

//  Получить количество карточек

function getCardsCount() {
  const count = Number(prompt("Сколько карточек отобразить?от 1 до 5"));

  if (count >= 1 && count <= 5) {
    return count;
  }	

  alert ("Введите число от 1 до 5");
  return 5;
}

//  Получить количество карточек и вывести их на странице

const count = getCardsCount();
renderCards(products.slice(0, count));