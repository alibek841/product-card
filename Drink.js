export class Drink {
    constructor(name, size, price) {
        if (new.target === Drink) {
            throw new Error("Нельзя создать экземпляр абстрактного класса Drink");
        }
        this.name = name;
        this.size = size;
        this.price = price;
        this.#temperature = 70; 
        this.#log("Создан напиток");
    }

    #temperature = 0;
    #log(message) {
        console.log(`[Drink] ${message}: ${this.name}`);
    }

    getTemperature() {
        return this.#temperature;
    }

    setTemperature(temp) {
        this.#temperature = temp;
        this.#log(`Температура установлена на ${temp}°C`);
    }

    #prepare() {
        this.#log("Начинается приготовление...");
        this.setTemperature(75);
        this.#log("Напиток приготовлен");
    }

    serve() {
        this.#log("Подача напитка...");
        this.#prepare();
        this.#log("Напиток подан");
    }

    getInfo() {
        return `${this.name} (${this.size}), ${this.price}₽, температура: ${this.getTemperature()}°C`;
    }
}