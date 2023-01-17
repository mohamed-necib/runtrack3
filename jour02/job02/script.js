// Créez une balise <button> ayant comme id “button”.
// Lorsque l’on clique dessus, un <article> contenant le texte suivant est ajouté au contenu
// de la page : “L'important n'est pas la chute, mais l'atterrissage.”
// Si on clique à nouveau sur ce bouton, l’article disparaît.
// L’apparition / Disparition doivent être gérées dans une fonction nommée “showhide()”.

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("#button");
  const article = document.createElement("article");
  const text = document.createTextNode(
    "L'important n'est pas la chute, mais l'atterrissage."
  );
  article.appendChild(text);
  document.body.appendChild(article);
  article.style.display = "none";

  function showhide() {
    if (article.style.display === "none") {
      article.style.display = "block";
    } else {
      article.style.display = "none";
      text.innerHTML = "";
    }
  }

  button.addEventListener("click", () => {
    showhide();
  });
});
