function sommenombrepremiers(nombre1, nombre2) {
    if(estPremier(nombre1) && estPremier(nombre2)) {
        return nombre1 + nombre2;
    } else {
        return false;
    }
}

function estPremier(nombre) {
    if (nombre < 2) {
        return false;
    } for (let i = 2; i <= Math.sqrt(nombre); i++) {
        if (nombre % i === 0) {
            return false;
        }
    } return true;
}

console.log(sommenombrepremiers(2, 3)); // return 5.
console.log(sommenombrepremiers(4, 5)); // return false.