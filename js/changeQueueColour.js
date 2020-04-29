/**
 * Changes the color using number 1 to 3 of the object with given id.
 * @param {string} id
 * @param {Int} color
 */
function changeQueueColour(id, color) {


     if(color == 1) {

            document.getElementById(id).classList.remove('pub-closed');
            document.getElementById(id).classList.remove('long-queue');
            document.getElementById(id).classList.remove('medium-queue');
            document.getElementById(id).classList.add('short-queue');

     } else if(color == 2) {

            document.getElementById(id).classList.remove('pub-closed');
            document.getElementById(id).classList.remove('long-queue');
            document.getElementById(id).classList.add('medium-queue');
            document.getElementById(id).classList.remove('short-queue');

     } else if(color == 3) {

            document.getElementById(id).classList.remove('pub-closed');
            document.getElementById(id).classList.add('long-queue');
            document.getElementById(id).classList.remove('medium-queue');
            document.getElementById(id).classList.remove('short-queue');
     }


}
