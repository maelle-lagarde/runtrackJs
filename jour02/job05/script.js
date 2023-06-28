window.addEventListener("scroll", function() {
    let windowHeight = window.innerHeight;
    let documentHeight = document.documentElement.scrollHeight;
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
    let footer = document.querySelector("footer");

    footer.style.backgroundColor = "hsl(" + scrollPercentage + ", 100%, 50%)";
});