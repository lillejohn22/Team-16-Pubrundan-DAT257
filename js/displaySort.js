

  let pubSortList = $("#container .col-sm-6 col-lg-6 col-xl-3 grid-element").map(function(){
        return this.id;
        }).get();

        $('#alpha').on('click', function() {
        var alphabeticalOrder = sortFunction(pubSortList, alpha);
        $("#container").html(alphabeticalOrder);
        });

        //    <script src="js/displaySort.js"></script>

        //     <div class="boxi" id="b">