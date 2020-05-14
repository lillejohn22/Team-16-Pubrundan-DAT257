/**
* Filters pubs.
 *
 * @author Jennifer Krogh
 * @author Emma Pettersson
*/


$(window).on('load', function() {
    var allPubs = ["wijkanders", "bulten", "japripps", "gasquen", "cafec", "11an", "rodarummet", "ventren", "basen",
        "goldeni", "kajsabaren", "focus", "hubben21", "fortnox", "gastownospritkoket", "winden", "jarnvagspub", "zaloonen",
        "pignwhistle"];

    var checkboxes = document.getElementsByClassName("filterButtons");

    // Get the data from pub-data.json
    $.getJSON('../pub-data.json', function (data) {
        // Send data to function processJSON to be able to access outside of getJSON call
        filterFunction(data);
    });


    /**
     * Filter out the pubs that doesn't match the checked checkboxes.
     *
     * @param data - the data from pub-data.json
     */
    function filterFunction(data) {
        var filteredList = [];
        var hiddenList = [];

        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                if (checkboxes[i].id === "open") {
                    for (let j = 0; j < pubList.length; j++) {
                        const pubItem = document.getElementById(j);

                        if (pubItem.classList.contains('pub-closed')) {
                            filteredList.push(j);
                        }
                    }
                } else {
                    for (let k = 0; k < pubList.length; k++) {
                        var filterElems = data[k].filter;

                        if (filterElems.includes(checkboxes[i])) {
                            filteredList.push(k);
                        }
                    }
                }
            }
        }

        // If no checkboxes have been checked, then all pubs should be displayed.
        if (filteredList.length === 0) {
            pubList = allPubs;
        } else {
            // Empties the pub list.
            pubList = [];

            // Removes duplicates from the filtered list.
            $.each(filteredList, function (n, el) {
                if ($.inArray(el, pubList) === -1) {
                    pubList.push(el);
                }
            });

            // Adds the remaining pubs to a hidden list.
            for (let o = 0; o < allPubs.length; o++) {
                if (!filteredList.includes(o)) {
                    hiddenList.push(o);
                }
            }

            // Removes old order tags and add the new.
            for (let l = 0; l < pubList.length; l++) {
                removeOrderTags(l);
                addOrderTag(l);
            }

            // Makes remaining pubs hidden.
            for (let m = 0; m < hiddenList.length; m++) {
                removeOrderTags(m);
                document.getElementById(hiddenList[m]).classList.add('.hidden-xs-up');
            }
        }
    }
});


