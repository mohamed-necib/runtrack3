// Créez une balise <button> ayant comme id “button”.
// Créez une balise <p> ayant comme id “compteur” et contenant “0”.
// Ce contenu doit évoluer proportionnellement au nombre d'événements click reçu par le bouton
// ATTENTION : Vous ne devez pas utiliser “onclick()” dans votre html.
// La fonction permettant d’effectuer la modification doit s'appeler “addone()”.

document.addEventListener('DOMContentLoaded', function() {

  const button = document.getElementById('btn');
  const compteur = document.getElementById('compteur');

  function addone() {
    compteur.innerHTML++;
  };

  button.addEventListener('click', () => {
    addone()
  });







});