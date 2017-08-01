$(document).ready(function () {
    var button = $('.btn');

    button.click(function () {
        console.log('click')
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