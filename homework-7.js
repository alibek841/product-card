console.log('Домашнее задание №7');

function showWeather(city, temperature) {
  console.log(`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`);
}

showWeather('Хасавюрт', 30);


const speedOfLight = 299792458;

function checkSpeed(speed) {
  if (speed > speedOfLight) {
    console.log('Сверхсветовая скорость');
  } else if (speed < speedOfLight) {
    console.log('Субсветовая скорость');
  } else {
    console.log('Скорость света');
  }
}

checkSpeed(300000000);


const product = 'Ноутбук';
const price = 500;

function buyProduct(budget) {
  if (budget >= price) {
    console.log(`${product} приобретён. Спасибо за покупку!`);
  } else {
    console.log(`Вам не хватает ${price - budget}$, пополните баланс`);
  }
}

buyProduct(300);


function sayHello(name) {
  console.log(`Ассаляму алейкум, ${name}!`);
}

sayHello('Мухаммад');


const car = 'Toyota';
const year = 2022;
const isWorking = true;