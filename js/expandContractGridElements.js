/**
 * Expands the grid element when clicked, and contracts it when clicked again.
 */

var conElems = document.getElementsByClassName("grid-element-contracted-info");
var elems = document.getElementsByClassName("grid-element");
var expInd = document.getElementsByClassName("grid-element-expand-indicator");

//document.getElementById("help").style.height = "325pt";
//document.getElementById("help-expand-indicator").innerHTML = "keyboard_arrow_up";

for (let i = 0; i < conElems.length; i++) {
  conElems[i].addEventListener("click", function() {
    this.classList.toggle("active");

    // Gets the index of the grid element that was clicked.
    var index = $(this).parent().index();

    if (elems[index].style.height !== "370pt"){
        elems[index].style.height = "370pt";
        elems[index].style.opacity = "100%";
        expInd[index].innerHTML = "keyboard_arrow_up";
    } else {
        elems[index].style.height = "100pt";
        elems[index].style.opacity = "80%";
        expInd[index].innerHTML = "keyboard_arrow_down";
    } 
  });
}