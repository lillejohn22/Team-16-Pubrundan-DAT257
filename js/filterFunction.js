/* TODO:
    - it only uses the last filter to filter the pubs, fix that
 */


$(window).on('load', function() {
    var allPubs = getPubList();

    var currentFilters = [];
    var pubData;


    // Event listeners for the checkboxes
    $('.filter-checkbox').click(function (event) {
        filterFunction($(event.target));
    });


    // Get the data from pub-data.json
    $.getJSON('../pub-data.json', function (data) {
        // Pass the data on to the filter function, along with the object that called the function
        pubData = data;
    });


    /**
     * Filter out the pubs that doesn't match the checked checkboxes.
     *
     * @param obj  - the checkbox that was pressed
     */
    function filterFunction(obj) {
        let filter = $(obj).attr('id').replace("-checkbox", "");

        if (currentFilters.includes(filter)) {
            removeFilter(filter);
        } else {
            addFilter(filter);
        }
    }


    /**
     * Adds a new filter to the current filters, and updates the pub list.
     *
     * @param filter - the filter to apply
     */
    function addFilter(filter) {
        currentFilters.push(filter);

        resetPubs();

        updateFilter();

        reorderPubs();
    }


    /**
     * Removes a filter from the current filters, and updates the pub list.
     *
     * @param filter - the filter to apply
     */
    function removeFilter(filter) {
        currentFilters = currentFilters.filter(function(e) {
            return e !== filter
        });

        resetPubs();

        updateFilter();

        reorderPubs();
    }


    /**
     * Updates which pubs are visible/invisible.
     */
    function updateFilter() {
        for (let i = 0; i < currentFilters.length; i++) {
            for (let j = 0; j < allPubs.length; j++) {
                let pub = document.getElementById(allPubs[j]);
                let pubId = allPubs[j];

                if (currentFilters[i] === "open") {
                    if (!pub.classList.contains("pub-closed")) {
                        pub.classList.add("visible");
                    } else {
                        pub.classList.add("invisible");
                    }
                } else {
                    if (pubData[pubId].filter.includes(currentFilters[i])) {
                        pub.classList.add("visible");
                    } else {
                        pub.classList.add("invisible");
                    }
                }
            }
        }

        for (let j = 0; j < allPubs.length; j++) {
            let pub = document.getElementById(allPubs[j]);

            if (pub.classList.contains("visible")) {
                if (pub.classList.contains("invisible")) {
                    pub.classList.remove("visible");
                }
            }
        }
    }


    /**
     * Fixes the ordering of the grid elements.
     */
    function reorderPubs() {
        for (let i = 0; i < allPubs.length; i++) {
            let pub = allPubs[i];

            removeOrderTags(pub);

            if (document.getElementById(pub).classList.contains("visible")) {
                document.getElementById(pub).classList.add("order-0");
                document.getElementById(pub).classList.remove("order-19");
            } else {
                document.getElementById(pub).classList.add("order-19");
                document.getElementById(pub).classList.remove("order-0");
            }
        }
    }


    /**
     * Resets the visibility state of all the pubs.
     */
    function resetPubs() {
        for (let i = 0; i < allPubs.length; i++) {
            document.getElementById(allPubs[i]).classList.remove("invisible");
            document.getElementById(allPubs[i]).classList.add("visible");
        }
    }


    /**
     *
     * @param pub
     */
    function removeOrderTags(pub) {
        for (let j = 0; j < (allPubs.length + 1); j++) {
            let orderN = "order-" + j;

            document.getElementById(pub).classList.remove(orderN);
        }
    }
});