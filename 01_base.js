//alert('Our message');

/*const courseStatus = "ready"; //ready, fail, pending

if (courseStatus === "fail") {
  console.log("Курс готов");
} else if (courseStatus === "pending") {
  console.log("Курс в разработке");
} else {
  console.log("Курс не удался");
}*/

//const isReady = true;

/*if (isReady) {
  console.log("Всё готово!");
} else {
  console.log("Всё не готово!");
}*/
// Тернарные выражения
//isReady ? console.log("Всё готово!") : console.log("Всё не готово!");

// 7. Булевые значения

// 8. Функции

/*function calculateAge(year) {
  return 2020 - year;
}

/*console.log(calculateAge(1993));
console.log(calculateAge(1998));
console.log(calculateAge(2001));*/

/*function logInfoAbout(name, year) {
  const age = calculateAge(year);

  if (age > 0) {
    console.log("Человек по имени " + name + " сейчас имеет возраст " + age);
  } else {
    console.log("Вообще-то это уже будущее!");
  }
}

logInfoAbout((name = "Владилен"), (year = 1993));
logInfoAbout((name = "Елена"), (year = 2022));*/

// 9 Массивы
//const cars = ['Mazda', 'Mercedes', 'Ford'];
/*console.log(cars);

console.log(cars[1]);
console.log(cars[0]);
console.log(cars[3]);

console.log(cars.length);

cars[0] = 'Porsche';

console.log(cars);

cars[3] = 'Mazda';

console.log(cars);

cars[cars.length] = 'BMW';

console.log(cars);*/

// 10 Циклы

//const cars = ["Mazda", "Mercedes", "Ford", "Porsche"];

//for (let i = 0; i < cars.length; i++) {
//  const car = cars[i];
//  console.log(car);
//}

/*for (let car of cars) {
  console.log(car);
}*/

// 11 Объекты

const person = {
  firstName: 'Vladilen',
  lastName: 'Minin',
  year: 1993,
  languages: ['Ru', 'Eng', 'De'],
  hasWife: false,
  greet: function() {
    console.log('greet from person'); 
  }
}

console.log(person.firstName);

console.log(person['lastName']);

person.greet();

const key = 'year';

console.log(person[key]);

person.hasWife = true;

console.log(person);

person.isProgrammer = true;

console.log(person);