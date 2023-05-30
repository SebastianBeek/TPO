//Cargar imágenes de perros con Api Rest 
function loadDogImages() {
    const dogImagesContainer = document.getElementById('dogImagesContainer');
    dogImagesContainer.innerHTML = ''; 

    for (let i = 0; i < 4; i++) {
      fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
          const imageUrl = data.message;
          const dogImage = document.createElement('img');
          dogImage.src = imageUrl;
          dogImagesContainer.appendChild(dogImage);
        })
        .catch(error => {
          console.error('Error al obtener imagen de perro:', error);
        });
    }
  }

  document.addEventListener('DOMContentLoaded', loadDogImages);