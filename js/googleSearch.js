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

    // array for input letters
    var filterArr = Array.from(filter);
    var letterArr = filterArr;


    for (let i = 0; i < li.length; i++) {
        var a = li[i].getElementsByTagName("a")[0];
        var txtValue = a.textContent || a.innerText;

        var pubArr = Array.from(txtValue.toUpperCase().replace(/\s+/g, ''))


        if((txtValue.toUpperCase().replace(/\s+/g, '').indexOf(filter) > -1) && (pubArr[0].indexOf(letterArr[0]) > -1) ) {

            li[i].style.display = "";
            document.getElementById("searchList").classList.remove('invisible');

            for(var x = 1; x < letterArr.length; x++) {

               if((pubArr[x-1].indexOf(letterArr[x-1]) > -1) && (pubArr[x].indexOf(letterArr[x]) > -1)) {

                  li[i].style.display = "";
                   document.getElementById("searchList").classList.remove('invisible');

                } else {

                   li[i].style.display = none;
                }

            }


        // Special case, if the e has no acute accent
        } else if (filter.indexOf("CAFE") > -1) {
            clearList();
            li[0].style.display = "";
            li[3].style.display = "";

            document.getElementById("searchList").classList.remove('invisible');

        // Special case, if the J.A. is spelled without dots
        } else if (filter.indexOf("JA") > -1) {
            li[1].style.display = "";
            document.getElementById("searchList").classList.remove('invisible');

        // Special case, if the 11:an has no colon
        } else if (filter.indexOf("11AN") > -1) {
            li[5].style.display = "";
            document.getElementById("searchList").classList.remove('invisible');

        // Special case for "Café Bulten"
        } else if (filter.indexOf("BU") > -1) {
           li[0].style.display = "";
           document.getElementById("searchList").classList.remove('invisible');

        // Special case, if the V-Entrén has no hyphen and acute accent
        } else if (filter.indexOf("VEN") > -1) {
            li[15].style.display = "";
            document.getElementById("searchList").classList.remove('invisible');

        // Special case, if the Golden-I has no hyphen
        } else if (filter.indexOf("GOLDENI") > -1) {
            li[10].style.display = "";
            document.getElementById("searchList").classList.remove('invisible');

         // If no pub matches, do not show any pub names in the suggestion list
         } else {
            li[i].style.display = "none";
        }

      }

        // If the search bar is empty, do not show the suggestion list
        if (input.value.length == 0) {
            document.getElementById("searchList").classList.add('invisible');
        }
    }


/**
* Function that moves the card of the clicked pub name to the first position
*
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


/**
 * Dropdown of search bar and list
 */
$('#dropDownSearch').click(function() {

if(document.getElementById("searchDropdown").classList.contains('invisible')){
    document.getElementById("searchDropdown").classList.remove('invisible');
     document.getElementById("searchDropdown").classList.add('visible');
     document.getElementById("sortDropdown").classList.remove('visible');
     document.getElementById("sortDropdown").classList.add('invisible');
     document.getElementById("filterDropdown").classList.remove('visible');
     document.getElementById("filterDropdown").classList.add('invisible');

     document.getElementById("ssf-element-container").style.height = "170pt";

 } else  {
       document.getElementById("searchDropdown").classList.remove('visible');
        document.getElementById("searchDropdown").classList.add('invisible');

        document.getElementById("ssf-element-container").style.height = "65pt";

     }
});

/**
 * Dropdown of sortbuttons
 */
$('#dropDownSort').click(function() {

if(document.getElementById("sortDropdown").classList.contains('invisible')){
    document.getElementById("sortDropdown").classList.remove('invisible');
     document.getElementById("sortDropdown").classList.add('visible');
     document.getElementById("searchDropdown").classList.remove('visible');
     document.getElementById("searchDropdown").classList.add('invisible');
     document.getElementById("filterDropdown").classList.remove('visible');
     document.getElementById("filterDropdown").classList.add('invisible');
     document.getElementById("searchList").classList.remove('visible');
     document.getElementById("searchList").classList.add('invisible');
     document.getElementById("searchList").classList.remove('visible');
     document.getElementById("searchList").classList.add('invisible');

     document.getElementById("ssf-element-container").style.height = "120pt";

 } else  {
       document.getElementById("sortDropdown").classList.remove('visible');
        document.getElementById("sortDropdown").classList.add('invisible');

        document.getElementById("ssf-element-container").style.height = "65pt";

     }
});


/**
 * Dropdown of filterbuttons
 */
$('#dropDownFilter').click(function() {

if(document.getElementById("filterDropdown").classList.contains('invisible')){
    document.getElementById("filterDropdown").classList.remove('invisible');
     document.getElementById("filterDropdown").classList.add('visible');
     document.getElementById("searchDropdown").classList.remove('visible');
     document.getElementById("searchDropdown").classList.add('invisible');
     document.getElementById("sortDropdown").classList.remove('visible');
     document.getElementById("sortDropdown").classList.add('invisible');
     document.getElementById("searchList").classList.remove('visible');
     document.getElementById("searchList").classList.add('invisible');

     document.getElementById("ssf-element-container").style.height = "130pt";

 } else  {
       document.getElementById("filterDropdown").classList.remove('visible');
        document.getElementById("filterDropdown").classList.add('invisible');

        document.getElementById("ssf-element-container").style.height = "65pt";

     }
});
