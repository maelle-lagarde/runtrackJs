function showhide() {
    let articleElement = document.getElementById("article");
    let buttonElement = document.getElementById("button");

    if (articleElement.style.display === "none") {
        articleElement.style.display = "block";
        buttonElement.textContent = "Cacher la citation";
    } else {
        articleElement.style.display = "none";
        buttonElement.textContent = "Afficher la citation";
    }
}