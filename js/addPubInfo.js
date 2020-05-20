/**
 * Takes the information from pub-data.json and adds it to the correct grid elements.
 *
 * @author Emma Pettersson
 */

let developmentModeIsOn = true; // To toggle if pubs can be displayed as open outside of active hours.

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
        var currentHour = new Date(Date.now()).getHours()

        for (let i = 0; i < elems.length; i++) {
            var elemID = elems[i].id;
            $(locInfo[i]).text(data[elemID].location);
            $(timeInfo[i]).text(data[elemID].openingHours);
            setPubQueueColor(timeInfo[i], currentHour,elemID);

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

    function setPubQueueColor(timeInfo, currentHour,elemID) {

        if(isPubOpen(timeInfo, currentHour) || developmentModeIsOn) {
            $.getJSON(`../getQueueFor/${elemID}`, function (queueLength) {
                switch(queueLength) {
                    case 1:
                        changeItemClassTo(elemID, "short-queue")
                        break;
                    case 2:
                        changeItemClassTo(elemID, "medium-queue")
                        break;
                    case 3:
                        changeItemClassTo(elemID, "long-queue")
                        break;
                    default:
                        changeItemClassTo(elemID, "pub-closed")

                }
            });
        }
        else {
            changeItemClassTo(elemID, "pub-closed")
        }
    }

    function isPubOpen(timeInfo, currentHour) {
        let openingHour = parseInt(timeInfo.innerHTML.slice(0,2))
        let closingHour = parseInt(timeInfo.innerHTML.slice(timeInfo.innerHTML.length-2, timeInfo.innerHTML.length))

        // Rebase the clock to open at 0 for easier if/else logic
        let newOpen = 0;
        let newClose = (closingHour + 24 - openingHour) % 24
        let newCurrent = (currentHour + 24 - openingHour) % 24

        if(newOpen <= newCurrent && newCurrent < newClose)
            return true
        else
            return false
    }

    /**
     * Replaces four specific ids with a custom one, not meant to be used outside of addPubInfo.js!!!
     * @param {String} elemID
     * @param {String} string
     */
    function changeItemClassTo(elemID, string) {
        document.getElementById(elemID).classList.replace("short-queue", string)
        document.getElementById(elemID).classList.replace("medium-queue", string)
        document.getElementById(elemID).classList.replace("long-queue", string)
        document.getElementById(elemID).classList.replace("pub-closed", string)


    }

});

