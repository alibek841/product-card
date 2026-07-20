//  Испорт комментариев из файла comments.js

import { comments } from "./comments.js";
console.log(comments);

//  Создание массива из чисел от 1 до 10

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);
const filteredNumbers = numbers.filter((number) => number >= 5);
console.log(filteredNumbers);

//  Создание массива строк

const equipment = [ "сканер", "мотортестер", "контролька", "мультиметр", "эндоскоп" ];
console.log(equipment.includes("мультиметр"));

//  Создание функции, которая переворачивает массив 

function reverseArray(array){
  return array.reverse()
}
reverseArray(numbers);
reverseArray(equipment);
console.log(numbers);
console.log(equipment);

//  Комментарии, почта которых содержит ".com"

const commentsWithCom = comments.filter((comment) =>
  comment.email.includes(".com")
);

console.log(commentsWithCom);

//  Если id <= 5, то postId = 2, иначе postId = 1

const updatedComments = comments.map((comment) => {
  return {
    ...comment,
    postId: comment.id <= 5 ? 2 : 1,
  };
});

console.log(updatedComments);

//  Оставить только id и name

const commentsIdAndName = comments.map((comment) => {
  return {
    id: comment.id,
    name: comment.name,
  };
});

console.log(commentsIdAndName);

//  Добавить свойство isInvalid

const commentsWithValidation = comments.map((comment) => {
  return {
    ...comment,
    isInvalid: comment.body.length > 180,
  };
});

console.log(commentsWithValidation);

//  Получить массив почт с помощью reduce
const emailsByReduce = comments.reduce((result, comment) => {
  result.push(comment.email);
  return result;
}, []);

console.log(emailsByReduce);

// То же самое с помощью map
const emailsByMap = comments.map((comment) => comment.email);

console.log(emailsByMap);

//  Превратить массив в строку

// С помощью toString()
const emailsByToString = emailsByMap.toString();
console.log(emailsByToString);

// С помощью join()
const emailsByJoin = emailsByMap.join(", ");
console.log(emailsByJoin);


