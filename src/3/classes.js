class CoffeeMachine {
    waterAmount = 0; // количество воды внутри

    constructor(power) {
        this.power = power;
        console.log( `Создана кофеварка, мощность: ${power}` );
    }

}

// создаём кофеварку
let coffeeMachine = new CoffeeMachine(100);

// добавляем воды
coffeeMachine.waterAmount = 200;
