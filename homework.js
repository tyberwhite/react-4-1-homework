// Wednesday, 12-7-22
//  React 4.1 -- Homework

// NOTES!
// git push --set-upstream origin main
// Classes MUST be defined before they can be constructed.

// We don't need keywords like let, const, or var to declare fields
class Hamster {
  owner = "";
  price = 15;
  constructor(name) {
    this.name = name;
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

let tori = new Hamster("tori");
console.log(tori.name);
