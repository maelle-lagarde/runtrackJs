function jourtravaille(date) {
    let jour = date.getDate();
    let mois = date.getMonth();
    let annee = date.getFullYear();

    let joursFeries2020 = [
        "01-01-2020",
        "13-04-2020",
        "01-05-2020",
        "08-05-2020",
        "21-05-2020",
        "01-06-2020",
        "14-07-2020",
        "15-08-2020",
        "01-11-2020",
        "11-11-2020",
        "25-12-2020"
    ];

    let jourSemaine = date.getDay();
    let estFerie = joursFeries2020.includes(date.toString().slice(0, 10));

    if (estFerie) {
        console.log("Le " + jour + "-" + mois + "-" + annee + " est un jour férié.");
    } else if (jourSemaine === 0 || jourSemaine === 6) {
        console.log("Non, le " + jour + "-" + mois + "-" + annee + " est un week-end.");
    } else {
        console.log("Oui, le " + jour + "-" + mois + "-" + annee + " est un jour travaillé.");
    }
}

let date1 = new Date("01-01-2020");
jourtravaille(date1);

let date2 = new Date("02-12-2020");
jourtravaille(date2);