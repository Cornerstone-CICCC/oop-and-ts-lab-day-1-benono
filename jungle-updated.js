class Animal {
  #name;
  #species;
  #energy;
  #attackCost;
  #wayOfAttack;
  #gainEneryByEat;
  static remainingAnimals = 0;
  constructor(name, species, energy, attackCost = 10, wayOfAttack, gainEneryByEat = 10) {
    this.#name = name;
    this.#species = species;
    this.#energy = energy;
    this.#attackCost = attackCost;
    this.#wayOfAttack = wayOfAttack;
    this.#gainEneryByEat = gainEneryByEat;
    Animal.remainingAnimals++;
  }

  get name() {
    return this.#name;
  }

  set name(val) {
    this.#name = val;
  }

  get species() {
    return this.#species;
  }

  set species(val) {
    this.#species = val;
  }

  get energy() {
    return this.#energy;
  }

  set energy(val) {
    this.#energy = val;
  }

  attack(target) {
    if (target.energy <= 0) {
      console.log(`${target.name} is already dead...`);
      return;
    }

    if (this.#attackCost > this.#energy) {
      console.log("attack failed!");
      return;
    }
    this.#energy -= this.#attackCost;
    target.energy -= this.#attackCost;

    console.log(`${this.#name} ${this.#wayOfAttack} to attack ${target.name}!`);

    const targetDefeated = target.energy <= 0;
    const myselfDefeated = this.#energy <= 0;

    if (targetDefeated && myselfDefeated) {
      console.log("both dead!!");
      Animal.remainingAnimals -= 2;
      return;
    }

    if (targetDefeated) {
      console.log(`${this.#name} wins! ${target.name} is out of energy!`);
      console.log(`${this.#name}'s energy: ${this.#energy}`);
      Animal.remainingAnimals--;
      return;
    }

    if (myselfDefeated) {
      console.log(`${target.name} wins! ${this.#name} is out of energy!`);
      console.log(`${target.name}'s energy: ${target.energy}`);
      Animal.remainingAnimals--;
      return;
    }

    console.log(`${this.#name}'s energy: ${this.#energy}`);
    console.log(`${target.name}'s energy: ${target.energy}`);

    console.log("");
  }

  eat() {
    this.#energy += this.#gainEneryByEat;
    console.log(`${this.#name} eats and gains energy! ${this.#name}'s energy: ${this.#energy}`);
  }
}

class Bird extends Animal {
  #canFly;
  constructor(name, species, canFly) {
    super(name, species, 100, 20, "swoops in");
    this.#canFly = canFly;
  }
  get canFly() {
    return this.#canFly;
  }
}

class Mammal extends Animal {
  #furColor;
  constructor(name, species, color) {
    super(name, species, 200, 50, "lunges", 20);
    this.#furColor = color;
  }

  get furColor() {
    return this.#furColor;
  }
}

class Reptile extends Animal {
  #coldBlooded;
  constructor(name, species, coldBlooded) {
    super(name, species, 100, 30, "bite", 15);
    this.#coldBlooded = coldBlooded;
  }

  get coldBlooded() {
    return this.#coldBlooded;
  }
}

// DRIVER CODE: Create instances of the subclasses and use their properties and methods. You can modify this to add more attacks and eating actions.

const eagle = new Bird("Eagle", "Bird of Prey", true);
console.log(`Name: ${eagle.name}, Species: ${eagle.species}, Can Fly: ${eagle.canFly}`);

const lion = new Mammal("Lion", "Big Cat", "Golden");
console.log(`Name: ${lion.name}, Species: ${lion.species}, Fur Color: ${lion.furColor}`);

const snake = new Reptile("Snake", "Serpent", true);
console.log(`Name: ${snake.name}, Species: ${snake.species}, Cold-Blooded: ${snake.coldBlooded}`);

// Example attack
console.log("\n--- Attacks ---");
eagle.attack(lion);
lion.attack(snake);

// Display the remaining number of animals with energy
console.log(`Remaining animals with energy: ${Animal.remainingAnimals}`);

// Example eating
console.log("\n--- Eating ---");
eagle.eat();
lion.eat();
snake.eat();

console.log("\n--- Additional ---");
lion.attack(snake);
lion.attack(snake);
lion.attack(snake);
