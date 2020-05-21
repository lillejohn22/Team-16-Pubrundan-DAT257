/**
* Function to create list of suggestions when you search for something
*/
function googleSearch() {
    // Get the input of the search bar
    var input = document.getElementById("searchBar");

    var filter= input.value.toUpperCase().replace(/\s+/g, '');

    // Get list objects with pub names
    var ul = document.getElementById("searchList");
    var li = ul.getElementsByTagName("li");

    for (let i = 0; i < li.length; i++) {
        var a = li[i].getElementsByTagName("a")[0];
        var txtValue = a.textContent || a.innerText;

        // If value in the search bar matches a pub name, show it in the suggestion list
        if(txtValue.toUpperCase().replace(/\s+/g, '').indexOf(filter) > -1) {

        li[i].style.display = "";
        document.getElementById("searchList").classList.remove('invisible');

        // Special case, if the e has no acute accent
        } else if (filter.indexOf("CAFE") > -1) {
            li[0].style.display = "";
            li[3].style.display = "";

            document.getElementById("searchList").classList.remove('invisible');

        // Special case, if the J.A. is spelled without dots
        } else if (filter.indexOf("JA") > -1) {
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

            // Make the suggestion list for search results visible again
            document.getElementById("searchList").classList.remove('invisible');

        // Special case, if the 11:an has no colon
        } else if (filter.indexOf("11AN") > -1) {
            li[5].style.display = "";
            document.getElementById("searchList").classList.remove('invisible');


        }


        // Special case, if the V-Entrén has no hyphen and acute accent
        else if (filter.indexOf("VEN") > -1) {
                li[15].style.display = "";
                document.getElementById("searchList").classList.remove('invisible');
         }


        // Special case, if the Golden-I has no hyphen
        else if (filter.indexOf("GOLDENI") > -1) {
            li[10].style.display = "";
            document.getElementById("searchList").classList.remove('invisible');

         // If no pub matches, do not show any pub names in the suggestion list
         } else {
            li[i].style.display = "none";
        }

        // If the search bar is empty, do not show the suggestion list
        if (input.value.length == 0) {
            document.getElementById("searchList").classList.add('invisible');
        }
    }
}

/**
 * Function that moves the card of the clicked pub name to the first position.
 * This is done setting all items to be in the back and then moving specified to be first.
 * @param id, which is the id number of the pub, to be selected in the list below
 */
function clickPubSearch(id) {
    // List with pub ids
    var pubListObj = getPubList();

    // Make search suggestion list invisible
    document.getElementById("searchList").classList.add('invisible');

    // For every pub card, make it visible and order it last
    for (let c = 0; c < pubListObj.length; c++) {
        document.getElementById(pubListObj[c]).classList.remove('invisible');
        document.getElementById(pubListObj[c]).classList.add('visible');

        document.getElementById(pubListObj[c]).classList.remove('order-1');
        document.getElementById(pubListObj[c]).classList.add('order-18');
    }

    // Change order of card of clicked pub name to first
    document.getElementById(pubListObj[id]).classList.remove('order-18');
    document.getElementById(pubListObj[id]).classList.add('order-1');
}

