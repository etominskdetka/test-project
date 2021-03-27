let price = 28.99;
let discount = 10;

let total = price - price * (discount / 100);

console.log(total);

if (total > 25) {
  console.log("freeShipping");
}

let count = 10;
while (count > 0) {
  console.log("juggle");
  count = count - 1;
}

const dog = {
  name: "Rover",
  weight: 35,
};

if (dog.weight > 30) {
  console.log("WOOOF WOOOF");
} else {
  console.log("woof woof");
}

let circleRadius = 20;

let circleArea = Math.PI * (circleRadius * circleRadius);

console.log(circleArea);

/*const person = {
  name: "Vladilen",
  age: 26,
  isProgrammer: true,
  //"complex key": "Complex Value",
  languages: ["ru", "en", "de"],
  //["key_" + (1 + 3)]: "Computer Key", //key_4
  greet() {
    console.log("greet from person");
  },
};*/

/*console.log(person.name);
console.log(person["age"]);
console.log(person["complex key"]);

const ageKey = "age";
console.log(person[ageKey]);

console.log(person);
person.greet();

person.age++;
person.languages.push("by");
console.log(person);

person["key_4"] = undefined;

console.log(person['key_4']);

delete person['key_4'];

console.log(person);

console.log(person['key_4']);*/

//const name = person.name;
//const age = person.age;
//const languages = person.languages;

//const {name, age: personAge = 10, languages} = person;

//console.log(name, personAge, languages);

//console.log(person);

/*for (let key in person) {
  if(person.hasOwnProperty(key)) {
  console.log("key:", key);
  console.log("value:", person[key]);
  } 
}*/

/*Object.keys(person).forEach((key) => {
  console.log("key:", key);
  console.log("value:", person[key]);
});*/

// Context
const person = {
  name: "Vladilen",
  age: 26,
  isProgrammer: true,
  //"complex key": "Complex Value",
  languages: ["ru", "en", "de"],
  //["key_" + (1 + 3)]: "Computer Key", //key_4
  greet() {
    console.log("greet from person");
  },
  info() {
    console.log("this", this);
    console.info("Information about person: ", this.name);
  },
};

person.info();

const logger = {
  keys(obj) {
    console.log("Object Keys", Object.keys(this));
  },
  
  keysAndValues() {
    Object.keys(this).forEach(key => {
      console.log(`"${key}": ${this[key]}`);
    });
  }
}

logger.keysAndValues.call(person);

const bound = logger.keys.bind(person);

bound();

logger.keys.call(person);

 