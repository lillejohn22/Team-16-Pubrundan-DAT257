/**
 * Takes the information from pub-data.json and adds it to the correct grid elements.
 * 
 * @author Emma Pettersson
 */

window.onload = function() {
    var elems = document.getElementsByClassName("grid-element");
    var locInfo = document.getElementsByClassName("location-info");
    var timeInfo = document.getElementsByClassName("time-info");

    var beerIcon = document.getElementsByClassName("icon-beer");
    var drinkIcon = document.getElementsByClassName("icon-drink");
    var wineIcon = document.getElementsByClassName("icon-wine");
    var foodIcon = document.getElementsByClassName("icon-food");
    var coffeeIcon = document.getElementsByClassName("icon-coffee");
    var activityIcon = document.getElementsByClassName("icon-activity");

    // Get the data from pub-data.json
    $.getJSON('../pub-data.json', function(data) {
        // Send data to function processJSON to be able to access outside of getJSON call
        processJSON(data);
    });

    function processJSON(data) {
        for (var i = 0; i < elems.length; i++) { 
            var elemID = elems[i].id;

            console.log(elemID);


            // The "help" element does not need any information from pub-data.json, that's why we use "i-1"
            if (elemID !== "help") { 
                $(locInfo[i-1]).text(data[elemID].location)
                $(timeInfo[i-1]).text(data[elemID].openingHours)

                // Fix icons
                var filterIcons = data[elemID].filter;
                var filterIconsLength = Object.keys(filterIcons).length;
                var iconLocation;

                for (var j = 0; j < filterIconsLength; j++) {
                    switch (filterIcons[j]) {
                        case "beer":
                            beerIcon[j].src = "../images/icons/beer.png";
                            break;
                        case "drink":
                            drinkIcon[j].src = "../images/icons/drink.png";
                            break;
                        case "wine":
                            wineIcon[j].src = "../images/icons/wine.png";
                            break;
                        case "food":
                            foodIcon[j].src = "../images/icons/food.png";
                            break;
                        case "coffee":
                            coffeeIcon[j].src = "..images/icons/coffee.png"
                            break;
                        case "activity":
                            activityIcon[j].src = "..images/icons/activity.png";
                            break;
                    }
                }
            }

            console.log("------------")
        }
    }
}

