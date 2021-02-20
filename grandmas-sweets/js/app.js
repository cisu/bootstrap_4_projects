// document.getElementById('cart-info').addEventListener('click', function () {
//   const cart = document.getElementById('cart');
//   cart.classList.toggle('show-cart');
//   console.log(cart);
// });

// filter btns
(function () {
  // select all filter buttons
  const filterBtn = document.querySelectorAll('.filter-btn');
  // console.log(filterBtn);

  filterBtn.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      // prevent default action
      e.preventDefault();
      const value = e.target.dataset.filter;
      // console.log(value);

      const items = document.querySelectorAll('.store-item');
      // console.log(items)

      items.forEach(function (item) {
        if (value === 'all') {
          item.style.display = 'block';
        } else if (item.classList.contains(value)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
})();

// search input
(function () {
  // target search box
  const search = document.getElementById('search-item');

  search.addEventListener('keyup', function () {
    let value = search.value.toLowerCase().trim();
    // console.log(value);

    const items = document.querySelectorAll('.store-item');

    items.forEach(function (item) {
      let type = item.dataset.item;
      // console.log(type);
      // console.log(typeof type);

      // if (type.includes(value)) {
      //   item.style.display = 'block';
      // } else {
      //   item.style.display = 'none';
      // }

      let length = value.length;
      // console.log(length)
      let match = type.slice(0, length);

      // console.log(value);
      // console.log(match);

      if (value === match) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
})();

// lightbox
(function () {
  // all images
  let imageList = [];
  let counter = 0;

  const images = document.querySelectorAll('.store-img');
  const container = document.querySelector('.lightbox-container');
  const item = document.querySelector('.lightbox-item');
  const closeIcon = document.querySelector('.lightbox-close');
  const btnLeft = document.querySelector('.btnLeft');
  const btnRight = document.querySelector('.btnRight');

  // add all images to the array
  images.forEach(function (img) {
    imageList.push(img.src);
  });

  // console.log(imageList);

  // open modal
  images.forEach(function (img) {
    img.addEventListener('click', function (e) {
      // show modal
      container.classList.add('show');

      // get source
      let src = e.target.src;
      // console.log(src);

      counter = imageList.indexOf(src);
      // console.log(counter)

      // show modal with an images
      item.style.backgroundImage = `url(${src})`;
    });
  });

  // close modal
  closeIcon.addEventListener('click', function () {
    container.classList.remove('show');
  });

  // left button
  btnLeft.addEventListener('click', function () {
    counter--;
    if (counter < 0) {
      counter = imageList.length - 1;
    }
    item.style.backgroundImage = `url(${imageList[counter]})`;
    // console.log(counter);
  });

  // right button
  btnRight.addEventListener('click', function () {
    counter++;
    if (counter > imageList.length - 1) {
      counter = 0;
    }
    item.style.backgroundImage = `url(${imageList[counter]})`;
    // console.log(counter);
  });
})();

// show cart

(function () {
  const cartInfo = document.querySelector('#cart-info');
  const cart = document.querySelector('#cart');

  cartInfo.addEventListener('click', function () {
    cart.classList.toggle('show-cart');
  });
})();

// add items to the cart
(function () {
  const cartBtn = document.querySelectorAll('.store-item-icon');

  cartBtn.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      // console.log(e.target);

      if (e.target.parentElement.classList.contains('store-item-icon')) {
        let fullPath = e.target.parentElement.previousElementSibling.src;

        //  + 3 need cuz 'img' is 3 character
        let position = fullPath.indexOf('img') + 3;

        let partPath = fullPath.slice(position);

        const item = {};
        item.img = `img-cart${partPath}`;

        let name =
          e.target.parentElement.parentElement.nextElementSibling.children[0]
            .children[0].textContent;
        item.name = name;

        // price
        let price =
          e.target.parentElement.parentElement.nextElementSibling.children[0]
            .children[1].textContent;

        // final price
        let finalPrice = price.slice(1).trim();
        item.price = finalPrice;
        // console.log(finalPrice);

        // console.log(name);

        const cartItem = document.createElement('div');
        cartItem.classList.add(
          'cart-item',
          'd-flex',
          'justify-content-between',
          'text-capitalize',
          'py-3'
        );

        cartItem.innerHTML = `
          <img
            src="${item.img}"
            id="item-img"
            class="img-fluid rounded-circle"
            alt="cake-1"
          />
          <div class="item-text">
            <p id="cart-item-title" class="font-weight-bold mb-0">
              ${item.name}
            </p>
            <span>€</span>
            <span id="cart-item-price" class="cart-item-price mb-0"
              >${item.price}</span
            >
          </div>
          <a href="#" id="cart-item-remove" class="cart-item-remove">
            <i class="fas fa-trash"></i>
          </a>
       `;

        //  select cart
        const cart = document.querySelector('#cart');
        const total = document.querySelector('.cart-total-container');

        cart.insertBefore(cartItem, total);

        alert('item add to the cart');

        showTotals();
      }
    });
  });
  // show showTotals
  function showTotals() {
    const total = [];
    const items = document.querySelectorAll('.cart-item-price');

    items.forEach(function (item) {
      total.push(parseFloat(item.textContent));
    });
    console.log(total);

    const totalMoney = total.reduce(function (total, item) {
      total += item;
      return total;
    }, 0);

    const finalMoney = totalMoney.toFixed(2);

    document.getElementById('cart-total').textContent = finalMoney;
    document.querySelector('.item-total').textContent = finalMoney;
    document.getElementById('item-count').textContent = total.length;

  }
})();
