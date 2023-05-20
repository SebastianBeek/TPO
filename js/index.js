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



//Mostrar menu desplegable para vistas de smartphone
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu-visible");
})

// Ir arriba
document.getElementById("button-up").addEventListener("click", scrollUp);
function scrollUp(){
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0){
        window.requestAnimationFrame(scrollUp);
        window.scrollTo (0, currentScroll - (currentScroll / 5));
    }
}

buttonUp = document.getElementById("button-up");
window.onscroll = function(){

    var scroll = document.documentElement.scrollTop;

    if (scroll > 600){
        buttonUp.style.transform = "scale(1)";
    }else if(scroll < 600){
        buttonUp.style.transform = "scale(0)";
    }
}

/***************************************************************/
