function bisextile(annee) {
    if ((annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

let annee = 2023;
let estBissextile = bisextile(annee);
console.log(estBissextile);