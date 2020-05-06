//Sorts the pubs based on whether alphabetical or queue length is picked.
var sortElems = document.getElementsByClassName("sortButtons");
var elem = document.getElementsByClassName("sortPubs");

for (var i = 0; i < sortElems.length; i++) {
  sortElems[i].addEventListener("click", function() {
    this.classList.toggle("active");


    if (elem.id == "alpha"){
        alert("alpha");
        //sortFunction(PUBLIST, "alpha");
    } else {
        alert("queue");
        //sortFunction(PUBLIST, "queue");
    }
  });
}

PL = ["wijkanders", "bulten", "japripps"];

/*
alert(PL);
sortFunction(PL, "queue");
alert(PL);
*/

//Sort the pub based on its argument, either alphabetically or by queue length-
function sortFunction (publist, sortBy) {

    if (sortBy == "alpha"){
        publist.sort();
    }
    else {
        publist.sort(function (a, b) {

            var newA = getQueueLength(a);
            var newB = getQueueLength(b);

            if (newA < newB) {
                return -1;
            }
            if (newB < newA) {
                return 1;
            }
            return 0;
        });
    }
}

//Returns the corresponding number based on which queue-class a pub has.
function getQueueLength(pub){

            var pubItem = document.getElementById(pub);

            if (pubItem.classList.contains('short-queue')){
                return 1;
            }
            else if(pubItem.classList.contains('medium-queue')){
                return 2;
            }
            else if(pubItem.classList.contains('long-queue')){
                return 3;
            }
            else{
                return 5;
            }
}


