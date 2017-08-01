var button = $('.btn');

button.click(function () {
    var spaces = $(this).text();
    var amount = $("#" + spaces);
    var spacesAvailable;

    if (this.className == "btn btn-primary") {
        spacesAvailable = amount.text() - 1;
        amount.text(spacesAvailable);
        this.className = "btn btn-danger";
    } else {
        spacesAvailable = amount.text() + 1;
        amount.text(spacesAvailable);
        this.className = "btn btn-primary";
    }
});
