// function initMap() {
//     map = new google.maps.Map(document.getElementById('map'), {
//       center: {lat: 30.2672, lng: -97.7431},
//       zoom: 8
//     });
//   }



var map, infoWindow;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 30.2672, lng: -97.7431 },
        zoom: 18
    });
    infoWindow = new google.maps.InfoWindow;

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('You are here');
            infoWindow.open(map);
            map.setCenter(pos);
        }, function () {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}