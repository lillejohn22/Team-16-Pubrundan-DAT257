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
        // TODO: Need images first.

        /* Name */
        document.getElementById("detailed-view-name").innerHTML = pubData[id].name;

        /* Host + website link */
        document.getElementById("detailed-view-host").innerHTML = "Pub hosted by " + pubData[id].host;
        //console.log(document.getElementById("detailed-view-host-website"));
        //document.getElementById("detailed-view-host-website").href = pubData[id].hostWebsite;

        /* Description */
        document.getElementById("detailed-view-description").innerHTML = pubData[id].description;

        /* Map */
        addDetailedViewMapData(id);

        /* Queue info */
        addDetailedViewQueueData(id);

        /* Opening hours */
        document.getElementById("detailed-time-info").innerHTML = pubData[id].openingHours;

        /* Payment info */
        document.getElementById("detailed-payment-info").innerHTML =
            createInfoString(id, "/", "paymentTypes");

        /* Activity info */
        document.getElementById("detailed-activity-info").innerHTML =
            createInfoString(id, "<br>", "activities");

        /* Type of pub */
        document.getElementById("detailed-type-info").innerHTML =
            createInfoString(id, "/", "types");

        /* Offerings */
        document.getElementById("detailed-offering-info").innerHTML =
            createInfoString(id, "/", "filter");

        /* Drinks */
        addDetailedViewDrinkData(id);

        /* Food */
        addDetailedViewFoodData(id);
    }


    /**
     * Add the map data from Google Maps by embedding it.
     *
     * @param id - the id of the pub.
     */
    function addDetailedViewMapData(id) {
        let link;
        
        switch (id) {
            case "bulten":
                link = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2132.6118109764366!2d11.976324116251982!3d57.68907484847075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff30b3d58e515%3A0xc9e8bc8489acdd0c!2sCaf%C3%A9%20Bulten!5e0!3m2!1ssv!2sse!4v1589901070588!5m2!1ssv!2sse";
                break;
            case "japripps":
                link = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2132.625594354869!2d11.972422816251985!3d57.68884064848921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff30c85151a2f%3A0xa7d7ef8f8734b70b!2sJ.A.%20Pripps!5e0!3m2!1ssv!2sse!4v1589967420154!5m2!1ssv!2sse";
                break;
            case "wijkanders":
                link = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2132.404738205159!2d11.973130216252125!3d57.69259324819357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff3736be94497%3A0x57820489e5a0243a!2sWijkanders!5e0!3m2!1ssv!2sse!4v1589967520416!5m2!1ssv!2sse";
                break;
            case "gasquen":
                link = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2132.6348754568216!2d11.972810516252048!3d57.688682948501636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff30c82ab535b%3A0x2200f43ab5d50a72!2sGasquen!5e0!3m2!1ssv!2sse!4v1589967569542!5m2!1ssv!2sse";
                break;
            case "cafec":
                link = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2131.548158761385!2d11.93784271625245!3d57.70714604704631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff36dbc5e91e3%3A0xb16bc1bfa58f2ec!2zQ2Fmw6kgQw!5e0!3m2!1ssv!2sse!4v1589967603277!5m2!1ssv!2sse";
                break;
            case "11an":
                link = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d615.6871602870559!2d11.936317312217527!3d57.706282776496224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff3501f848e83%3A0x54abd425161578f4!2sForskningsg%C3%A5ngen%204%2C%20417%2056%20G%C3%B6teborg!5e0!3m2!1ssv!2sse!4v1589967740771!5m2!1ssv!2sse";
                break;
            case "rodarummet":
                link = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2132.7039388247363!2d11.974362516251983!3d57.687509448594156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff30b9932fbc5%3A0xc546b8c77043137d!2sR%C3%B6da%20rummet!5e0!3m2!1ssv!2sse!4v1589967776297!5m2!1ssv!2sse";
                break;
            case "ventren":
                link = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2132.642473353872!2d11.973164466252!3d57.68855384851187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff30b9852dbc7%3A0x867cce9b10ae9808!2sVerum!5e0!3m2!1ssv!2sse!4v1589968006194!5m2!1ssv!2sse";
                break;
            case "basen":
                link = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2132.706498889776!2d11.976303616251938!3d57.68746594859759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff30ba98875b3%3A0xd82308db104a35d2!2sBasen!5e0!3m2!1ssv!2sse!4v1589968069244!5m2!1ssv!2sse";
                break;
            case "goldeni":
                link = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2132.3872463556095!2d11.9729680162521!3d57.692890448169926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff3736d194a5d%3A0xfe4d74f967ee6672!2sGolden-I!5e0!3m2!1ssv!2sse!4v1589968111484!5m2!1ssv!2sse";
                break;
            case "kajsabaren":
                link = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2132.6625950754096!2d11.976560416251967!3d57.68821194853876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff30b05068ca7%3A0xbaee587a8bd9a9ed!2sKajsabaren!5e0!3m2!1ssv!2sse!4v1589968192647!5m2!1ssv!2sse";
                break;
            case "focus":
                link = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2132.498070260348!2d11.973370516252048!3d57.69100744831845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff373530bf8cd%3A0xb31fc4afa7529106!2sFocus!5e0!3m2!1ssv!2sse!4v1589968251403!5m2!1ssv!2sse";
                break;
            case "hubben21":
                link = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2132.498070260348!2d11.973370516252048!3d57.69100744831845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff30b03281b63%3A0x17079f6a1c961735!2sHubben%202.1!5e0!3m2!1ssv!2sse!4v1589968295567!5m2!1ssv!2sse";
                break;
            case "fortnox":
                link = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2132.4964929633666!2d11.976017616252005!3d57.69103424831628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff374b68f4571%3A0xced092551515cacc!2sFort%20NOx!5e0!3m2!1ssv!2sse!4v1589968328730!5m2!1ssv!2sse";
                break;
            case "gastownospritkoket":
                link = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2132.4964929633666!2d11.976017616252005!3d57.69103424831628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff3fd2d617c55%3A0x44ceb2b14e3995c7!2sGastown%2FSpritk%C3%B6ket!5e0!3m2!1ssv!2sse!4v1589968364321!5m2!1ssv!2sse";
                break;
            case "winden":
                link = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2132.58359672518!2d11.975879216252004!3d57.68955424843297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff30b11431be5%3A0x81ca7ad1ae019ad0!2sWinden!5e0!3m2!1ssv!2sse!4v1589968396405!5m2!1ssv!2sse";
                break;
            case "jarnvagspub":
                link = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2132.65546214274!2d11.973598616252032!3d57.68833314852923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff39c09a20bed%3A0xc12f58f11443cbc6!2zSsOkcm52w6Rnc3ZhZ25lbiwgQ2hhbG1lcnM!5e0!3m2!1ssv!2sse!4v1589968430063!5m2!1ssv!2sse";
                break;
            case "zaloonen":
                link = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2132.65546214274!2d11.973598616252032!3d57.68833314852923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff30b220b99bd%3A0x71ad7e2ae464430d!2sZaloonen!5e0!3m2!1ssv!2sse!4v1589968461361!5m2!1ssv!2sse";
                break;
        }

        document.getElementById("detailed-map-info").src = link;
    }


    /**
     * Add a short line of text that describes the current queue length.
     *
     * @param id - the id of the pub.
     */
    function addDetailedViewQueueData(id) {
        if (document.getElementById(id).classList.contains("short-queue")) {
            document.getElementById("detailed-queue-info").innerHTML = "Short (<15 minutes)";
        } else if (document.getElementById(id).classList.contains("medium-queue")) {
            document.getElementById("detailed-queue-info").innerHTML = "Medium (<30 minutes)";
        } else if (document.getElementById(id).classList.contains("long-queue")) {
            document.getElementById("detailed-queue-info").innerHTML = "Long (>30 minutes)";
        } else {
            document.getElementById("detailed-queue-info").innerHTML = "The pub is closed.";
        }
    }


    /**
     *
     *
     * @param id - the id of the pub.
     * @param separator - separates each of the elements from the pub data.
     * @param dataToGet - which data to get from the pub data.
     * @returns {string} with the info to add to the detailed view.
     */
    function createInfoString(id, separator, dataToGet) {
        let infoString = "";

        for (let i = 0; i < (pubData[id][dataToGet].length); i++) {
            if (infoString === "") {
                infoString = infoString + pubData[id][dataToGet][i];
            } else {
                infoString = infoString + " " + separator + " " + pubData[id][dataToGet][i];
            }
        }

        return infoString;
    }


    /**
     * Adds the available drinks and its prices to the detailed view.
     *
     * @param id - the id of the pub.
     */
    function addDetailedViewDrinkData(id) {
        // TODO
    }


    /**
     * Adds the available food and its prices to the detailed view.
     *
     * @param id - the id of the pub.
     */
    function addDetailedViewFoodData(id) {
        // TODO
    }
});