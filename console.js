
$(function () {
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
});
