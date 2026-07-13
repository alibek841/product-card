//  Объект пользователя

const user = {
  firstName: "Алибек",
  lastName: "Вагабов",
  age: 39,
  country: "Дагестан",
  city: "Хасавюрт",
  relationshipStatus: "Женат",
  job: "Автодиагност",
  email: "05alibeck05@gmail.com",
};



//  Объект автомобиля


const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020,
  color: "White",
  transmission: "Automatic",
};

car.owner = user;

console.log(car);



//  Добавление максимальной скорости


function addMaxSpeed(carObject) {
  if ("maxSpeed" in carObject) {
    return;
  }

  carObject.maxSpeed = 240;
}

addMaxSpeed(car);

console.log(car);



//  Вывод свойства объекта


function showProperty(object, property) {
  console.log(object[property]);
}

showProperty(user, "firstName");
showProperty(user, "job");
showProperty(car, "brand");



//  Массив продуктов

const products = [
  "Хлеб",
  "Молоко",
  "Сыр",
  "Яйца",
  "Масло",
];

console.log(products);



//  Массив книг


const books = [
  {
    title: "1984",
    author: "Джордж Оруэлл",
    year: 1949,
    coverColor: "Черный",
    genre: "Антиутопия",
  },
  {
    title: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    year: 1967,
    coverColor: "Красный",
    genre: "Роман",
  },
  {
    title: "Властелин колец",
    author: "Джон Толкин",
    year: 1954,
    coverColor: "Зеленый",
    genre: "Фэнтези",
  },
];

books.push({
  title: "Дюна",
  author: "Фрэнк Герберт",
  year: 1965,
  coverColor: "Синий",
  genre: "Фантастика",
});

console.log(books);



//  Объединение массивов книг


const harryPotterBooks = [
  {
    title: "Философский камень",
    author: "Джоан Роулинг",
    year: 1997,
    coverColor: "Красный",
    genre: "Фэнтези",
  },
  {
    title: "Тайная комната",
    author: "Джоан Роулинг",
    year: 2002,
    coverColor: "Зеленый",
    genre: "Фэнтези",
  },
];

const allBooks = [...books, ...harryPotterBooks];

console.log(allBooks);



//  Добавление свойства isRare


function addIsRare(booksArray) {
  return booksArray.map((book) => {
    return {
      ...book,
      isRare: book.year > 2000,
    };
  });
}

const updatedBooks = addIsRare(allBooks);

console.log(updatedBooks);