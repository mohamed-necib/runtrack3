document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("#button");
  
// La fonction de récupération et d’affichage doit se nommer “citation()”.
  function citation() {
    const citation = document.querySelector("#citation").innerHTML;
    console.log(citation);
  }

// Créez un <button> ayant comme id “button”. Lorsque l’on clique sur le bouton,
// récupérez le contenu de l’élément ayant comme id “citation” et affichez le contenu dans
// la console de développement.
  button.addEventListener("click", () => {
    citation();
  });
});
