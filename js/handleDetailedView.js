/**
 * Handles the detailed view.
 * Opens it, closes it, and adds the data to it.
 *
 * @author Emma Pettersson
 */

const detailedView = document.querySelector(".detailed-view");

/* Event listeners */
window.addEventListener("click", windowOnClick);

$('.detailed-view-button').click(function(event) {
    toggleDetailedView($(event.target));
});

$('.exit-button').click(function(event) {
    toggleDetailedView($(event.target));
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
 * @param id - id of the pub data to add
 */
function addDetailedViewData(id) {

}