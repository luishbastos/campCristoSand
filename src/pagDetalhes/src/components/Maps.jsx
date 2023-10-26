function initMap() {
  const myLatLng = {
    lat: -23.412562165143914,
    lng: -46.5556618210458
  };
  const map = new google.maps.Map(document.getElementById("googleMap"), {
    zoom: 30,
    center: myLatLng,
    fullscreenControl: false,
    zoomControl: true,
    streetViewControl: false
  });
  const geocoder = new google.maps.Geocoder();
  const address = "Acampamento Cabuçu Mackenzie"; // Specific address

  geocoder.geocode({ address: address }, (results, status) => {
    if (status === "OK") {
      map.setCenter(results[0].geometry.location);
      new google.maps.Marker({
        map: map,
        position: results[0].geometry.location,
        title: "Acampamento Cabuçu Mackenzie"
      });
    }
  });
}
