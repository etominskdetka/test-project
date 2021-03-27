// 1 Функции

//Function Expression
//const greet2 = function greet2(name) {
//  console.log("Привет 2 -", name);
//};

//greet("Лена");
//greet2("Лена");

//Function Declaration
//function greet(name) {
//  console.log("Привет -", name);
//}

//console.log(typeof(greet));

//console.dir(greet);

// 2 Анонимные функции

/*let counter = 0;

const interval = setInterval(function () {
  if (counter === 7) {
    clearInterval(interval);
  } else {
    console.log(++counter);
  }
}, 1000);*/

// 3 Стрелочные функции

/*const arrow = (name, age) => {
  console.log("Hello -", name, age);
};

const arrow2 = (name) => console.log("Hello -", name);

arrow("Vladilen", 25);

arrow2("Dima");

const pow2 = (num) => num ** 2;

console.log(pow2(5));*/

// Массивы

/*cars.push("Renauth");

cars.unshift("Volga");

const firstItem = cars.shift();

console.log(firstItem);

const lastItem = cars.pop();

console.log(lastItem);

console.log(cars);*/

//console.log(cars.reverse());

//console.log(cars);

// Заача 1

/*const text = "Привет, мы изучаем JavaScript";

const reverseText = text.split("").reverse().join("");

console.log(reverseText);*/

//const fib = [1, 1, 2, 3, 5, 8, 13];

//const cars = ["Mazda", "Ford", "BMW", "Mercedes"];

/*const index = cars.indexOf("BMW");

cars[index] = "Porsche";

console.log(cars);*/

/*const people = [
  { name: "Vladilen", budget: 4200 },
  { name: "Elena", budget: 3500 },
  { name: "Victoria", budget: 1700 },
];*/

/*const index2 = people.findIndex(function (person) {
  return person.budget === 3500;
});*/

//console.log(index2);

//console.log(people[index2]);

/*let findedPerson;

for (const person of people) {
  if (person.budget === 3500) {
    findedPerson = person;
  }
}*/

//console.log(findedPerson);
/*const fib = [1, 1, 2, 3, 5, 8, 13];

const cars = ["Mazda", "Ford", "BMW", "Mercedes"];

console.log(cars.includes("Mazda"));

console.log(cars.includes("Volvo"));

const upperCaseCars = cars.map((car) => {
  return car.toUpperCase();
});

console.log(upperCaseCars);*/

/*const cuadroFib = fib.map((num) => {
  return num ** 2;
});

const pow2 = (num) => num ** 2;

console.log(cuadroFib);*/

/*const sqrt = (num) => Math.sqrt(num);

const pow2Fib = fib.map(pow2).map(Math.sqrt);

console.log(pow2Fib);*/

const fib = [1, 1, 2, 3, 5, 8, 13];

const pow2 = (num) => num ** 2;

const pow2Fib = fib.map(pow2);

const filteredNumbers = pow2Fib.filter((num) => {
  return num > 20;
});

console.log(pow2Fib);

console.log(filteredNumbers);

const people = [
  { name: "Vladilen", budget: 4200 },
  { name: "Elena", budget: 3500 },
  { name: "Victoria", budget: 1700 },
];

const allBudget = people
  .filter(person => person.budget > 2000)
  .reduce((acc, person) => {
    acc += person.budget
    return acc
  }, 0)

console.log(allBudget);
























