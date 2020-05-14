// Hack for creating "enums" in JavaScript
const ColorIndex = {GREEN: 1, YELLOW: 2, RED: 3, CLOSED: 4};
Object.freeze(ColorIndex);


/**
 * Changes the color using number 1 to 3 of the object with given id.
 *
 * @param id - the pub id
 * @param colorIndex
 */
function changeQueueColour(id, colorIndex) {
     if(colorIndex == ColorIndex.GREEN) {
            document.getElementById(id).classList.remove('pub-closed');
            document.getElementById(id).classList.remove('long-queue');
            document.getElementById(id).classList.remove('medium-queue');
            document.getElementById(id).classList.add('short-queue');
     } else if(colorIndex == ColorIndex.YELLOW) {
            document.getElementById(id).classList.remove('pub-closed');
            document.getElementById(id).classList.remove('long-queue');
            document.getElementById(id).classList.add('medium-queue');
            document.getElementById(id).classList.remove('short-queue');
     } else if(colorIndex == ColorIndex.RED) {
            document.getElementById(id).classList.remove('pub-closed');
            document.getElementById(id).classList.add('long-queue');
            document.getElementById(id).classList.remove('medium-queue');
            document.getElementById(id).classList.remove('short-queue');
     }
}
