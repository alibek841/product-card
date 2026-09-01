import { Vehicle } from "./Vehicle.js";

export class Bike extends Vehicle {
    constructor(brand, model, year, type) {
        super(brand, model, year);
        this.type = type;
    }

    getInfo() {
        return `${super.getInfo()}, ${this.type}`;
    }
}