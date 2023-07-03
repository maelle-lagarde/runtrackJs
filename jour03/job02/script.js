$(document).ready(function() {
    let imageContainer = $("#imageContainer");

    $("#shuffleButton").click(function() {
        let elements = imageContainer.children();

        while (elements.length) {
            imageContainer.append(elements.splice(Math.floor(Math.random() * elements.length), 1)[0]);
        }
    });

    $("#resetButton").click(function() {
        let elements = imageContainer.children().get();
        elements.sort(function(a, b) {
            return a.alt.localeCompare(b.alt);
        });

        imageContainer.empty().append(elements);
    });

    imageContainer.on("click", function() {
        let images = $(this).find("img");
        let correctOrder = true;

        images.each(function(index) {
            if ($(this).attr("alt") !== "Image " + (index + 1)) {
                correctOrder = false;
                return false; // Exit the loop
            }
        });

        let message = $("#message");
        message.text(correctOrder ? "Vous avez gagné" : "Vous avez perdu");
        message.css("color", correctOrder ? "green" : "red");
    });
});