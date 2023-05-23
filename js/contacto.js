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