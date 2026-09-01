import { Drink } from "./Drink.js";

export class Lemonade extends Drink {
    constructor(name, size, price, fruitType, carbonated = false) {
        super(name, size, price);
        this.fruitType = fruitType;
        this.carbonated = carbonated;
      
        this.setTemperature(5);
    }

    getInfo() {
        return `${super.getInfo()}, фрукт: ${this.fruitType}, газировка: ${this.carbonated ? "да" : "нет"}`;
    }
}