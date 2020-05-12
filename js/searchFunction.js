
function searchFunction() {

//alert("button clicked");

//lägga till för cafe och ja hos google search grejer
// kanske ändra namn i index på sökfunktionen

var pubListObjects = ["bulten", "japripps", "wijkanders", "cafec", "basen", "11an", "focus", "fortnox", "gasquen", "gastownospritkoket",
                        "goldeni",  "hubben21", "jarnvagspub", "kajsabaren", "pignwhistle", "rodarummet", "ventren", "winden", "zaloonen"];


document.getElementById("searchList").classList.add('invisible');


var searchInput = document.getElementById("searchBar");

var txtFilter = searchInput.value.toUpperCase();

//var newArr = [];
//alert(searchInput.value.toString());

var textList = document.getElementById("searchList");
var listObjects = textList.getElementsByTagName("li");


for(var i = 0; i < listObjects.length; i++) {

var as = listObjects[i].getElementsByTagName("a")[0];

var textValue = as.textContent || as.innerText; // || as.innerText

   if(txtFilter !== "") {
    if(textValue.toUpperCase().indexOf(txtFilter) > -1) {

    document.getElementById(pubListObjects[i]).classList.remove('invisible');
    document.getElementById(pubListObjects[i]).classList.add('visible');

       // newArr[newArr.length] = pubListObjects[i];

      //  alert(newArr.length);

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


    } else if(txtFilter.indexOf("CAFE") > -1) {

    //alert("yes");

      document.getElementById(pubListObjects[0]).classList.remove('invisible');
        document.getElementById(pubListObjects[0]).classList.add('visible');

          document.getElementById(pubListObjects[3]).classList.remove('invisible');
            document.getElementById(pubListObjects[3]).classList.add('visible');

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



                        document.getElementById(pubListObjects[0]).classList.remove('order-19');
                        document.getElementById(pubListObjects[3]).classList.remove('order-19');

            document.getElementById(pubListObjects[0]).classList.add('order-1');
            document.getElementById(pubListObjects[3]).classList.add('order-1');



    } else if(txtFilter.indexOf("JA") > -1) {

          //alert("yes");

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




          } else {

   document.getElementById(pubListObjects[i]).classList.remove('visible');
   document.getElementById(pubListObjects[i]).classList.add('invisible');

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
               document.getElementById(pubListObjects[i]).classList.remove('order-1');
                document.getElementById(pubListObjects[i]).classList.add('order-19');

   }



   } else {
        for (var j = 0; j < pubListObjects.length; j++) {

        document.getElementById(pubListObjects[j]).classList.remove('visible');
        document.getElementById(pubListObjects[j]).classList.add('invisible');

        }

   }



}


}



/*

   document.getElementById(pubListObjects[3]).classList.remove('order-1');
                        document.getElementById(pubListObjects[3]).classList.remove('order-2');
                        document.getElementById(pubListObjects[3]).classList.remove('order-3');
                        document.getElementById(pubListObjects[3]).classList.remove('order-4');
                        document.getElementById(pubListObjects[3]).classList.remove('order-5');
                        document.getElementById(pubListObjects[3]).classList.remove('order-6');
                        document.getElementById(pubListObjects[3]).classList.remove('order-7');
                        document.getElementById(pubListObjects[3]).classList.remove('order-8');
                        document.getElementById(pubListObjects[3]).classList.remove('order-9');
                        document.getElementById(pubListObjects[3]).classList.remove('order-10');
                        document.getElementById(pubListObjects[3]).classList.remove('order-11');
                        document.getElementById(pubListObjects[3]).classList.remove('order-12');
                        document.getElementById(pubListObjects[3]).classList.remove('order-13');
                        document.getElementById(pubListObjects[3]).classList.remove('order-14');
                        document.getElementById(pubListObjects[3]).classList.remove('order-15');
                        document.getElementById(pubListObjects[3]).classList.remove('order-16');
                        document.getElementById(pubListObjects[3]).classList.remove('order-17');
                        document.getElementById(pubListObjects[3]).classList.remove('order-18');

document.getElementById(pubListObjects[0]).classList.remove('order-1');
                        document.getElementById(pubListObjects[0]).classList.remove('order-2');
                        document.getElementById(pubListObjects[0]).classList.remove('order-3');
                        document.getElementById(pubListObjects[0]).classList.remove('order-4');
                        document.getElementById(pubListObjects[0]).classList.remove('order-5');
                        document.getElementById(pubListObjects[0]).classList.remove('order-6');
                        document.getElementById(pubListObjects[0]).classList.remove('order-7');
                        document.getElementById(pubListObjects[0]).classList.remove('order-8');
                        document.getElementById(pubListObjects[0]).classList.remove('order-9');
                        document.getElementById(pubListObjects[0]).classList.remove('order-10');
                        document.getElementById(pubListObjects[0]).classList.remove('order-11');
                        document.getElementById(pubListObjects[0]).classList.remove('order-12');
                        document.getElementById(pubListObjects[0]).classList.remove('order-13');
                        document.getElementById(pubListObjects[0]).classList.remove('order-14');
                        document.getElementById(pubListObjects[0]).classList.remove('order-15');
                        document.getElementById(pubListObjects[0]).classList.remove('order-16');
                        document.getElementById(pubListObjects[0]).classList.remove('order-17');
                        document.getElementById(pubListObjects[0]).classList.remove('order-18');


                          document.getElementById(pubListObjects[1]).classList.remove('order-1');
                          document.getElementById(pubListObjects[1]).classList.remove('order-2');
                          document.getElementById(pubListObjects[1]).classList.remove('order-3');
                          document.getElementById(pubListObjects[1]).classList.remove('order-4');
                          document.getElementById(pubListObjects[1]).classList.remove('order-5');
                          document.getElementById(pubListObjects[1]).classList.remove('order-6');
                          document.getElementById(pubListObjects[1]).classList.remove('order-7');
                          document.getElementById(pubListObjects[1]).classList.remove('order-8');
                          document.getElementById(pubListObjects[1]).classList.remove('order-9');
                          document.getElementById(pubListObjects[1]).classList.remove('order-10');
                          document.getElementById(pubListObjects[1]).classList.remove('order-11');
                          document.getElementById(pubListObjects[1]).classList.remove('order-12');
                          document.getElementById(pubListObjects[1]).classList.remove('order-13');
                          document.getElementById(pubListObjects[1]).classList.remove('order-14');
                          document.getElementById(pubListObjects[1]).classList.remove('order-15');
                          document.getElementById(pubListObjects[1]).classList.remove('order-16');
                          document.getElementById(pubListObjects[1]).classList.remove('order-17');
                          document.getElementById(pubListObjects[1]).classList.remove('order-18');
                          document.getElementById(pubListObjects[1]).classList.remove('order-19');

                          document.getElementById(pubListObjects[0]).classList.remove('order-1');

if(newArr.length > 0) {

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


        for(var k = 0; k < newArr.length; k++) {

           // document.getElementById(pubListObjects[i]).classList.add('order-1');

           // alert("here");


                    document.getElementById(pubListObjects[k]).classList.remove('order-1');
                    document.getElementById(pubListObjects[k]).classList.remove('order-2');
                    document.getElementById(pubListObjects[k]).classList.remove('order-3');
                    document.getElementById(pubListObjects[k]).classList.remove('order-4');
                    document.getElementById(pubListObjects[k]).classList.remove('order-5');
                    document.getElementById(pubListObjects[k]).classList.remove('order-6');
                    document.getElementById(pubListObjects[k]).classList.remove('order-7');
                    document.getElementById(pubListObjects[k]).classList.remove('order-8');
                    document.getElementById(pubListObjects[k]).classList.remove('order-9');
                    document.getElementById(pubListObjects[k]).classList.remove('order-10');
                    document.getElementById(pubListObjects[k]).classList.remove('order-11');
                    document.getElementById(pubListObjects[k]).classList.remove('order-12');
                    document.getElementById(pubListObjects[k]).classList.remove('order-13');
                    document.getElementById(pubListObjects[k]).classList.remove('order-14');
                    document.getElementById(pubListObjects[k]).classList.remove('order-15');
                    document.getElementById(pubListObjects[k]).classList.remove('order-16');
                    document.getElementById(pubListObjects[k]).classList.remove('order-17');
                    document.getElementById(pubListObjects[k]).classList.remove('order-18');
                    document.getElementById(pubListObjects[k]).classList.remove('order-19');


//muss wieder publistobjects sein
           switch (k) {
                      case 0:
                          document.getElementById(newArr[k]).classList.add('order-1');
                          break;
                      case 1:
                          document.getElementById(newArr[k]).classList.add('order-2');
                          break;
                      case 2:
                          document.getElementById(newArr[k]).classList.add('order-3');
                          break;
                      case 3:
                          document.getElementById(newArr[k]).classList.add('order-4');
                          break;
                      case 4:
                          document.getElementById(newArr[k]).classList.add('order-5');
                          break;
                      case 5:
                          document.getElementById(newArr[k]).classList.add('order-6');
                          break;
                      case 6:
                          document.getElementById(newArr[k]).classList.add('order-7');
                          break;
                      case 7:
                          document.getElementById(newArr[k]).classList.add('order-8');
                          break;
                      case 8:
                          document.getElementById(newArr[k]).classList.add('order-9');
                          break;
                      case 9:
                          document.getElementById(newArr[k]).classList.add('order-10');
                          break;
                      case 10:
                          document.getElementById(newArr[k]).classList.add('order-11');
                          break;
                      case 11:
                          document.getElementById(newArr[k]).classList.add('order-12');
                          break;
                      case 12:
                          document.getElementById(newArr[k]).classList.add('order-13');
                          break;
                      case 13:
                          document.getElementById(newArr[k]).classList.add('order-14');
                          break;
                      case 14:
                          document.getElementById(newArr[k]).classList.add('order-15');
                          break;
                      case 15:
                          document.getElementById(newArr[k]).classList.add('order-16');
                          break;
                      case 16:
                          document.getElementById(newArr[k]).classList.add('order-17');
                          break;
                      case 17:
                          document.getElementById(newArr[k]).classList.add('order-18');
                          break;
                      case 18:
                          document.getElementById(newArr[k]).classList.add('order-19');
                          break;
                      default:
                          alert(pubListObjects);
                  }


           }


           newArr.length = 0;

           }

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
        document.getElementById(pubListObjects[i]).classList.remove('order-19');


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
}




*/



//    <script src="../js/searchFunction.js"></script>

//alert("hello");

/*

var input, filter, ul, li, a, i, txtValue;

input = document.getElementById("searchBar"); //.value

filter= input.value.toUpperCase();
ul = document.getElementById("searchList");
li = ul.getElementsByTagName("li");

for(i = 0; i < li.length; i++) {

a = li[i].getElementsByTagName("a")[0];
txtValue = a.textContent || a.innerText;

    if(txtValue.toUpperCase().indexOf(filter) > -1) {

    li[i].style.display = "";

    } else {

    li[i].style.display = "none";

    }

}

*/