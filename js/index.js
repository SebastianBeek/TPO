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

//Presentacion diapositivas de portada
const carousel = document.querySelector(".carousel");                     // Obtener el contenedor del carrusel y todas las imágenes
const imgs = carousel.querySelectorAll("img");
let currentImg = 0;                                                       // Establecer la imagen actual y el índice de la misma
let imgIndex = 1;

carousel.addEventListener("click", () => {                                // Agregar eventos para avanzar y retroceder en el carrusel
    currentImg++;
    imgIndex++;
    if (currentImg > imgs.length - 1) {
      currentImg = 0;
    }
    if (imgIndex > imgs.length) {
      imgIndex = 1;
    }
    showImg(currentImg);
});

function showImg(index) {                                                  // Función para mostrar la imagen actual
  imgs.forEach((img) => {                                                  // Ocultar todas las imágenes
    img.style.display = "none";
});
  
  imgs[index].style.display = "block";                                     // Mostrar la imagen actual y ajustar su tamaño
  imgs[index].style.width = "100%";
  imgs[index].style.height = "auto";
  
  const progressBar = document.querySelector(".progress");                 // Actualizar la barra de progreso
  progressBar.style.width = `${(imgIndex / imgs.length) * 100}%`;
}

showImg(currentImg);                                                       // Ejecutar la función para mostrar la primera imagen




//Valido formulario
function validar() { 
if (document.getElementById("nombre") == "") {
  alert("Por favor ingresa tu nombre");
  console.log ("error falta nombre")
  document.formulario.nombre.focus();
  return false;
  }
}