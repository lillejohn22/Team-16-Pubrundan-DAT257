/**
 * This file has a function for sorting an array list, alphabetically and after queue length.
 * It also registers which button was pressed and sorts the element on the website accordingly.
 */


var pubList = ["bulten", "japripps", "wijkanders", "gasquen", "cafec", "11an", "rodarummet", "ventren", "basen",
    "goldeni", "kajsabaren", "focus", "hubben21", "fortnox", "gastownospritkoket", "winden", "jarnvagspub", "zaloonen",
    "pignwhistle"];

// The pubs should initially be sorted by their queue time.
sortFunction(pubList, "queue");


/**
 * Sorts the pubs based on the alphabetical order.
 */
$('#alphaSort').click(function(){
    sortFunction(pubList, "alpha");
});


/**
 * Sorts the pubs based on the queue length.
 */
$('#queueSort').click(function(){
    sortFunction(pubList, "queue");
});


/**
 * Sorts the pub based on its argument, either alphabetically or by queue length.
 *
 * @param {string[]} pubList - a list of all the pubs
 * @param {string} sortBy - tells us how to sort the pubList
 * @returns
 */
function sortFunction (pubList, sortBy) {
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
        removeOrderTags(i);
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
function removeOrderTags(i) {
    for (let j = 0; j < 20; j++) {
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


