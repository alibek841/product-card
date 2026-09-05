export class Cafe {
    constructor(name, location) {
        this.name = name;
        this.location = location;
        this.orders = [];
    }

    getInfo() {
        return `☕ Кафе "${this.name}", 📍 ${this.location}`;
    }

    orderDrink(drink) {
        console.log(`\n📋 Заказ: ${drink.name}`);
        drink.serve();
        this.orders.push(drink);
        console.log(`✅ Заказ выполнен: ${drink.getInfo()}\n`);
    }

    showOrders() {
        if (this.orders.length === 0) {
            console.log("Заказов пока нет");
            return;
        }
        console.log(`\n📋 История заказов (${this.orders.length}):`);
        this.orders.forEach((drink, i) => {
            console.log(`${i + 1}. ${drink.getInfo()}`);
        });
    }
}