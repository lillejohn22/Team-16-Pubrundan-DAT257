/**
 * Handles the detailed view.
 * Opens it, closes it, and adds the data to it.
 *
 * @author Emma Pettersson
 */

$(window).on('load', function() {
    var pubData;
    const detailedView = document.querySelector(".detailed-view");

    /* Event listeners */
    window.addEventListener("click", windowOnClick);

    $('.detailed-view-button').click(function (event) {
        toggleDetailedView($(event.target));
    });

    $('.exit-button').click(function (event) {
        toggleDetailedView($(event.target));
    });


    // Get the data from pub-data.json
    $.getJSON('../pub-data.json', function (data) {
        // Pass the data on to the filter function, along with the object that called the function
        pubData = data;
    });

    /**
     * Opens the detailed view.
     *
     * @param obj - the object that called the function
     */
    function toggleDetailedView(obj) {
        detailedView.classList.toggle("show-detailed-view");

        if (detailedView.classList.contains("show-detailed-view")) {
            // We send the object's grandparent, because it has the id we need
            addDetailedViewData($(obj).parent().parent());
        }
    }


    /**
     * Closes the detailed view when a user clicks outside of it.
     */
    function windowOnClick(event) {
        if (event.target === detailedView) {
            toggleDetailedView();
        }
    }


    /**
     * Takes the information from pub-data.json and adds to the detailed view.
     *
     * @param obj -
     */
    function addDetailedViewData(obj) {
        let id = $(obj).attr('id').replace("detailed-", "");

        /* Carousel Images */
        // TODO

        /* Name & Host */
        document.getElementById("detailed-view-name").innerHTML = pubData[id].name;
        document.getElementById("detailed-view-host").innerHTML = "Hosted by " + pubData[id].host;


        /* Description */
        document.getElementById("detailed-view-description").innerHTML = pubData[id].description;


        /* Map */
        // TODO create switch for each pub
        document.getElementById("detailed-map-info").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2132.6118109764366!2d11.976324116251982!3d57.68907484847075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff30b3d58e515%3A0xc9e8bc8489acdd0c!2sCaf%C3%A9%20Bulten!5e0!3m2!1ssv!2sse!4v1589901070588!5m2!1ssv!2sse"


        /* Queue info */
        if (document.getElementById(id).classList.contains("short-queue")) {
            document.getElementById("detailed-queue-info").innerHTML = "Short (<15 minutes)";
        } else if (document.getElementById(id).classList.contains("medium-queue")) {
            document.getElementById("detailed-queue-info").innerHTML = "Medium (>15 minutes but <30 minutes)";
        } else if (document.getElementById(id).classList.contains("long-queue")) {
            document.getElementById("detailed-queue-info").innerHTML = "Long (>30 minutes";
        } else {
            document.getElementById("detailed-queue-info").innerHTML = "The pub is closed.";
        }


        /* Opening hours */
        document.getElementById("detailed-time-info").innerHTML = pubData[id].openingHours;
;

        /* Payment info */
        var paymentString = "";

        for (let i = 0; i < (pubData[id].paymentTypes).length; i++) {
            if (paymentString === "") {
                paymentString = paymentString + pubData[id].paymentTypes[i];
            } else {
                paymentString = paymentString + " / " + pubData[id].paymentTypes[i];
            }
        }

        document.getElementById("detailed-payment-info").innerHTML = paymentString;


        /* Activity info */
        var activityString = "";

        for (let i = 0; i < (pubData[id].activities).length; i++) {
            if (pubData[id].activities[i] === "") {
                activityString = "None";
            } else {
                if (activityString === "") {
                    activityString = activityString + pubData[id].activities[i];
                } else {
                    activityString = activityString + " <br> " + pubData[id].activities[i];
                }
            }
        }

        document.getElementById("detailed-activity-info").innerHTML = activityString;


        /* Type of pub */
        var typeString = "";

        for (let i = 0; i < (pubData[id].types).length; i++) {
            if (pubData[id].types[i] === "") {
                typeString = "None";
            } else {
                if (typeString === "") {
                    typeString = typeString + pubData[id].types[i];
                } else {
                    typeString = typeString + " / " + pubData[id].types[i];
                }
            }
        }

        document.getElementById("detailed-type-info").innerHTML = typeString;


        /* Offerings */
        var offeringString = "";

        for (let i = 0; i < (pubData[id].filter).length; i++) {
            if (pubData[id].filter[i] === "") {
                offeringString = "None";
            } else {
                if (offeringString === "") {
                    offeringString = offeringString + pubData[id].filter[i];
                } else {
                    offeringString = offeringString + " / " + pubData[id].filter[i];
                }
            }
        }

        document.getElementById("detailed-offering-info").innerHTML = offeringString;


        /* Drinks */
        // TODO


        /* Food */
        // TODO

    }
});