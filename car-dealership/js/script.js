// hide preloader
const preloader = document.querySelector('.preloader');

window.addEventListener('load', () => {
  preloader.classList.add('hidePreloader');
});

const CreateCars = (() => {
  // car data
  const cars = [];

  class Car {
    constructor(make, country, img, special, model, price, type, trans, gas) {
      this.make = make;
      this.country = country;
      this.img = img;
      this.special = special;
      this.model = model;
      this.price = price;
      this.type = type;
      this.trans = trans;
      this.gas = gas;
    }
  }
  // car creation function
  function makeCar(
    make,
    country,
    img = 'img/car-default.jpeg',
    special = true,
    module = 'new model',
    price = '10000',
    type = 'sedan',
    trans = 'automatic',
    gas = '50'
  ) {
    const car = new Car(
      make,
      country,
      img,
      special,
      module,
      price,
      type,
      trans,
      gas
    );

    cars.push(car);
  }

  // produce cars
  function produceCars() {
    makeCar('chevron', 'american');
    makeCar('mercedes', 'german', 'img/car-german-1.jpeg', true);
    makeCar('mercedes', 'german', 'img/car-german-2.jpeg', true);
    makeCar('mercedes', 'german', 'img/car-german-3.jpeg', false, 'some model');
    makeCar(
      'mercedes',
      'german',
      'img/car-german-4.jpeg',
      undefined,
      'other model'
    );
    makeCar('mercedes', 'german', 'img/car-german-5.jpeg', false);
    makeCar('chevy', 'american', 'img/car-american-1.jpeg');
    makeCar('chevy', 'american', 'img/car-american-2.jpeg', false);
    makeCar('chevy', 'american', 'img/car-american-3.jpeg', false);
    makeCar('chevy', 'american', 'img/car-american-4.jpeg', false);
    makeCar('chevy', 'american', 'img/car-american-5.jpeg', false);
  }

  produceCars();
  // console.log(cars);

  // special cars
  const specialCars = cars.filter((car) => car.special === true);
  // console.log(specialCars);

  return {
    cars,
    specialCars,
  };
})();

console.log(CreateCars.cars);
console.log(CreateCars.specialCars);
