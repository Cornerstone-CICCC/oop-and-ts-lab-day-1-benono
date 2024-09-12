class Animal {
  #name;
  #species;
  #energy;
  static remainingAnimals = 0;
  constructor(name, species, energy) {
    this.#name = name;
    this.#species = species;
    this.#energy = energy;
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

    if (this.#energy < 10) {
      console.log("attack failed!");
      return;
    }
    this.#energy -= 10;
    target.energy -= 10;

    const targetBeated = target.energy <= 0;
    const myselfBeated = this.#energy <= 0;

    if (targetBeated && myselfBeated) {
      console.log("both dead!!");
      Animal.remainingAnimals -= 2;
      return;
    }

    if (targetBeated) {
      console.log(`${this.#name} wins! ${target.name} is out of energy!`);
      console.log(`${this.#name}'s energy: ${this.#energy}`);
      Animal.remainingAnimals--;
      return;
    }

    if (myselfBeated) {
      console.log(`${target.name} wins! ${this.#name} is out of energy!`);
      console.log(`${target.name}'s energy: ${target.energy}`);
      Animal.remainingAnimals--;
      return;
    }

    console.log(`${this.#name}'s energy: ${this.#energy}`);
    console.log(`${target.name}'s energy: ${target.energy}`);
  }

  eat() {
    this.#energy += 10;
    console.log(`${this.name} eats and gains energy! ${this.name}'s energy: ${this.energy}`);
  }
}

class Bird extends Animal {
  #canFly;
  constructor(name, species, canFly) {
    super(name, species, 100);
    this.#canFly = canFly;
  }
  get canFly() {
    return this.#canFly;
  }

  attack(target) {
    if (target.energy <= 0) {
      console.log(`${target.name} is already dead...`);
      return;
    }

    if (this.energy < 20) {
      console.log("attack failed!");
      return;
    }
    this.energy -= 20;
    target.energy -= 20;

    console.log(`${this.name} swoops in to attack ${target.name}!`);

    const targetBeated = target.energy <= 0;
    const myselfBeated = this.energy <= 0;

    if (targetBeated && myselfBeated) {
      console.log("both dead!!");
      Animal.remainingAnimals -= 2;
      return;
    }

    if (targetBeated) {
      console.log(`${this.name} wins! ${target.name} is out of energy!`);
      console.log(`${this.name}'s energy: ${this.energy}`);
      Animal.remainingAnimals--;
      return;
    }

    if (myselfBeated) {
      console.log(`${target.name} wins! ${this.name} is out of energy!`);
      console.log(`${target.name}'s energy: ${target.energy}`);
      Animal.remainingAnimals--;
      return;
    }

    console.log(`${this.name}'s energy: ${this.energy}`);
    console.log(`${target.name}'s energy: ${target.energy}`);
  }

  eat() {
    this.energy += 10;
    console.log(`${this.name} eats and gains energy! ${this.name}'s energy: ${this.energy}`);
  }
}

class Mammal extends Animal {
  #furColor;
  constructor(name, species, color) {
    super(name, species, 200);
    this.#furColor = color;
  }

  get furColor() {
    return this.#furColor;
  }

  attack(target) {
    if (target.energy <= 0) {
      console.log(`${target.name} is already dead...`);
      return;
    }

    if (this.energy < 50) {
      console.log("attack failed!");
      return;
    }
    this.energy -= 50;
    target.energy -= 50;

    console.log(`${this.name} lunges to attack ${target.name}!`);

    const targetBeated = target.energy <= 0;
    const myselfBeated = this.energy <= 0;

    if (targetBeated && myselfBeated) {
      console.log("both dead!!");
      Animal.remainingAnimals -= 2;
      return;
    }

    if (targetBeated) {
      console.log(`${this.name} wins! ${target.name} is out of energy!`);
      console.log(`${this.name}'s energy: ${this.energy}`);
      Animal.remainingAnimals--;
      return;
    }

    if (myselfBeated) {
      console.log(`${target.name} wins! ${this.name} is out of energy!`);
      console.log(`${target.name}'s energy: ${target.energy}`);
      Animal.remainingAnimals--;
      return;
    }

    console.log(`${this.name}'s energy: ${this.energy}`);
    console.log(`${target.name}'s energy: ${target.energy}`);
  }

  eat() {
    this.energy += 20;
    console.log(`${this.name} eats and gains energy! ${this.name}'s energy: ${this.energy}`);
  }
}

class Reptile extends Animal {
  #coldBlooded;
  constructor(name, species, coldBlooded) {
    super(name, species, 100);
    this.#coldBlooded = coldBlooded;
  }

  get coldBlooded() {
    return this.#coldBlooded;
  }

  attack(target) {
    if (target.energy <= 0) {
      console.log(`${target.name} is already dead...`);
      return;
    }

    if (this.energy < 30) {
      console.log("attack failed!");
      return;
    }
    this.energy -= 30;
    target.energy -= 30;

    console.log(`${this.name} bites to attack ${target.name}!`);

    const targetBeated = target.energy <= 0;
    const myselfBeated = this.energy <= 0;

    if (targetBeated && myselfBeated) {
      console.log("both dead!!");
      Animal.remainingAnimals -= 2;
      return;
    }

    if (targetBeated) {
      console.log(`${this.name} wins! ${target.name} is out of energy!`);
      console.log(`${this.name}'s energy: ${this.energy}`);
      Animal.remainingAnimals--;
      return;
    }

    if (myselfBeated) {
      console.log(`${target.name} wins! ${this.name} is out of energy!`);
      console.log(`${target.name}'s energy: ${target.energy}`);
      Animal.remainingAnimals--;
      return;
    }

    console.log(`${this.name}'s energy: ${this.energy}`);
    console.log(`${target.name}'s energy: ${target.energy}`);
  }

  eat() {
    this.energy += 15;
    console.log(`${this.name} eats and gains energy! ${this.name}'s energy: ${this.energy}`);
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
