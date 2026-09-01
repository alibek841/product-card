import { Vehicle } from "./Vehicle.js";

export class Car extends Vehicle {
    constructor(brand, model, year, doors) {
        super(brand, model, year);
        this.doors = doors;
    }

    getInfo() {
        return `${super.getInfo()}, ${this.doors} doors`;
    }
}