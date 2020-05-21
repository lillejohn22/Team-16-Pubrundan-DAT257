/**
 * Fixes the pub map.
 */

// Initialize Leaflet
var map = L.map('map').setView({lon: 11.976642, lat: 57.689454}, 15);

// Add the OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
}).addTo(map);

// Show the scale bar on the lower left corner
L.control.scale().addTo(map);

// Adds markers for every pub
let basen = L.marker([57.687480, 11.978640]).addTo(map);
basen.bindPopup(L.popup({closeOnClick: true, autoClose: false}).setContent("Basen")).openPopup();

let kajsa = L.marker([57.688210, 11.978730]).addTo(map);
kajsa.bindPopup(L.popup({closeOnClick: true, autoClose: false}).setContent("Kajsabaren")).openPopup();

let hubben = L.marker([57.688330, 11.979270]).addTo(map);
hubben.bindPopup(L.popup({closeOnClick: true, autoClose: false}).setContent("Hubben 2.1")).openPopup();

let bulten = L.marker([57.688970, 11.978690]).addTo(map);
bulten.bindPopup(L.popup({closeOnClick: true, autoClose: false}).setContent("Café Bulten")).openPopup();

let zaloonen = L.marker([57.689081, 11.979204]).addTo(map);
zaloonen.bindPopup(L.popup({closeOnClick: true, autoClose: false}).setContent("Zaloonen")).openPopup();

let winden = L.marker([57.689552, 11.978064]).addTo(map);
winden.bindPopup(L.popup({closeOnClick: true, autoClose: false}).setContent("Winden")).openPopup();

let rodaRummet = L.marker([57.687510, 11.976563]).addTo(map);
rodaRummet.bindPopup(L.popup({closeOnClick: true, autoClose: false}).setContent("Röda Rummet")).openPopup();

let verum = L.marker([57.687560, 11.976763]).addTo(map);
verum.bindPopup(L.popup({closeOnClick: true, autoClose: false}).setContent("Verum")).openPopup();

let tagvagnen = L.marker([57.688282, 11.975849]).addTo(map);
tagvagnen.bindPopup(L.popup({closeOnClick: true, autoClose: false}).setContent("Tågvagnen")).openPopup();

let gasquen = L.marker([57.688650, 11.975160]).addTo(map);
gasquen.bindPopup(L.popup({closeOnClick: true, autoClose: false}).setContent("Gasquen")).openPopup();

let pripps = L.marker([57.688740, 11.974630]).addTo(map);
pripps.bindPopup(L.popup({closeOnClick: true, autoClose: false}).setContent("J.A. Pripps")).openPopup();

let focus = L.marker([57.691053, 11.975531]).addTo(map);
focus.bindPopup(L.popup({closeOnClick: true, autoClose: false}).setContent("Focus")).openPopup();

let fortNOx = L.marker([57.691039, 11.978209]).addTo(map);
fortNOx.bindPopup(L.popup({closeOnClick: true, autoClose: false}).setContent("Fort NOx")).openPopup();

let gastown = L.marker([57.691113, 11.978331]).addTo(map);
gastown.bindPopup(L.popup({closeOnClick: true, autoClose: false}).setContent("Gastown & Spritköket")).openPopup();

let wikanders = L.marker([57.692588, 11.975321]).addTo(map);
wikanders.bindPopup(L.popup({closeOnClick: true, autoClose: false}).setContent("Wijkanders")).openPopup();

let goldenI = L.marker([57.692902, 11.975156]).addTo(map);
goldenI.bindPopup(L.popup({closeOnClick: true, autoClose: false}).setContent("Golden-I")).openPopup();

let cafeC = L.marker([57.707149, 11.940027]).addTo(map);
cafeC.bindPopup(L.popup({closeOnClick: true, autoClose: false}).setContent("Café C")).openPopup();

let elvan = L.marker([57.706218, 11.936804]).addTo(map);
elvan.bindPopup(L.popup({closeOnClick: true, autoClose: false}).setContent("11:an")).openPopup();