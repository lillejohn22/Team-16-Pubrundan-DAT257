/**
 * Takes the information from pub-data.json and adds it to the correct grid elements.
 *
 * @author Emma Pettersson
 */

$(window).on('load', function() {
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


    /**
     * Processes the JSON data and makes the appropriate changes to the grid elements.
     *
     * @param data - the JSON data
     */
    function processJSON(data) {
        for (let i = 0; i < elems.length; i++) {
            var elemID = elems[i].id;

            $(locInfo[i]).text(data[elemID].location);
            $(timeInfo[i]).text(data[elemID].openingHours);

            // Fix icons
            var filterIcons = data[elemID].filter;
            var filterIconsLength = Object.keys(filterIcons).length;

            for (let j = 0; j < filterIconsLength; j++) {
                switch (filterIcons[j]) {
                    case "beer":
                        beerIcon[i].src = "../images/icons/beer.png";
                        break;
                    case "drinks":
                        drinkIcon[i].src = "../images/icons/drink.png";
                        break;
                    case "wine":
                        wineIcon[i].src = "../images/icons/wine.png";
                        break;
                    case "food":
                        foodIcon[i].src = "../images/icons/food.png";
                        break;
                    case "coffee":
                        coffeeIcon[i].src = "..images/icons/coffee.png";
                        break;
                    case "activity":
                        activityIcon[i].src = "..images/icons/activity.png";
                        break;
                }
            }
        }
    }
});

