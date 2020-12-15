
$(function () {
    // Type out the welcome lines
    $("#firstline").typed({
        strings: ["cat welcome.txt"],
        typeSpeed: 10,
        onStringTyped: () => {
            $("#welcome").typed({
                strings: ["welcome to george's terminal. here you can do cool stuff.<br>type ls or something"],
                typeSpeed: 10,
                onStringTyped: () => {
                    $("#prompt").typed({
                        strings: ["george@ruellan ~ $ "],
                        typeSpeed: 10,
                    });
                },
            })
        }
    });

    // Handle command when enter key pressed
    $(document).keypress(function (e) {
        if (e.which == 13) {
            var command = $("#input").val();
            handleCommand(command);
        }
    });

    function handleCommand(command) {
        if (command == "ls") {
            var line = "welcome.txt about.txt yeet.txt";
            $("#container").append("<p>" + line + "</p>")
            
            // Remove id from old input and add it to new input line
            $("#input").removeAttr('id');
            $("#container").append('<p><span class="prompt" id="prompt">george@ruellan ~ $ </span><input id="input" autofocus></input></p>');
            
            // Refocus on the new input
            $("#input").focus();
        } else {
            alert("nope chuck testa")
        }
    }

    // Always have the terminal focused
    $("body").click(function () {
        $("#input").focus();
    })
});
