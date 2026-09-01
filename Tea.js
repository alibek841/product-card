import { Drink } from "./Drink.js";

export class Tea extends Drink {
    constructor(name, size, price, teaType, sugar = false) {
        super(name, size, price);
        this.teaType = teaType;
        this.sugar = sugar;
    }

    getInfo() {
        return `${super.getInfo()}, тип: ${this.teaType}, сахар: ${this.sugar ? "да" : "нет"}`;
    }
}