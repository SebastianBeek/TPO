////////////////////////////PRODUCTOS////////////////////////////////////

//SELECCIONO TODOS LOS ELEMENTOS DE LA CLASS SLIDER 
const sliders = document.querySelectorAll('.slider');

sliders.forEach(slider => {
  const item = slider.querySelector('.item');
  const point = slider.querySelectorAll('.point');


  point.forEach((element, i) => {
    point[i].addEventListener('click', () => {
      let position = i;
      let operation = position * -100;
      item.style.transform = `translateX(${operation}%)`;

      point.forEach((element, i) => {
        point[i].classList.remove('active');
      });

      point[i].classList.add('active');
    });
  });
});

//FILTRADO DE PRODUCTOS

//FUNCION DONDE TOMO LOS ITEMS
document.addEventListener('DOMContentLoaded', function () {
    const categoryItems = document.querySelectorAll('.category_item');
    const productItems = document.querySelectorAll('.product-item');

    categoryItems.forEach(function (item) {
      item.addEventListener('click', function (event) {
        event.preventDefault();
        const category = item.getAttribute('category');

        productItems.forEach(function (product) {
          if (product.getAttribute('category') === category || category === 'all') {
            product.style.display = 'block';
          } else {
//SINO ES IGUAL OCULTO LOS ITEMS QUE NO TENGAN ESA CATEGOTY
            product.style.display = 'none';
          }
        });
      });
    });
  });

////////////////////////////Fin de PRODUCTOS////////////////////////////////////
