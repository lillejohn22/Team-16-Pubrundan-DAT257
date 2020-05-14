/**
 * This file has a function for sorting an array list, alphabetically and after queue length.
 * It also registers which button was pressed and sorts the element on the website accordingly.
 */


var pubList = ["wijkanders", "bulten", "japripps", "gasquen", "cafec", "11an", "rodarummet", "ventren", "basen",
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
    document.getElementById(pubList[i]).classList.remove('order-1');
    document.getElementById(pubList[i]).classList.remove('order-2');
    document.getElementById(pubList[i]).classList.remove('order-3');
    document.getElementById(pubList[i]).classList.remove('order-4');
    document.getElementById(pubList[i]).classList.remove('order-5');
    document.getElementById(pubList[i]).classList.remove('order-6');
    document.getElementById(pubList[i]).classList.remove('order-7');
    document.getElementById(pubList[i]).classList.remove('order-8');
    document.getElementById(pubList[i]).classList.remove('order-9');
    document.getElementById(pubList[i]).classList.remove('order-10');
    document.getElementById(pubList[i]).classList.remove('order-11');
    document.getElementById(pubList[i]).classList.remove('order-12');
    document.getElementById(pubList[i]).classList.remove('order-13');
    document.getElementById(pubList[i]).classList.remove('order-14');
    document.getElementById(pubList[i]).classList.remove('order-15');
    document.getElementById(pubList[i]).classList.remove('order-16');
    document.getElementById(pubList[i]).classList.remove('order-17');
    document.getElementById(pubList[i]).classList.remove('order-18');
    document.getElementById(pubList[i]).classList.remove('order-19');
    document.getElementById(pubList[i]).classList.remove('.hidden-xs-up');
}


/**
 * Adds new class list tag for every element in order of new list.
 *
 * @param {int} i - the index of the element
 */
function addOrderTag(i) {
    switch (i) {
        case 0:
            document.getElementById(pubList[i]).classList.add('order-1');
            break;
        case 1:
            document.getElementById(pubList[i]).classList.add('order-2');
            break;
        case 2:
            document.getElementById(pubList[i]).classList.add('order-3');
            break;
        case 3:
            document.getElementById(pubList[i]).classList.add('order-4');
            break;
        case 4:
            document.getElementById(pubList[i]).classList.add('order-5');
            break;
        case 5:
            document.getElementById(pubList[i]).classList.add('order-6');
            break;
        case 6:
            document.getElementById(pubList[i]).classList.add('order-7');
            break;
        case 7:
            document.getElementById(pubList[i]).classList.add('order-8');
            break;
        case 8:
            document.getElementById(pubList[i]).classList.add('order-9');
            break;
        case 9:
            document.getElementById(pubList[i]).classList.add('order-10');
            break;
        case 10:
            document.getElementById(pubList[i]).classList.add('order-11');
            break;
        case 11:
            document.getElementById(pubList[i]).classList.add('order-12');
            break;
        case 12:
            document.getElementById(pubList[i]).classList.add('order-13');
            break;
        case 13:
            document.getElementById(pubList[i]).classList.add('order-14');
            break;
        case 14:
            document.getElementById(pubList[i]).classList.add('order-15');
            break;
        case 15:
            document.getElementById(pubList[i]).classList.add('order-16');
            break;
        case 16:
            document.getElementById(pubList[i]).classList.add('order-17');
            break;
        case 17:
            document.getElementById(pubList[i]).classList.add('order-18');
            break;
        case 18:
            document.getElementById(pubList[i]).classList.add('order-19');
            break;
        default:
            alert(pubList);
    }
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


