// Add console.log to check to see if our code is working.
console.log("working");
 
// // Create the map object with a center and zoom level.
// let map = L.map('mapid').setView([36.1733, -120.1794], 7);

// // Coordinates for each point to be used in the line.
// let line = [
//   [33.9416, -118.4085],
//   [37.6213, -122.3790]
// ];

// // Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//   color: "red"
// }).addTo(map);

// We create the tile layer that will be the background of our map.
//  let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//      maxZoom: 18,
//      accessToken: API_KEY
//  });

  // Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// Coordinates for each point to be used in the polyline.
let line = [
  [37.6213, -122.3790],
  [ 30.1974292,  -97.6663058],
  [43.6775, -79.6308333333],
  [40.6418, -73.78097]
];

// Create a polyline using the line coordinates and make the line yellow.
L.polyline(line, {
  color: "blue",
  weight: 4,
  opacity: 0.5,
  smoothFactor: 1,
  dashArray: '5,5'
}).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      accessToken: API_KEY
  });

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

