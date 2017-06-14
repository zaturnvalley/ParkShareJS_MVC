$(document).ready(function() {
    var button = $('.btn');
    button.text('Open');

    button.click(function () {
        var specificSpot = this.id;
        toggleSpot(specificSpot);
    })

    function toggleSpot(num) {
        // Get name
        var name = $('#input').val()
        // Get spot
        var idNumber = "#" + num;
        var spot = $(idNumber);

        // Display Avail or not
        if (spot.text() === 'Open') {
            if (name === "") {
                spot.text('Enter a Name');
            } else {
                spot.text('Taken by ' + name);
            }
        } else if (spot.text() !== 'Open') {
            spot.text('Open');
        }
        spot.toggleClass('btn-primary btn-danger');
    }
})();
