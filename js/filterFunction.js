$(window).on('load', function() {
    var allPubs = ["wijkanders", "bulten", "japripps", "gasquen", "cafec", "11an", "rodarummet", "ventren", "basen",
        "goldeni", "kajsabaren", "focus", "hubben21", "fortnox", "gastownospritkoket", "winden", "jarnvagspub",
        "zaloonen", "pignwhistle"];

    var currentFilters = [];

    // Event listeners for the checkboxes
    $('.filter-checkbox').click(function (event) {
        getJSONData($(event.target));
    });


    /**
     * Get the data from pub-data.json
     *
     * @param obj
     */
    function getJSONData(obj) {
        $.getJSON('../pub-data.json', function (data) {
            // Pass the data on to the filter function, along with the object that called the function
            filterFunction(data, obj);
        });
    }


    /**
     * Filter out the pubs that doesn't match the checked checkboxes.
     *
     * @param data - the data from pub-data.json
     * @param obj  - the checkbox that was pressed
     */
    function filterFunction(data, obj) {
        var filter = $(obj).attr('id').replace("-checkbox", "");

        if (currentFilters.includes(filter)) {
            removeFilter(data, filter);
        } else {
            addFilter(data, filter);
        }
    }


    /**
     * Adds a new filter to the current filters, and updates the pub list.
     *
     * @param data   - the data from pub-data.json
     * @param filter - the filter to apply
     */
    function addFilter(data, filter) {
        currentFilters.push(filter);

        resetPubs();

        updateFilter(data, filter);

        reorderPubs();
    }


    /**
     * Removes a filter from the current filters, and updates the pub list.
     *
     * @param data   - the data from pub-data.json
     * @param filter - the filter to apply
     */
    function removeFilter(data, filter) {
        currentFilters = currentFilters.filter(function(e) {
            return e !== filter
        });

        resetPubs();

        for (let i = 0; i < currentFilters.length; i++) {
            updateFilter(data, currentFilters[i]);
        }

        reorderPubs();
    }


    /**
     * Updates which pubs are visible/invisible.
     *
     * @param data   - the data from pub-data.json
     * @param filter - the filter to apply
     */
    function updateFilter(data, filter) {
        for (let i = 0; i < allPubs.length; i++) {
            let pub = allPubs[i];

            if (filter === "open") {
                if (!document.getElementById(pub).classList.contains("pub-closed")) {
                    document.getElementById(pub).classList.add("visible");
                    document.getElementById(pub).classList.remove("invisible");
                } else {
                    document.getElementById(pub).classList.add("invisible");
                    document.getElementById(pub).classList.remove("visible");
                }
            } else {
                if (data[pub].filter.includes(filter)) {
                    document.getElementById(pub).classList.add("visible");
                    document.getElementById(pub).classList.remove("invisible");
                } else {
                    document.getElementById(pub).classList.add("invisible");
                    document.getElementById(pub).classList.remove("visible");
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

            console.log(pub);
            console.log(document.getElementById(pub).classList.contains("visible"));

            if (document.getElementById(pub).classList.contains("visible")) {
                document.getElementById(pub).classList.add("order-0");
                document.getElementById(pub).classList.remove("order-19");
                removeOrderTags(i);
            } else {
                document.getElementById(pub).classList.remove("order-0");
                document.getElementById(pub).classList.add("order-19");
                removeOrderTags(i);
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
     * Resets the checkboxes and the current filters.
     * Use when sorting and searching.
     */
    function resetCheckboxes() {
        for (let i = 0; i < currentFilters.length; i++) {
            document.getElementById(currentFilters[i] + "-checkbox").click();
        }
    }
});