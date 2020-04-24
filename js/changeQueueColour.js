
    function changeQueueColour(x) {

        if((x == 3)) {

        document.getElementById("circle-1").style.backgroundColor = "red";
        document.getElementById("circle-2").style.backgroundColor = "black";
        document.getElementById("circle-3").style.backgroundColor = "black";

        } else if((x == 2)) {

        document.getElementById("circle-2").style.backgroundColor = "yellow";
        document.getElementById("circle-1").style.backgroundColor = "black";
        document.getElementById("circle-3").style.backgroundColor = "black";
        } else if((x == 1)) {

        document.getElementById("circle-3").style.backgroundColor = "green";
        document.getElementById("circle-2").style.backgroundColor = "black";
            document.getElementById("circle-1").style.backgroundColor = "black";
        }

    }

   // changeQueueColour(queueValue);
    //changeQueueColour(2);