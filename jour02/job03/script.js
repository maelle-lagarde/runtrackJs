let compteur = 0;
function addone() {
    compteur++;
    document.getElementById("compteur").textContent = compteur;
}

let buttonElement = document.getElementById("button");
buttonElement.addEventListener("click", addone);