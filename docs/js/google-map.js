function initMap() {
    var coordinates = {lat: 59.938918, lng: 30.323105},
    
        map = new google.maps.Map(document.getElementById('map'), {
            center: coordinates,
            zoom: 18,
            disableDefaultUI: false,
            scrollwheel: false
        }),

        marker = new google.maps.Marker({
            position: coordinates,
            map: map
        }),

        image = '../img/map-pin-tablet.png',
        
        marker = new google.maps.Marker({
            position: coordinates,
            map: map,
            icon: image
        });
}
