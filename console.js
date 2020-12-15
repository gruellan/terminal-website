
$(function () {
    // term = $("#console");
    // term.text("george@ruellan ~ $ ");

    // Typing animation
    $("[data-typer]").attr("data-typer", function (i, txt) {
        var $typer = $(this), char = 0;
        (function typeIt() {
            if (char > txt.length) return;
            $typer.text(txt.substring(0, char++));
            setTimeout(typeIt, 50);
        }());
    });
});
