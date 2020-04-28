
   //Changes color on the queue length indicator.
    function changeQueueColour(x) {

        if(x == 3) {

            document.getElementById("gasquen").classList.add('long-queue');
            document.getElementById("gasquen").classList.remove('medium-queue');
            document.getElementById("gasquen").classList.remove('short-queue');

        } else if(x == 2) {

            document.getElementById("gasquen").classList.remove('long-queue');
            document.getElementById("gasquen").classList.add('medium-queue');
            document.getElementById("gasquen").classList.remove('short-queue');

        } else if(x == 1) {

            document.getElementById("gasquen").classList.remove('long-queue');
            document.getElementById("gasquen").classList.remove('medium-queue');
            document.getElementById("gasquen").classList.add('short-queue');
        }
    }

   // changeQueueColour(3,"gasquen");
