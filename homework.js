// Wednesday, 12-7-22
//  React 4.1 -- Homework

// NOTES!
// git push --set-upstream origin main
// Classes MUST be defined before they can be constructed.

// We don't need keywords like let, const, or var to declare fields

// Create Hamster class. Set name from parameter in constructor method
class Hamster {
  static price = 15;
  constructor(name, owner = "") {
    this.name = name;
    this.owner = owner;
  }

  wheelRun() {
    console.log("squeak squeak");
  }

  eatFood() {
    console.log("nibble nibble");
  }

  getPrice() {
    return this.price;
  }
}

// Create Person class
class Person {
  constructor(
    name,
    age = 0,
    height = 0,
    weight = 0,
    mood = 0,
    hamsters = [],
    bankAccount = 0
  ) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.mood = mood;
    this.hamsters = hamsters;
    this.bankAccount = bankAccount;
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
  getWeight() {
    return this.weight;
  }
  greet() {
    console.log(`Hi! My name is ${this.name}`);
  }
  eat(amount) {
    this.weight += amount;
    this.mood += amount;
  }
  exercise(frequency) {
    this.weight -= frequency;
  }
  ageUp(interval) {
    this.age += interval;
    this.height += interval;
    this.weight += interval;
    this.mood += interval;
    this.bankAccount += 10 * interval;
  }

  buyHamster(hamster) {
    this.hamsters.push(hamster);
    this.mood += 10;
    this.bankAccount -= hamster.getPrice();
  }
}

// Instantiate a new Person named Timmy
let timmy = new Person("Timmy");

// Age Timmy five years
timmy.ageUp(5);

// Have Timmy eat five times
timmy.eat(5);

// Have Timmy exercise five times
timmy.exercise(5);

// Age Timmy 9 years
timmy.ageUp(9);

// Create a hamster named Gus
let gus = new Hamster("Gus");

// Set Gus's owner to the string "Timmy"
gus.owner = "Timmy";

// Have Timmy buy Gus;
timmy.buyHamster(gus);

// Age Timmy 15 years
timmy.ageUp(15);

// Have Timmy eat twice
timmy.eat(2);

// Have Timmy exercise twice
timmy.exercise(2);
