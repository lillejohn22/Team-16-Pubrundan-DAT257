
   //Changes color on the queue length indicator.
    function changeQueueColour(x) {

        if(x == 3) {

            document.getElementById("bulten").classList.add('long-queue');
            document.getElementById("bulten").classList.remove('medium-queue');
            document.getElementById("bulten").classList.remove('short-queue');

        } else if(x == 2) {

            document.getElementById("bulten").classList.remove('long-queue');
            document.getElementById("bulten").classList.add('medium-queue');
            document.getElementById("bulten").classList.remove('short-queue');

        } else if(x == 1) {

            document.getElementById("bulten").classList.remove('long-queue');
            document.getElementById("bulten").classList.remove('medium-queue');
            document.getElementById("bulten").classList.add('short-queue');
        }
    }

   // changeQueueColour(3,"gasquen");
