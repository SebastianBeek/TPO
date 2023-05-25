/*api de google*/
function iniciarMap(){
    var coord = {lat:-34.612230882972426 ,lng: -58.385131716449784};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
  }


  function validacion(){
    //valor = document.getElementById("nombre_apellido").value;
    if (document.myForm.nombre_apellido.value== null || document.myForm.nombre_apellido.value.length == 0 || /^\s+$/.test(document.myForm.nombre_apellido.value) ) {
      alert("Debe ingresar nombre y apellido");
        document.myForm.nombre_apellido.focus();
      return false;
    }
    
    if (document.myForm.cel.value== "" || isNaN(document.myForm.cel.value)) {
      alert("Por favor ingrese su telefono");
        document.myForm.cel.focus();
      return false;
    }

    if (document.myForm.provincia.value == "Provincia"){
      alert("Debe seleccionar una provincia");
        document.myForm.provincia.focus();
      return false;
    }

    if (document.myForm.comentario.value == ""){
      alert("Debe dejar un comentario");
        document.myForm.comentario.focus();
      return false;
    }
    return true;
  }