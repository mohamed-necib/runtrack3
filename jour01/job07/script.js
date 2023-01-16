
function jourtravaille(param1, param2, param3) {
  let date = new Date(param1, param2, param3);
  let jour = date.getDate();
  const options = { month: "long" };
  let mois = date.getMonth();
  let annee = date.getFullYear(4);
  let jourSemaine = date.getDay();
  let joursFeries = [
    "1/1/2022",
    "18/4/2022",
    "1/5/2022",
    "26/5/2022",
    "6/6/2022",
    "14/7/2022",
    "15/8/2022",
    "1/11/2022",
    "11/11/2022",
    "25/12/2022",
  ];
  
  let dateFerie = jour + "/" + mois + "/" + annee;
  // On check si le jour est un jour férié en parcourant notre tableau de jours fériés return true si c'est le cas
  if (joursFeries.includes(dateFerie)) {
    console.log("Le " + jour + " " + mois + " " + annee + " est un jour férié");
  } else if (jourSemaine == 6 || jourSemaine == 0) {
    console.log("Non, le " + jour + " " + mois + " " + annee + " est un week-end");
  } else {
    console.log(
      "Oui, " + jour + " " + mois + " " + annee + " est un jour travaillé"
    );
  }
}

jourtravaille();
