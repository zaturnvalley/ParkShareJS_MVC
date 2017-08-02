$(document).ready(function () {
    var button = $('.btn');
    var leftArr = $('#larr');
    var rightArr = $('#rarr');
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var month = $('#month');
    var thisMonth = 0;
    month.html(months[thisMonth]);

    rightArr.click(function () {
        if (thisMonth == 11) {
            thisMonth = 0;
        } else {
            thisMonth++;
        }
        month.html(months[thisMonth]);
        this.className = 'btn btn-warning';
    });

    leftArr.click(function () {
        if (thisMonth == 0) {
            thisMonth = 11;
        } else {
            thisMonth--;
        }
        month.html(months[thisMonth]);
        this.className = 'btn btn-warning';
    });

    button.click(function () {
        var spaces = $(this).html();
        var amount = $("#" + spaces);
        var amountInt = parseInt(amount.html());

        if (this.className == "btn btn-primary") {
            amountInt--;
            amount.html(amountInt);
            this.className = "btn btn-danger";
        } else {
            amountInt++;
            amount.html(amountInt);
            this.className = "btn btn-primary";
        }
    });
});