"use strict";
// Auto scout
const bmwI7 = {
    CarId: 1,
    CarBrand: "BMW",
    CarModel: "i7",
    CarBodyType: "COUPE",
    CarPrice: 245,
    CarFuelType: "Gasoline",
    CarYear: 2002,
    CarAvailable: true
};
const mercedesH3 = {
    CarId: 2,
    CarBrand: "Mercedes",
    CarModel: "h3",
    CarBodyType: "SPORTS CAR",
    CarPrice: 333,
    CarFuelType: "Diesel",
    CarYear: 2003,
    CarAvailable: false
};
const hundaK3 = {
    CarId: 3,
    CarBrand: "Honda",
    CarModel: "k3",
    CarBodyType: "CONVERTIBLE",
    CarPrice: 777,
    CarFuelType: "Diesel",
    CarYear: 2007,
    CarAvailable: true
};
const bmwA5 = {
    CarId: 4,
    CarBrand: "BMW",
    CarModel: "a5",
    CarBodyType: "HATCHBACK",
    CarPrice: 555,
    CarFuelType: "Ethanol",
    CarYear: 2005,
    CarAvailable: true
};
class CarMarket {
    constructor(id, brand, cars = [], addsCar = []) {
        this.id = id;
        this.brand = brand;
        this.cars = cars;
        this.addsCar = addsCar;
    }
    addCar(carBrand, carBodyType) {
        const addCar = cars.find((carItem) => carItem.CarBrand === carBrand && carItem.CarBodyType === carBodyType);
        if (addCar) {
            this.addsCar.push(addCar);
        }
        else {
            console.log("Car not found");
        }
    }
    showStartPage() {
        return `Welcome to the car market ${this.brand}`;
    }
    showAllCars() {
        const allCarsInfo = this.cars.map(car => `Brand: ${car.CarBrand} \n Model: ${car.CarModel} \n Car Type: ${car.CarBodyType} \n Price: ${car.CarPrice} \n Car Fuel: ${car.CarFuelType} \n Car Year: ${car.CarYear} \n Car Avaolable: ${car.CarAvailable}`);
        return allCarsInfo;
    }
    ;
}
const cars = [bmwI7, mercedesH3, hundaK3, bmwA5];
const autoScout = new CarMarket(7, "Auto Scout", cars);
//autoScout.addCar(cars)
console.log(autoScout.showStartPage);
console.log("All Cars: ");
console.log(autoScout.showAllCars());
autoScout.addCar("BMW", "HATCHBACK");
console.log("Added Cars: ");
console.log(autoScout.addsCar);
