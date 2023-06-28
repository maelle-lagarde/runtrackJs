function konami() {
    let konamiCodePosition = [];
    let konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

    function checkCode() {
        if (konamiCodePosition.toString() === konamiCode.toString()) {
            document.body.style.background = '#EBBF52';
            document.getElementById("title").style.color = "#EBBF52";

        }
        konamiCodePosition = [];
    }

    document.addEventListener('keydown', function (event) {
        konamiCodePosition.push(event.keyCode);

        if (konamiCodePosition.length === konamiCode.length) {
            console.log("konami code entered");
                checkCode();
        }
    });
}

konami();