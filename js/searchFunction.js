/**
* Function for searching pubs on the website, which is called when "Search"-button is pressed.
*/
function searchFunction() {

var pubListObjects = ["bulten", "japripps", "wijkanders", "cafec", "basen", "11an", "focus", "fortnox", "gasquen", "gastownospritkoket",
                        "goldeni",  "hubben21", "jarnvagspub", "kajsabaren", "pignwhistle", "rodarummet", "ventren", "winden", "zaloonen"];


// make search suggestion list invisibile
document.getElementById("searchList").classList.add('invisible');

// get search content from search bar
var searchInput = document.getElementById("searchBar");

// make input comparable (everything to upper case and trimmed)
var txt = searchInput.value.toUpperCase();
var txtFilter = txt.replace(/\s+/g, '');

// get names of pubs from the list objects
var textList = document.getElementById("searchList");
var listObjects = textList.getElementsByTagName("li");


for(var i = 0; i < listObjects.length; i++) {

var as = listObjects[i].getElementsByTagName("a")[0];
var textValue = as.textContent || as.innerText;

   // check if the searchbox has content
   if(txtFilter !== "") {

    // compare the content of the search box to the content in the list of pubnames
    if(textValue.toUpperCase().replace(/\s+/g, '').indexOf(txtFilter) > -1) {

    // make pub cards that match visible
    document.getElementById(pubListObjects[i]).classList.remove('invisible');
    document.getElementById(pubListObjects[i]).classList.add('visible');

    // put pub cards in order, so the matching ones are shown first
    document.getElementById(pubListObjects[i]).classList.remove('order-2');
    document.getElementById(pubListObjects[i]).classList.remove('order-3');
    document.getElementById(pubListObjects[i]).classList.remove('order-4');
    document.getElementById(pubListObjects[i]).classList.remove('order-5');
    document.getElementById(pubListObjects[i]).classList.remove('order-6');
    document.getElementById(pubListObjects[i]).classList.remove('order-7');
    document.getElementById(pubListObjects[i]).classList.remove('order-8');
    document.getElementById(pubListObjects[i]).classList.remove('order-9');
    document.getElementById(pubListObjects[i]).classList.remove('order-10');
    document.getElementById(pubListObjects[i]).classList.remove('order-11');
    document.getElementById(pubListObjects[i]).classList.remove('order-12');
    document.getElementById(pubListObjects[i]).classList.remove('order-13');
    document.getElementById(pubListObjects[i]).classList.remove('order-14');
    document.getElementById(pubListObjects[i]).classList.remove('order-15');
    document.getElementById(pubListObjects[i]).classList.remove('order-16');
    document.getElementById(pubListObjects[i]).classList.remove('order-17');
    document.getElementById(pubListObjects[i]).classList.remove('order-18');
    document.getElementById(pubListObjects[i]).classList.remove('order-19');
            
    document.getElementById(pubListObjects[i]).classList.add('order-1');


    // special case, if the e has no acute accent
    } else if(txtFilter.indexOf("CAFE") > -1) {

      // make the pub cards that match condition visible
      document.getElementById(pubListObjects[0]).classList.remove('invisible');
      document.getElementById(pubListObjects[0]).classList.add('visible');

      document.getElementById(pubListObjects[3]).classList.remove('invisible');
      document.getElementById(pubListObjects[3]).classList.add('visible');

      // make all other pub cards invisible
      document.getElementById(pubListObjects[1]).classList.add('invisible');
      document.getElementById(pubListObjects[2]).classList.add('invisible');
      document.getElementById(pubListObjects[4]).classList.add('invisible');
      document.getElementById(pubListObjects[5]).classList.add('invisible');
      document.getElementById(pubListObjects[6]).classList.add('invisible');
      document.getElementById(pubListObjects[7]).classList.add('invisible');
      document.getElementById(pubListObjects[8]).classList.add('invisible');
      document.getElementById(pubListObjects[9]).classList.add('invisible');
      document.getElementById(pubListObjects[10]).classList.add('invisible');
      document.getElementById(pubListObjects[11]).classList.add('invisible');
      document.getElementById(pubListObjects[12]).classList.add('invisible');
      document.getElementById(pubListObjects[13]).classList.add('invisible');
      document.getElementById(pubListObjects[14]).classList.add('invisible');
      document.getElementById(pubListObjects[15]).classList.add('invisible');
      document.getElementById(pubListObjects[16]).classList.add('invisible');
      document.getElementById(pubListObjects[17]).classList.add('invisible');
      document.getElementById(pubListObjects[18]).classList.add('invisible');

      // change order of all pub cards that do not match the condition to last
      for(var m = 0; m < pubListObjects.length; m++) {

         document.getElementById(pubListObjects[m]).classList.remove('order-1');
         document.getElementById(pubListObjects[m]).classList.remove('order-2');
         document.getElementById(pubListObjects[m]).classList.remove('order-3');
         document.getElementById(pubListObjects[m]).classList.remove('order-4');
         document.getElementById(pubListObjects[m]).classList.remove('order-5');
         document.getElementById(pubListObjects[m]).classList.remove('order-6');
         document.getElementById(pubListObjects[m]).classList.remove('order-7');
         document.getElementById(pubListObjects[m]).classList.remove('order-8');
         document.getElementById(pubListObjects[m]).classList.remove('order-9');
         document.getElementById(pubListObjects[m]).classList.remove('order-10');
         document.getElementById(pubListObjects[m]).classList.remove('order-11');
         document.getElementById(pubListObjects[m]).classList.remove('order-12');
         document.getElementById(pubListObjects[m]).classList.remove('order-13');
         document.getElementById(pubListObjects[m]).classList.remove('order-14');
         document.getElementById(pubListObjects[m]).classList.remove('order-15');
         document.getElementById(pubListObjects[m]).classList.remove('order-16');
         document.getElementById(pubListObjects[m]).classList.remove('order-17');
         document.getElementById(pubListObjects[m]).classList.remove('order-18');
         document.getElementById(pubListObjects[m]).classList.remove('order-19');

         document.getElementById(pubListObjects[m]).classList.add('order-19');
      }

      // change the order of pubs that match condition
      document.getElementById(pubListObjects[0]).classList.remove('order-19');
      document.getElementById(pubListObjects[3]).classList.remove('order-19');

      document.getElementById(pubListObjects[0]).classList.add('order-1');
      document.getElementById(pubListObjects[3]).classList.add('order-1');


    // special case, if the J.A. is spelled without dots
    } else if(txtFilter.indexOf("JA") > -1) {

      document.getElementById(pubListObjects[1]).classList.remove('invisible');
      document.getElementById(pubListObjects[1]).classList.add('visible');

      document.getElementById(pubListObjects[0]).classList.add('invisible');
      document.getElementById(pubListObjects[2]).classList.add('invisible');
      document.getElementById(pubListObjects[3]).classList.add('invisible');
      document.getElementById(pubListObjects[4]).classList.add('invisible');
      document.getElementById(pubListObjects[5]).classList.add('invisible');
      document.getElementById(pubListObjects[6]).classList.add('invisible');
      document.getElementById(pubListObjects[7]).classList.add('invisible');
      document.getElementById(pubListObjects[8]).classList.add('invisible');
      document.getElementById(pubListObjects[9]).classList.add('invisible');
      document.getElementById(pubListObjects[10]).classList.add('invisible');
      document.getElementById(pubListObjects[11]).classList.add('invisible');
      document.getElementById(pubListObjects[12]).classList.add('invisible');
      document.getElementById(pubListObjects[13]).classList.add('invisible');
      document.getElementById(pubListObjects[14]).classList.add('invisible');
      document.getElementById(pubListObjects[15]).classList.add('invisible');
      document.getElementById(pubListObjects[16]).classList.add('invisible');
      document.getElementById(pubListObjects[17]).classList.add('invisible');
      document.getElementById(pubListObjects[18]).classList.add('invisible');


      for(var m = 0; m < pubListObjects.length; m++) {

         document.getElementById(pubListObjects[m]).classList.remove('order-1');
         document.getElementById(pubListObjects[m]).classList.remove('order-2');
         document.getElementById(pubListObjects[m]).classList.remove('order-3');
         document.getElementById(pubListObjects[m]).classList.remove('order-4');
         document.getElementById(pubListObjects[m]).classList.remove('order-5');
         document.getElementById(pubListObjects[m]).classList.remove('order-6');
         document.getElementById(pubListObjects[m]).classList.remove('order-7');
         document.getElementById(pubListObjects[m]).classList.remove('order-8');
         document.getElementById(pubListObjects[m]).classList.remove('order-9');
         document.getElementById(pubListObjects[m]).classList.remove('order-10');
         document.getElementById(pubListObjects[m]).classList.remove('order-11');
         document.getElementById(pubListObjects[m]).classList.remove('order-12');
         document.getElementById(pubListObjects[m]).classList.remove('order-13');
         document.getElementById(pubListObjects[m]).classList.remove('order-14');
         document.getElementById(pubListObjects[m]).classList.remove('order-15');
         document.getElementById(pubListObjects[m]).classList.remove('order-16');
         document.getElementById(pubListObjects[m]).classList.remove('order-17');
         document.getElementById(pubListObjects[m]).classList.remove('order-18');
         document.getElementById(pubListObjects[m]).classList.remove('order-19');

         document.getElementById(pubListObjects[m]).classList.add('order-19');
      }

      document.getElementById(pubListObjects[1]).classList.remove('order-19');
      document.getElementById(pubListObjects[1]).classList.add('order-1');



    // special case, if the 11:an has no colon
    } else if(txtFilter.indexOf("11AN") > -1) {

      document.getElementById(pubListObjects[5]).classList.remove('invisible');
      document.getElementById(pubListObjects[5]).classList.add('visible');

      document.getElementById(pubListObjects[0]).classList.add('invisible');
      document.getElementById(pubListObjects[1]).classList.add('invisible');
      document.getElementById(pubListObjects[2]).classList.add('invisible');
      document.getElementById(pubListObjects[3]).classList.add('invisible');
      document.getElementById(pubListObjects[4]).classList.add('invisible');
      document.getElementById(pubListObjects[6]).classList.add('invisible');
      document.getElementById(pubListObjects[7]).classList.add('invisible');
      document.getElementById(pubListObjects[8]).classList.add('invisible');
      document.getElementById(pubListObjects[9]).classList.add('invisible');
      document.getElementById(pubListObjects[10]).classList.add('invisible');
      document.getElementById(pubListObjects[11]).classList.add('invisible');
      document.getElementById(pubListObjects[12]).classList.add('invisible');
      document.getElementById(pubListObjects[13]).classList.add('invisible');
      document.getElementById(pubListObjects[14]).classList.add('invisible');
      document.getElementById(pubListObjects[15]).classList.add('invisible');
      document.getElementById(pubListObjects[16]).classList.add('invisible');
      document.getElementById(pubListObjects[17]).classList.add('invisible');
      document.getElementById(pubListObjects[18]).classList.add('invisible');

      for(var m = 0; m < pubListObjects.length; m++) {

        document.getElementById(pubListObjects[m]).classList.remove('order-1');
        document.getElementById(pubListObjects[m]).classList.remove('order-2');
        document.getElementById(pubListObjects[m]).classList.remove('order-3');
        document.getElementById(pubListObjects[m]).classList.remove('order-4');
        document.getElementById(pubListObjects[m]).classList.remove('order-5');
        document.getElementById(pubListObjects[m]).classList.remove('order-6');
        document.getElementById(pubListObjects[m]).classList.remove('order-7');
        document.getElementById(pubListObjects[m]).classList.remove('order-8');
        document.getElementById(pubListObjects[m]).classList.remove('order-9');
        document.getElementById(pubListObjects[m]).classList.remove('order-10');
        document.getElementById(pubListObjects[m]).classList.remove('order-11');
        document.getElementById(pubListObjects[m]).classList.remove('order-12');
        document.getElementById(pubListObjects[m]).classList.remove('order-13');
        document.getElementById(pubListObjects[m]).classList.remove('order-14');
        document.getElementById(pubListObjects[m]).classList.remove('order-15');
        document.getElementById(pubListObjects[m]).classList.remove('order-16');
        document.getElementById(pubListObjects[m]).classList.remove('order-17');
        document.getElementById(pubListObjects[m]).classList.remove('order-18');
        document.getElementById(pubListObjects[m]).classList.remove('order-19');

        document.getElementById(pubListObjects[m]).classList.add('order-19');

      }

      document.getElementById(pubListObjects[5]).classList.remove('order-19');
      document.getElementById(pubListObjects[5]).classList.add('order-1');


    // special case, if the Pig 'N'... has no apostrophe
    } else if(txtFilter.indexOf("PIGN") > -1) {

      document.getElementById(pubListObjects[14]).classList.remove('invisible');
      document.getElementById(pubListObjects[14]).classList.add('visible');

      document.getElementById(pubListObjects[0]).classList.add('invisible');
      document.getElementById(pubListObjects[1]).classList.add('invisible');
      document.getElementById(pubListObjects[2]).classList.add('invisible');
      document.getElementById(pubListObjects[3]).classList.add('invisible');
      document.getElementById(pubListObjects[4]).classList.add('invisible');
      document.getElementById(pubListObjects[5]).classList.add('invisible');
      document.getElementById(pubListObjects[6]).classList.add('invisible');
      document.getElementById(pubListObjects[7]).classList.add('invisible');
      document.getElementById(pubListObjects[8]).classList.add('invisible');
      document.getElementById(pubListObjects[9]).classList.add('invisible');
      document.getElementById(pubListObjects[10]).classList.add('invisible');
      document.getElementById(pubListObjects[11]).classList.add('invisible');
      document.getElementById(pubListObjects[12]).classList.add('invisible');
      document.getElementById(pubListObjects[13]).classList.add('invisible');
      document.getElementById(pubListObjects[15]).classList.add('invisible');
      document.getElementById(pubListObjects[16]).classList.add('invisible');
      document.getElementById(pubListObjects[17]).classList.add('invisible');
      document.getElementById(pubListObjects[18]).classList.add('invisible');

      for(var m = 0; m < pubListObjects.length; m++) {

       document.getElementById(pubListObjects[m]).classList.remove('order-1');
       document.getElementById(pubListObjects[m]).classList.remove('order-2');
       document.getElementById(pubListObjects[m]).classList.remove('order-3');
       document.getElementById(pubListObjects[m]).classList.remove('order-4');
       document.getElementById(pubListObjects[m]).classList.remove('order-5');
       document.getElementById(pubListObjects[m]).classList.remove('order-6');
       document.getElementById(pubListObjects[m]).classList.remove('order-7');
       document.getElementById(pubListObjects[m]).classList.remove('order-8');
       document.getElementById(pubListObjects[m]).classList.remove('order-9');
       document.getElementById(pubListObjects[m]).classList.remove('order-10');
       document.getElementById(pubListObjects[m]).classList.remove('order-11');
       document.getElementById(pubListObjects[m]).classList.remove('order-12');
       document.getElementById(pubListObjects[m]).classList.remove('order-13');
       document.getElementById(pubListObjects[m]).classList.remove('order-14');
       document.getElementById(pubListObjects[m]).classList.remove('order-15');
       document.getElementById(pubListObjects[m]).classList.remove('order-16');
       document.getElementById(pubListObjects[m]).classList.remove('order-17');
       document.getElementById(pubListObjects[m]).classList.remove('order-18');
       document.getElementById(pubListObjects[m]).classList.remove('order-19');

        document.getElementById(pubListObjects[m]).classList.add('order-19');

        }

        document.getElementById(pubListObjects[14]).classList.remove('order-19');
        document.getElementById(pubListObjects[14]).classList.add('order-1');


    // special case, if the V-Entrén has no hyphen and acute accent
    } else if(txtFilter.indexOf("VEN") > -1) {

          // make the pub cards that match condition visible
          document.getElementById(pubListObjects[16]).classList.remove('invisible');
          document.getElementById(pubListObjects[16]).classList.add('visible');

          // make all other pub cards invisible
          document.getElementById(pubListObjects[0]).classList.add('invisible');
          document.getElementById(pubListObjects[1]).classList.add('invisible');
          document.getElementById(pubListObjects[2]).classList.add('invisible');
          document.getElementById(pubListObjects[3]).classList.add('invisible');
          document.getElementById(pubListObjects[4]).classList.add('invisible');
          document.getElementById(pubListObjects[5]).classList.add('invisible');
          document.getElementById(pubListObjects[6]).classList.add('invisible');
          document.getElementById(pubListObjects[7]).classList.add('invisible');
          document.getElementById(pubListObjects[8]).classList.add('invisible');
          document.getElementById(pubListObjects[9]).classList.add('invisible');
          document.getElementById(pubListObjects[10]).classList.add('invisible');
          document.getElementById(pubListObjects[11]).classList.add('invisible');
          document.getElementById(pubListObjects[12]).classList.add('invisible');
          document.getElementById(pubListObjects[13]).classList.add('invisible');
          document.getElementById(pubListObjects[14]).classList.add('invisible');
          document.getElementById(pubListObjects[15]).classList.add('invisible');
          document.getElementById(pubListObjects[17]).classList.add('invisible');
          document.getElementById(pubListObjects[18]).classList.add('invisible');

          // change order of all pub cards that do not match the condition to last
          for(var m = 0; m < pubListObjects.length; m++) {

             document.getElementById(pubListObjects[m]).classList.remove('order-1');
             document.getElementById(pubListObjects[m]).classList.remove('order-2');
             document.getElementById(pubListObjects[m]).classList.remove('order-3');
             document.getElementById(pubListObjects[m]).classList.remove('order-4');
             document.getElementById(pubListObjects[m]).classList.remove('order-5');
             document.getElementById(pubListObjects[m]).classList.remove('order-6');
             document.getElementById(pubListObjects[m]).classList.remove('order-7');
             document.getElementById(pubListObjects[m]).classList.remove('order-8');
             document.getElementById(pubListObjects[m]).classList.remove('order-9');
             document.getElementById(pubListObjects[m]).classList.remove('order-10');
             document.getElementById(pubListObjects[m]).classList.remove('order-11');
             document.getElementById(pubListObjects[m]).classList.remove('order-12');
             document.getElementById(pubListObjects[m]).classList.remove('order-13');
             document.getElementById(pubListObjects[m]).classList.remove('order-14');
             document.getElementById(pubListObjects[m]).classList.remove('order-15');
             document.getElementById(pubListObjects[m]).classList.remove('order-16');
             document.getElementById(pubListObjects[m]).classList.remove('order-17');
             document.getElementById(pubListObjects[m]).classList.remove('order-18');
             document.getElementById(pubListObjects[m]).classList.remove('order-19');

             document.getElementById(pubListObjects[m]).classList.add('order-19');
          }

          // change the order of pubs that match condition
          document.getElementById(pubListObjects[16]).classList.remove('order-19');
          document.getElementById(pubListObjects[16]).classList.add('order-1');


    // special case, if the Golden-I has no hyphen
    } else if(txtFilter.indexOf("GOLDENI") > -1) {

                // make the pub cards that match condition visible
                document.getElementById(pubListObjects[10]).classList.remove('invisible');
                document.getElementById(pubListObjects[10]).classList.add('visible');

                // make all other pub cards invisible
                document.getElementById(pubListObjects[0]).classList.add('invisible');
                document.getElementById(pubListObjects[1]).classList.add('invisible');
                document.getElementById(pubListObjects[2]).classList.add('invisible');
                document.getElementById(pubListObjects[3]).classList.add('invisible');
                document.getElementById(pubListObjects[4]).classList.add('invisible');
                document.getElementById(pubListObjects[5]).classList.add('invisible');
                document.getElementById(pubListObjects[6]).classList.add('invisible');
                document.getElementById(pubListObjects[7]).classList.add('invisible');
                document.getElementById(pubListObjects[8]).classList.add('invisible');
                document.getElementById(pubListObjects[9]).classList.add('invisible');
                document.getElementById(pubListObjects[11]).classList.add('invisible');
                document.getElementById(pubListObjects[12]).classList.add('invisible');
                document.getElementById(pubListObjects[13]).classList.add('invisible');
                document.getElementById(pubListObjects[14]).classList.add('invisible');
                document.getElementById(pubListObjects[15]).classList.add('invisible');
                document.getElementById(pubListObjects[16]).classList.add('invisible');
                document.getElementById(pubListObjects[17]).classList.add('invisible');
                document.getElementById(pubListObjects[18]).classList.add('invisible');

                // change order of all pub cards that do not match the condition to last
                for(var m = 0; m < pubListObjects.length; m++) {

                   document.getElementById(pubListObjects[m]).classList.remove('order-1');
                   document.getElementById(pubListObjects[m]).classList.remove('order-2');
                   document.getElementById(pubListObjects[m]).classList.remove('order-3');
                   document.getElementById(pubListObjects[m]).classList.remove('order-4');
                   document.getElementById(pubListObjects[m]).classList.remove('order-5');
                   document.getElementById(pubListObjects[m]).classList.remove('order-6');
                   document.getElementById(pubListObjects[m]).classList.remove('order-7');
                   document.getElementById(pubListObjects[m]).classList.remove('order-8');
                   document.getElementById(pubListObjects[m]).classList.remove('order-9');
                   document.getElementById(pubListObjects[m]).classList.remove('order-10');
                   document.getElementById(pubListObjects[m]).classList.remove('order-11');
                   document.getElementById(pubListObjects[m]).classList.remove('order-12');
                   document.getElementById(pubListObjects[m]).classList.remove('order-13');
                   document.getElementById(pubListObjects[m]).classList.remove('order-14');
                   document.getElementById(pubListObjects[m]).classList.remove('order-15');
                   document.getElementById(pubListObjects[m]).classList.remove('order-16');
                   document.getElementById(pubListObjects[m]).classList.remove('order-17');
                   document.getElementById(pubListObjects[m]).classList.remove('order-18');
                   document.getElementById(pubListObjects[m]).classList.remove('order-19');

                   document.getElementById(pubListObjects[m]).classList.add('order-19');
                }

                // change the order of pubs that match condition
                document.getElementById(pubListObjects[10]).classList.remove('order-19');
                document.getElementById(pubListObjects[10]).classList.add('order-1');

    // if pub card does not match, make it invisible and move it to last position
    } else {

      document.getElementById(pubListObjects[i]).classList.remove('visible');
      document.getElementById(pubListObjects[i]).classList.add('invisible');

      document.getElementById(pubListObjects[i]).classList.remove('order-1');
      document.getElementById(pubListObjects[i]).classList.remove('order-2');
      document.getElementById(pubListObjects[i]).classList.remove('order-3');
      document.getElementById(pubListObjects[i]).classList.remove('order-4');
      document.getElementById(pubListObjects[i]).classList.remove('order-5');
      document.getElementById(pubListObjects[i]).classList.remove('order-6');
      document.getElementById(pubListObjects[i]).classList.remove('order-7');
      document.getElementById(pubListObjects[i]).classList.remove('order-8');
      document.getElementById(pubListObjects[i]).classList.remove('order-9');
      document.getElementById(pubListObjects[i]).classList.remove('order-10');
      document.getElementById(pubListObjects[i]).classList.remove('order-11');
      document.getElementById(pubListObjects[i]).classList.remove('order-12');
      document.getElementById(pubListObjects[i]).classList.remove('order-13');
      document.getElementById(pubListObjects[i]).classList.remove('order-14');
      document.getElementById(pubListObjects[i]).classList.remove('order-15');
      document.getElementById(pubListObjects[i]).classList.remove('order-16');
      document.getElementById(pubListObjects[i]).classList.remove('order-17');
      document.getElementById(pubListObjects[i]).classList.remove('order-18');
      document.getElementById(pubListObjects[i]).classList.add('order-19');

   }


   // make all pub cards invisible if the search is empty
   } else {

        for (var j = 0; j < pubListObjects.length; j++) {
        document.getElementById(pubListObjects[j]).classList.remove('visible');
        document.getElementById(pubListObjects[j]).classList.add('invisible');

        }

   }

 }

}

