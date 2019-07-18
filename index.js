// function initMap() {
//     map = new google.maps.Map(document.getElementById('map'), {
//       center: {lat: 30.2672, lng: -97.7431},
//       zoom: 8
//     });
//   }



var map, infoWindow;
function initMap() {
    map = new google.maps.Map(document.getElementById('gmap'), {
        center: { lat: 30.2672, lng: -97.7431 },
        zoom: 18
    });
    infoWindow = new google.maps.InfoWindow;
    //

    google.maps.event.addListener(map, 'click', function (event) {
        //alert();
        //alert("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng)
        // document.getElementById('glong').value = event.latLng.lng();
        // document.getElementById('glat').value = event.latLng.lat();
    });



    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('You are here');
            document.getElementById('glong').value = position.coords.longitude;
            document.getElementById('glat').value = position.coords.latitude;
            //alert(pos['lat']);
            //alert(pos['lng']);
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