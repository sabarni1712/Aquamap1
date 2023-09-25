function initMap() {
    var location = {lat: 23.2393, lng: 87.8512};
    var map = new google.maps.Map(document.querySelector(".map"),{zoom: 4, center: location});
    var marker = new google.maps.Marker({
        position : location,
        map : map 
    });
}
