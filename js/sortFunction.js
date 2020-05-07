//Sorts the pubs based on whether alphabetical or queue length is picked.
var sortElems = document.getElementsByClassName("sortButtons");
var elem = document.getElementsByClassName("sortPubs");

var PL = ["wijkanders", "bulten", "japripps", "gasquen", "cafec", "11an", "rodarummet", "ventren",
"basen", "goldeni", "kajsabaren", "focus", "hubben21", "fortnox", "gastownospritkoket", "winden", "jarnvagspub", "zaloonen", "pignwhistle"];

for (var i = 0; i < sortElems.length; i++) {
  sortElems[i].addEventListener("click", function() {
    this.classList.toggle("active");

    //var $pubSort = $("div.boxi");

    if (elem.id === "alpha"){
        //alert("alpha");
        //var alphabeticalOrder = $('.col-sm-6 col-lg-6 col-xl-3 grid-element').sort(function(x,y){
       // return $(x).id > $(y).id;
      //  });

       // sortFunction(PubsL, "alpha");
       // var x = PubsL.sort();
      //  alert(x.join("\n"));

        //function(a,b) {
                 // return $(a).attr('id') > $(b).attr('id');  });

                  //$pubSort.
        //displaySort();
        //$('#sortContainer').detach().empty().append(alphabeticalOrder);
        //$('body').append($('#sortContainer'));
        //$("#sortContainer").html(alphabeticalOrder);

        //html(alphabeticalOrder);
        //var divelem = $('.sortContainer').find('.col-sm-6 col-lg-6 col-xl-3 grid-element').


        PL.sortFunction(this, "alpha");
        for (var i = 0; i < PL.length; i++) {
        document.getElementById(PL[i]).classList.remove('order-1');
        document.getElementById(PL[i]).classList.remove('order-2');
        document.getElementById(PL[i]).classList.remove('order-3');
        document.getElementById(PL[i]).classList.remove('order-4');
        document.getElementById(PL[i]).classList.remove('order-5');
        document.getElementById(PL[i]).classList.remove('order-6');
        document.getElementById(PL[i]).classList.remove('order-7');
        document.getElementById(PL[i]).classList.remove('order-8');
        document.getElementById(PL[i]).classList.remove('order-9');
        document.getElementById(PL[i]).classList.remove('order-10');
        document.getElementById(PL[i]).classList.remove('order-11');
        document.getElementById(PL[i]).classList.remove('order-12');
        document.getElementById(PL[i]).classList.remove('order-13');
        document.getElementById(PL[i]).classList.remove('order-14');
        document.getElementById(PL[i]).classList.remove('order-15');
        document.getElementById(PL[i]).classList.remove('order-16');
        document.getElementById(PL[i]).classList.remove('order-17');
        document.getElementById(PL[i]).classList.remove('order-18');
        document.getElementById(PL[i]).classList.remove('order-19');

        switch(i+1) {
          case 1:
            document.getElementById(PL[i]).classList.add('order-1');
            break;
          case 2:
            document.getElementById(PL[i]).classList.add('order-2');
            break;
          case 3:
            document.getElementById(PL[i]).classList.add('order-3');
            break;
          case 4:
            document.getElementById(PL[i]).classList.add('order-4');
            break;
            case 5:
            document.getElementById(PL[i]).classList.add('order-5');
            break;
            case 6:
            document.getElementById(PL[i]).classList.add('order-6');
            break;
            case 7:
            document.getElementById(PL[i]).classList.add('order-7');
            break;
            case 8:
            document.getElementById(PL[i]).classList.add('order-8');
            break;
            case 9:
            document.getElementById(PL[i]).classList.add('order-9');
            break;
            case 10:
            document.getElementById(PL[i]).classList.add('order-10');
            break;
            case 11:
            document.getElementById(PL[i]).classList.add('order-11');
             break;
            case 12:
            document.getElementById(PL[i]).classList.add('order-12');
             break;
            case 13:
            document.getElementById(PL[i]).classList.add('order-13');
             break;
            case 14:
            document.getElementById(PL[i]).classList.add('order-14');
             break;
            case 15:
            document.getElementById(PL[i]).classList.add('order-15');
             break;
            case 16:
            document.getElementById(PL[i]).classList.add('order-16');
             break;
            case 17:
            document.getElementById(PL[i]).classList.add('order-17');
             break;
            case 18:
            document.getElementById(PL[i]).classList.add('order-18');
             break;
            case 19:
            document.getElementById(PL[i]).classList.add('order-19');
             break;

          default:
            document.getElementById(PL[i]).classList.add('order-19');
        }
        //document.getElementById(PL[i]).classList.add('oder-'+(i+1));
           // $('.x').append(PL[i]);
        }


    } else {
        //alert("queue");
        sortFunction(PubsL, "queue");
    }
  });
}


//alert(PL[i]);
/*
alert(PL);
sortFunction(PL, "alpha");
alert(PL);
*/

//Sort the pub based on its argument, either alphabetically or by queue length-
function sortFunction (publist, sortBy) {

    if (sortBy === "alpha"){
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


