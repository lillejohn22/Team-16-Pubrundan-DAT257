/**
* Function to create list of suggestions when you search for something
*/
function googleSearch() {

// get the input of the search bar
var input = document.getElementById("searchBar");


var filter= input.value.toUpperCase().replace(/\s+/g, '');

// get list objects with pub names
var ul = document.getElementById("searchList");
var li = ul.getElementsByTagName("li");


for(var i = 0; i < li.length; i++) {

var a = li[i].getElementsByTagName("a")[0];
var txtValue = a.textContent || a.innerText;

    // if value in the search bar matches a pub name, show it in the suggestion list
    if(txtValue.toUpperCase().replace(/\s+/g, '').indexOf(filter) > -1) {

    li[i].style.display = "";
    document.getElementById("searchList").classList.remove('invisible');

    // special case, if
    } else if(filter.indexOf("CAFE") > -1) {

    li[0].style.display = "";
    li[3].style.display = "";
    document.getElementById("searchList").classList.remove('invisible');

    // special case, if
    } else if(filter.indexOf("JA") > -1) {

             li[1].style.display = "";

             li[0].style.display = "none";
             li[2].style.display = "none";
             li[3].style.display = "none";
             li[4].style.display = "none";
             li[5].style.display = "none";
             li[6].style.display = "none";
             li[7].style.display = "none";
             li[8].style.display = "none";
             li[9].style.display = "none";
             li[10].style.display = "none";
             li[11].style.display = "none";
             li[12].style.display = "none";
             li[13].style.display = "none";
             li[14].style.display = "none";
             li[15].style.display = "none";
             li[16].style.display = "none";
             li[17].style.display = "none";
             li[18].style.display = "none";

             // make the suggestion list for search results visible again
             document.getElementById("searchList").classList.remove('invisible');


    // special case, if the 11:an has no colon
    } else if(filter.indexOf("11AN") > -1) {

    li[5].style.display = "";
    document.getElementById("searchList").classList.remove('invisible');


    // special case, if the V-Entrén has no hyphen and acute accent
    } else if(filter.indexOf("VEN") > -1) {

    li[16].style.display = "";
    document.getElementById("searchList").classList.remove('invisible');


    // special case, if the Pig 'N'... has no apostrophe
    } else if(filter.indexOf("PIGN") > -1) {

    li[14].style.display = "";
    document.getElementById("searchList").classList.remove('invisible');


    // special case, if the Golden-I has no hyphen
    } else if(filter.indexOf("GOLDENI") > -1) {

    li[10].style.display = "";
    document.getElementById("searchList").classList.remove('invisible');


     // if no pub matches, do not show any pub names in the suggestion list
     } else {

    li[i].style.display = "none";

    }

    // if the search bar is empty, do not show the suggestion list
    if(input.value.length == 0) {

    document.getElementById("searchList").classList.add('invisible');

    }

  }

}

/**
* Function that moves the card of the clicked pub name to the first position
* @param id, which is the id number of the pub, to be selected in the list below
*/
function clickPubSearch(id) {

    // list with pub ids
    var pubListObj = ["bulten", "japripps", "wijkanders", "cafec", "basen", "11an", "focus", "fortnox", "gasquen", "gastownospritkoket",
                          "goldeni",  "hubben21", "jarnvagspub", "kajsabaren", "pignwhistle", "rodarummet", "ventren", "winden", "zaloonen"];

    // make search suggestion list invisible
    document.getElementById("searchList").classList.add('invisible');

    // for every pub card, make it visible and order it last
    for(var c = 0; c < pubListObj.length; c++) {
    document.getElementById(pubListObj[c]).classList.remove('invisible');
    document.getElementById(pubListObj[c]).classList.add('visible');

    document.getElementById(pubListObj[c]).classList.remove('order-1');
    document.getElementById(pubListObj[c]).classList.add('order-19');
 }

    // change order of card of clicked pub name to first
    document.getElementById(pubListObj[id]).classList.remove('order-19');
    document.getElementById(pubListObj[id]).classList.add('order-1');

}
