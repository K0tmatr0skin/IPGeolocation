import L from "leaflet";

export function addTileLayer(map) {
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWF0cjBza2luIiwiYSI6ImNreTdhMXhrcDBvNWoyd3BmMm5ncXFudXMifQ.gaZtM5b_tF_9r2OomqPG_A', {
        attribution: 'Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.Coded by <a href="#">Kabirov Oleg</a>.',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1
    }).addTo(map);
}