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
    makeCar('mercedes', 'german', 'img/car-german-1.jpeg', true);
    makeCar('bmw', 'german', 'img/car-german-2.jpeg', true);
    makeCar('bmw', 'german', 'img/car-german-3.jpeg', false, 'some model');
    makeCar('bmw', 'german', 'img/car-german-4.jpeg', undefined, 'other model');
    makeCar('mercedes', 'german', 'img/car-german-5.jpeg', false);
    makeCar('chevy', 'american', 'img/car-american-1.jpeg');
    makeCar('chevy', 'american', 'img/car-american-2.jpeg', false);
    makeCar('chevy', 'american', 'img/car-american-3.jpeg', false);
    makeCar('chevy', 'american', 'img/car-american-4.jpeg', false);
    makeCar('chevy', 'american', 'img/car-american-5.jpeg', true);
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

const DisplaySpecialCars = ((CreateCars) => {
  const specialCars = CreateCars.specialCars;
  // console.log(specialCars);

  const info = document.querySelector('.featured-info');

  // document loader event
  document.addEventListener('DOMContentLoaded', () => {
    info.innerHTML = '';

    let data = '';

    specialCars.forEach((item) => {
      data += `
      <!-- single item -->
      <div class="featured-item my-3 d-flex p-2 text-capitalize align-items-baseline flex-wrap">
        <span data-img='${item.img}' class="featured-icon mr-2">
          <i class="fas fa-car"></i>
        </span>
        <h5 class="font-weight-bold mx1">${item.make}</h5>
        <h5 class="mx-1">${item.model}</h5>
      </div>
      <!-- end of single item -->
      `;
    });
    info.innerHTML = data;
  });

  // change img
  info.addEventListener('click', (e) => {
    if (e.target.parentElement.classList.contains('featured-icon')) {
      const img = e.target.parentElement.dataset.img;
      document.querySelector('.featured-photo').src = img;
    }
  });
})(CreateCars);

const DisplayCars = ((CreateCars) => {
  // all cars
  const cars = CreateCars.cars;

  // car container
  const inventory = document.querySelector('.inventory-container');

  // content loaded
  document.addEventListener('DOMContentLoaded', () => {
    inventory.innerHTML = '';

    let output = '';

    cars.forEach((car) => {
      output += `
      <!-- single car -->
      <div class="col-10 mx-auto my-3 col-md-6 col-lg-4 single-car ${car.country}">
        <div class="card car-card">
          <img src="${car.img}" class='card-img-top car-img' alt="german-1">
          <!-- card body -->
          <div class="card-body">
            <div class="card-info d-flex justify-content-between">
              <!-- first flex child -->
              <div class="car-text text-uppercase">
                <h6 class="font-weight-bold">
                  ${car.make}
                </h6>
                <h6>${car.model}</h6>
              </div>
               <!-- second flex child -->
              <h5 class="car-value align-self-center py-2 px-3">
                <span class="car-price">${car.price}</span> €
              </h5>   
            </div>
          </div>
          <!-- end of card -->
          <div class="card-footer text-capitalize d-flex justify-content-between">
            <p><span><i class="fas fa-car"></i></span> ${car.type}</p>
            <p><span><i class="fas fa-cogs"></i></span> ${car.trans}</p>
            <p><span><i class="fas fa-gas-pump"></i></span> ${car.gas}</p>
          </div>
        </div>
      </div>
      <!-- end of single car -->
      `;
    });

    inventory.innerHTML = output;
  });
})(CreateCars);

// filter cars
const filterCars = (() => {
  const filter = document.querySelectorAll('.filter-btn');

  filter.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const value = e.target.dataset.filter;
      const singleCar = document.querySelectorAll('.single-car');
      console.log(singleCar);

      singleCar.forEach((car) => {
        if (value === 'all') {
          car.style.display = 'block';
        } else {
          !car.classList.contains(value)
            ? (car.style.display = 'none')
            : (car.style.display = 'block');
        }
      });
    });
  });
})();
// show modal

// sticky navbar
const navbar = (() => {
  const nav = document.querySelector('.navbar');
  window.addEventListener('scroll', fixNav);

  function fixNav() {
    if (window.scrollY > nav.offsetHeight + 400) {
      nav.classList.add('navbar-active');
    } else {
      nav.classList.remove('navbar-active');
    }
  }
})();
