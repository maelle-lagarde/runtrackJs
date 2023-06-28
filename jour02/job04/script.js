let textareaElement = document.getElementById("keylogger");

document.addEventListener("keydown", function (event) {
    let keyPressed = event.key.toLowerCase();

    if (keyPressed.match(/[a-z]/)) {
        if (document.activeElement === textareaElement) {
            textareaElement.value += keyPressed;
        } else {
            textareaElement.value += keyPressed;
        }
    }
});