import { Drink } from "./Drink.js";

export class Coffee extends Drink {
    constructor(name, size, price, beanType, milkType = "без молока") {
        super(name, size, price);
        this.beanType = beanType;
        this.milkType = milkType;
    }

    getInfo() {
        return `${super.getInfo()}, зёрна: ${this.beanType}, молоко: ${this.milkType}`;
    }
}