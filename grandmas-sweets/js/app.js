document.getElementById('cart-info').addEventListener('click', function () {
  const cart = document.getElementById('cart');
  cart.classList.toggle('show-cart');
  console.log(cart);
});

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
    console.log(counter);
  });

   // right button
   btnRight.addEventListener('click', function () {
    counter++;
    if (counter > imageList.length - 1) {
      counter = 0;
    }
    item.style.backgroundImage = `url(${imageList[counter]})`;
    console.log(counter);
  });
})();
