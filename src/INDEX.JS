const keyboard = require("prompt-sync")();

console.log("WELCOME TO HERO CLASSES! [by Pietro Prata]\n");

class Hero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    attack() {
        let attack;

        switch (this.type) {
            case 'wizard':
                attack = 'used magic!';
                break;
            case 'warrior':
                attack = 'used sword!';
                break;
            case 'monk':
                attack = 'used martial arts!';
                break;
            case 'ninja':
                attack = 'used shuriken!';
                break;
            default:
                attack = 'does not have a defined attack!';
        }

        console.log(`The ${this.type} attacked using ${attack}!`);
    }
}

while (true) {
    let heroName;
    let heroAge;
    let heroType;
    let finalRate = undefined;

    console.log("Tell me, what's your name, hero? ");
    heroName = keyboard();

    do {
        heroAge = parseInt(keyboard("How old is the hero? "));
    } while (isNaN(heroAge));

    do {
        heroType = keyboard("What type of hero are you? (wizard, warrior, monk, ninja) ");
    } while (!["wizard", "warrior", "monk", "ninja"].includes(heroType));

    let hero = new Hero(heroName, heroAge, heroType);
    hero.attack();

    console.log("Thanks for checking in and good luck on your journey!");
    console.log("\nPress enter to continue.");
    keyboard();
    console.clear();
}

