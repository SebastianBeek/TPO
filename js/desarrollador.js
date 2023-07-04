//FILTRADO DE PRODUCTOS
document.addEventListener('DOMContentLoaded', function () {
    const categoryItems = document.querySelectorAll('.category_item');
    const productItems = document.querySelectorAll('.product-item');

    /*// Ocultar todos los productos inicialmente
    productItems.forEach(function (product) {
                product.style.display = 'none';
            });

    // Mostrar la segunda categoría por defecto
    const defaultCategory = categoryItems[0].getAttribute('category');
    productItems.forEach(function (product) {
        if (product.getAttribute('category') === defaultCategory) {
            product.style.display = 'block';
        }
    });*/



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