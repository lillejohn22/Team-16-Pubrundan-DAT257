
   //Changes color on the queue length indicator.
    function changeQueueColour(x, id) {

        if(x == 3) {

            document.getElementById(id).classList.add('long-queue');
            document.getElementById(id).classList.remove('medium-queue');
            document.getElementById(id).classList.remove('short-queue');

        } else if(x == 2) {

            document.getElementById(id).classList.remove('long-queue');
            document.getElementById(id).classList.add('medium-queue');
            document.getElementById(id).classList.remove('short-queue');

        } else if(x == 1) {

            document.getElementById(id).classList.remove('long-queue');
            document.getElementById(id).classList.remove('medium-queue');
            document.getElementById(id).classList.add('short-queue');
        }
    }

    changeQueueColour(3,"gasquen");
