// Wednesday, 12-7-22
//  React 4.1 -- Homework

// NOTES!
// git push --set-upstream origin main
// Classes MUST be defined before they can be constructed.

// We don't need keywords like let, const, or var to declare fields

// Create Hamster class. Set name from parameter in constructor method
class Hamster {
  constructor(owner = "", name, price = 15) {
    this.owner = owner;
    this.name = name;
    this.price = price;
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
  eat() {
    this.weight++;
    this.mood++;
  }
  exercise() {
    this.weight--;
  }
  ageUp() {
    this.age++;
    this.height++;
    this.weight++;
    this.mood--;
    this.bankAccount += 10;
  }
}
