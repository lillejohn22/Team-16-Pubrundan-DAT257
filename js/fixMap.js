/**
 * Fixes the pub map.
 * Merged with colored markers.
 * Refactored pub creation into "addPubToMap(pub)"
 * Moved map initialization into createMap()
 */

var map; // For global scope visibility.
var pubs = new Map();
createMap()

/**
 * Initialises the map and sets basic properties such as start zoom and visible area.
 * Then adds all pubs based on server data through addPubsFromServer().
 */
function createMap() {

// initialize Leaflet
    map = L.map('map').setView({lon: 11.976642, lat: 57.689454}, 15);

// add the OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
    }).addTo(map);

// show the scale bar on the lower left corner
    L.control.scale().addTo(map);
    addPubsFromServer()
}

/** Requests all pubs from server and calls the addPubToMap function to add them to the map */
function addPubsFromServer() {
    getJSONdata(null, '/pub-data.json', 'GET').then(function(pubData) {
        for(var pub in pubData) {
            addPubToMap(pubData[pub])
        }
    });
}

/**
 * Adds a pub to the map, assumes that the pub is based on the structure in pub-data.json
 * @param pub
 */
async function addPubToMap(pub) {
    //Adds markers for pub
    let myIcon = await getPubMapMarker(pub.id)
    if((pub.coordinates[0] != null) || (pub.coordinates[1] != null)) { // Ignore this pub.
        L.marker(
            pub.coordinates,
            {icon: myIcon}
        ).addTo(map).bindPopup(L.popup({
            closeOnClick: true,
            autoClose: false
        }).setContent(pub.name)).openPopup();
    }
}

async function getPubMapMarker(pubID) {
    return await getPubQueue(pubID).then(function(queue) {
        switch(queue) {
            case 1:
                return L.icon({
                    iconUrl: '../images/icons/greenMapMarker.png',
                    iconSize: [30, 50],
                    iconAnchor: [22, 94],
                    popupAnchor: [-3, -76]
                });
            case 2:
                return L.icon({
                    iconUrl: '../images/icons/yellowMapMarker.png',
                    iconSize: [30, 50],
                    iconAnchor: [22, 94],
                    popupAnchor: [-3, -76]
                });
            case 3:
                return L.icon({
                    iconUrl: '../images/icons/redMapMarker.png',
                    iconSize: [30, 50],
                    iconAnchor: [22, 94],
                    popupAnchor: [-3, -76]
                });
            case 0:
                return L.icon({
                    iconUrl: '../images/icons/blackMapMarker.png',
                    iconSize: [30, 50],
                    iconAnchor: [22, 94],
                    popupAnchor: [-3, -76]
                });
            default:
                return L.icon({
                    iconUrl: '../images/icons/blueMapMarker.png',
                    iconSize: [30, 50],
                    iconAnchor: [22, 94],
                    popupAnchor: [-3, -76]
                });
        }
    })
}

/** Returns the queue the pub specified by pubID
 * @param {String} pubID
 * @return {Promise} queueLength
 */
async function getPubQueue(pubID) {
    let url = `/getQueueFor/${pubID}`;
    return await getJSONdata(null,url,"get")
}

/**
 * Retrieves data from server at specified url using specified method. To use the returned data
 * write: sendAndGetJSONdata(data, url, method).then(function(dataReturned) {methods})
 * @param data
 * @param url
 * @param method
 * @return {Promise<JSON>}
 */
async function getJSONdata(data, url, method) {

    let response = await fetch(url, {
        method: method.toUpperCase(),
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Accept': 'application/json'
        },
        body: data
    });

    // Results is parsed as JSON and returned to caller.
    return response.json()
}



