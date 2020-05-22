/**
 * This file has a function for sorting an array list, alphabetically and after queue length.
 * It also registers which button was pressed and sorts the element on the website accordingly.
 */

var pubList = getPubList();


/**
 * Sorts the pubs based on the alphabetical order.
 */
$('#alphaSort').click(function() {
    sortFunction("alpha");
});


/**
 * Sorts the pubs based on the queue length.
 */
$('#queueSort').click(function() {
    sortFunction("queue");
});


/**
 * Sorts the pub based on its argument, either alphabetically or by queue length.
 *
 * @param {string} sortBy - tells us how to sort the pubList
 * @returns
 */
function sortFunction (sortBy) { 
    if (sortBy === "alpha"){
        pubList.sort();
    } else {
        pubList.sort(function (a, b) {
            const newA = getQueueLength(a);
            const newB = getQueueLength(b);

            if (newA < newB) {
                return -1;
            } else if (newB < newA) {
                return 1;
            } else {
                return 0;
            }
        });
    }

    for (let i = 0; i < pubList.length; i++) {
        removeOrderTagsSort(i);
        addOrderTag(i);
        document.getElementById(pubList[i]).classList.remove('invisible');
        document.getElementById(pubList[i]).classList.add('visible');
    }
}


/**
 * Removes each element's class list tags for an element's order on the website.
 *
 * @param {int} i - the index of the element
 */
function removeOrderTagsSort(i) {
    for (let j = 0; j < (pubList.length + 1); j++) {
        let orderN = "order-" + j;

        document.getElementById(pubList[i]).classList.remove(orderN);
    }

    document.getElementById(pubList[i]).classList.remove('.hidden-xs-up');
}


/**
 * Adds new class list tag for every element in order of new list.
 *
 * @param {int} i - the index of the element
 */
function addOrderTag(i) {
    let orderN = "order-" + i;

    document.getElementById(pubList[i]).classList.add(orderN);
}


/**
 * Returns the corresponding number based on which queue-class a pub has.
 *
 * @param {string} pub - the pub to get the queue length from
 * @returns {int} the number to be used in the sort function above
 */
function getQueueLength(pub){
    const pubItem = document.getElementById(pub);

    if (pubItem.classList.contains('short-queue')){
        return 1;
    } else if(pubItem.classList.contains('medium-queue')){
        return 2;
    } else if(pubItem.classList.contains('long-queue')){
        return 3;
    } else {
        return 5;
    }
}


