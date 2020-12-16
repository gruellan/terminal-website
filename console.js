var files = {
    "about.txt": "hello this is about",
    "contact.txt": "find me on:<br><a href='https://www.github.com/gruellan'>github</a><br><a href='https://www.twitter.com/georgeruellan'>twitter</a><br><a href='https://www.linkedin.com/in/georgeruellan/'>linkedin</a><br><br><a href='mailto:ruellan.george@gmail.com'>email: ruellan.george@gmail.com</a>",
    "yeet.txt": "yote"
}

$(function () {
    // Type out the welcome lines
    $("#firstline").typed({
        strings: ["cat welcome.txt"],
        typeSpeed: 1,
        onStringTyped: () => {
            $("#welcome").typed({
                strings: ["welcome to george's terminal. here you can do cool stuff.<br>type ls or something"],
                typeSpeed: 1,
                onStringTyped: () => {
                    $("#prompt").typed({
                        strings: ["george@ruellan ~ $ "],
                        typeSpeed: 1,
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
        var cmd = command.split(" ");
        contents = "no file with this name exists"

        // Get file names and contents
        for (var key in files) {
            if (key == cmd[1])
                contents = files[key]
        }
        if (command == "ls") {
            var filenames = [".", "..", "about.txt", "contact.txt", "yeet.txt"]
            filenames.forEach(item => $("#container").append("<p>rwxr-xr-x george george jan 15 16:43 " + item + " </p>"));
        }
        else if (cmd[0] === "cat") {
            $("#container").append("<p>" + contents + "</p>")

        } else {
            $("#container").append("<p>" + "command not valid. please try again" + "</p>")
        }
        // Remove id from old input and add it to new input line
        $("#input").removeAttr('id');
        $("#container").append('<p><span class="prompt" id="prompt">george@ruellan ~ $ </span><input id="input" autofocus></input></p>');
        // Refocus on the new input
        $("#input").focus();
    }

    // Always have the terminal focused
    $("body").click(function () {
        $("#input").focus();
    })
});
