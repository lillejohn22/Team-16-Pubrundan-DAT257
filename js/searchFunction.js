// List of all the pubs
var pubListObjects = ["bulten", "japripps", "wijkanders", "cafec", "basen", "11an", "focus", "fortnox", "gasquen",
    "gastownospritkoket", "goldeni",  "hubben21", "jarnvagspub", "kajsabaren", "pignwhistle", "rodarummet",
    "ventren", "winden", "zaloonen"];

const {length} = pubListObjects;


/**
 * Allows searching by pressing the enter key.
 */
$("#searchBar").keyup(function(event) { //on keyup

    googleSearch();

    if (event.keyCode === 13) {
        $("#searchButton").click();
    }

});


/**
 * Allows searching by pressing the search button.
 */
$('#searchButton').click(function() {
    searchFunction();
});


/**
* Function for searching pubs on the website.
*/
function searchFunction() {
    // Make search suggestion list invisible
    document.getElementById("searchList").classList.add('invisible');

    // Get search content from search bar
    var searchInput = document.getElementById("searchBar");

    // Make input comparable (everything to upper case and trimmed)
    var txt = searchInput.value.toUpperCase();
    var txtFilter = txt.replace(/\s+/g, '');

    // Get names of pubs from the list objects
    var textList = document.getElementById("searchList");
    var listObjects = textList.getElementsByTagName("li");

    for (let i = 0; i < listObjects.length; i++) {
        var as = listObjects[i].getElementsByTagName("a")[0];
        var textValue = as.textContent || as.innerText;

        // Check if the search box has content
        if (txtFilter !== "") {
            // Compare the content of the search box to the content in the list of pub names
            if (textValue.toUpperCase().replace(/\s+/g, '').indexOf(txtFilter) > -1) {
                // Make pub cards that match visible
                document.getElementById(pubListObjects[i]).classList.remove('invisible');
                document.getElementById(pubListObjects[i]).classList.add('visible');

            // Special case, if the e has no acute accent
            } else if (txtFilter.indexOf("CAFE") > -1) {
                searchFunctionSpecial(0, 3);

            // Special case, if the J.A. is spelled without dots
            } else if(txtFilter.indexOf("JA") > -1) {
                searchFunctionSpecial(1, -1);

            // Special case, if the 11:an has no colon
            } else if(txtFilter.indexOf("11A") > -1) {
                searchFunctionSpecial(5, -1);

            // Special case, if the Pig 'N'... has no apostrophe
            } else if (txtFilter.indexOf("PIGN") > -1) {
                searchFunctionSpecial(14, -1);

            // Special case, if the V-Entrén has no hyphen and acute accent
            } else if (txtFilter.indexOf("VE") > -1) {
                searchFunctionSpecial(16, -1);

            // Special case, if the Golden-I has no hyphen
            } else if (txtFilter.indexOf("GOLDENI") > -1) {
                searchFunctionSpecial(10, -1);

            // If pub card does not match, make it invisible and move it to last position
            } else {
                document.getElementById(pubListObjects[i]).classList.remove('visible');
                document.getElementById(pubListObjects[i]).classList.add('invisible');
            }

        // Make all pub cards visible if the search is empty
        } else {
            for (let j = 0; j < pubListObjects.length; j++) {
                document.getElementById(pubListObjects[j]).classList.remove('invisible');
                document.getElementById(pubListObjects[j]).classList.add('visible');
            }
        }
    }

    visiblePubsFirst();
}


/**
 * Search function for special cases.
 */
function searchFunctionSpecial(exceptionIndex1, exceptionIndex2) {
    fixVisibility(exceptionIndex1, exceptionIndex2);

    for (let j = 0; j < pubListObjects.length; j++) {
        removeOrderTagsSearch(j);
    }
}


/**
 * Make all the cards that do not fit the condition invisible.
 */
function fixVisibility(exceptionIndex1, exceptionIndex2) {
    for (let i = 0; i < length; i++) {
        if ((i !== exceptionIndex1)) {
            if (i !== exceptionIndex2) {
                document.getElementById(pubListObjects[i]).classList.add('invisible');
                document.getElementById(pubListObjects[i]).classList.remove('visible');
            } else {
                document.getElementById(pubListObjects[i]).classList.remove('invisible');
                document.getElementById(pubListObjects[i]).classList.add('visible');
            }
        } else {
            document.getElementById(pubListObjects[i]).classList.remove('invisible');
            document.getElementById(pubListObjects[i]).classList.add('visible');
        }
    }
}


/**
 * Puts all the visible pubs first.
 */
function visiblePubsFirst() {
    for (let i = 0; i < pubListObjects.length; i++) {
        let pub = pubListObjects[i];

        removeOrderTagsSearch(pub);

        if (document.getElementById(pub).classList.contains("visible")) {
            document.getElementById(pub).classList.add("order-0");
        } else {
            document.getElementById(pub).classList.add("order-19");
        }
    }
}


/**
 * Remove all the order tags.
 */
function removeOrderTagsSearch(pub) {
    for (let j = 0; j < (pubListObjects.length + 1); j++) {
        let orderN = "order-" + j;

        document.getElementById(pub).classList.remove(orderN);
    }
}