const detailedView = document.querySelector(".detailed-view");

/**
 * Opens the detailed view.
 *
 * @param obj - the object that called the function
 */
function toggleDetailedView(obj) {
    detailedView.classList.toggle("show-detailed-view");

    if (!obj.id.classList.contains("show-detailed-view"))
        addDetailedViewData(obj.id);
}


/**
 * Closes the detailed view when a user clicks outside of it.
 */
function windowOnClick(event) {
    if (event.target === detailedView) {
        toggleDetailedView();
    }
}

// Event listener for the window
window.addEventListener("click", windowOnClick);


/**
 * Takes the information from pub-data.json and adds to the detailed view.
 *
 * @param id - id of the pub data to add
 */
function addDetailedViewData(id) {

}