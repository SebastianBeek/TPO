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
//FILTRADO DE PRODUCTOS
document.addEventListener('DOMContentLoaded', function () {
  const categoryItems = document.querySelectorAll('.category_item');
  const productItems = document.querySelectorAll('.product-item');

  // Ocultar todos los productos inicialmente
  productItems.forEach(function (product) {
              product.style.display = 'none';
          });

  // Mostrar la primera categoría por defecto
  const defaultCategory = categoryItems[0].getAttribute('category');
  productItems.forEach(function (product) {
      if (product.getAttribute('category') === defaultCategory) {
          product.style.display = 'block';
      }
  });

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


  //carrito
  document.addEventListener("DOMContentLoaded", function() {
    const products = document.querySelectorAll(".product");
    const cartItems = document.getElementById("cart-items");
    const totalAmount = document.getElementById("total-amount");
    const floatingCart = document.getElementById("floating-cart");
    const clearCartBtn = document.getElementById("clear-cart-btn");
    const checkoutBtn = document.getElementById("checkout-btn");

    let cart = [];

    products.forEach(function(product) {
        const addToCartBtn = product.querySelector(".add-to-cart-btn");
        const quantityInput = product.querySelector(".quantity");
        const priceElement = product.querySelector(".price");

        const productId = product.querySelector("h4").textContent;
        const productDescription = product.querySelector("p").textContent;
        const productPrice = parseFloat(priceElement.textContent);

        addToCartBtn.addEventListener("click", function() {
            const quantity = parseInt(quantityInput.value);
            const totalPrice = quantity * productPrice;

            const cartItem = {
                id: productId,
                description: productDescription,
                quantity: quantity,
                price: totalPrice
            };

            const existingCartItem = cart.find(item => item.id === productId);

            if (existingCartItem) {
                existingCartItem.quantity += quantity;
                existingCartItem.price += totalPrice;
            } else {
                cart.push(cartItem);
            }

            updateCart();
            openFloatingCart();
        });
    });

    clearCartBtn.addEventListener("click", function() {
        cart = [];
        updateCart();
    });

    checkoutBtn.addEventListener("click", function() {
        let cartItemsDetail = "Detalle de su compra:\n";
        let cartTotal = 0;

        cart.forEach(function(item) {
            cartItemsDetail += `(x${item.quantity}) ${item.id} ${item.description}  - $${item.price.toFixed(2)}\n`; 
            cartTotal += item.price;
        });

        cartItemsDetail += `Total: $${cartTotal.toFixed(2)}`;
        alert(cartItemsDetail + "\n\nGracias por su compra." );
    });

    function updateCart() {
        cartItems.innerHTML = "";

        let cartTotal = 0;

        cart.forEach(function(item) {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <span>(x${item.quantity}) ${item.id} ${item.description} </span>
                <span>$${item.price.toFixed(2)}</span>
                <button class="remove-btn"><b>x</b></button>
            `;

            const removeBtn = listItem.querySelector(".remove-btn");
            removeBtn.addEventListener("click", function() {
                const itemIndex = cart.indexOf(item);
                cart.splice(itemIndex, 1);
                updateCart();
            });

            cartItems.appendChild(listItem);
            cartTotal += item.price;
        });

        totalAmount.textContent = cartTotal.toFixed(2);

        if (cart.length > 0) {
            floatingCart.style.display = "block";
        } else {
            floatingCart.style.display = "none";
        }
    }

    function openFloatingCart() {
        document.getElementById("floating-cart").style.display = "block";
    }
});
/////////////////////////
