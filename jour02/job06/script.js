// Par défaut, votre index.php n’a pas de contenu.
// Lorsqu’un utilisateur effectue un code konami, la page devient stylisée, aux couleurs de La Plateforme_.

document.addEventListener("DOMContentLoaded", () => {

  let body = document.querySelector("body");
  let footer = document.querySelector("footer");
  // index des touches sur le clavier
const allowedKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

// On stocke le code konami dans un tableau
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

// variable qui va nous permettre de parcourir le tableau du code konami
let konamiCodePosition = 0;

// On ajoute un event listener sur le document qui va écouter les touches du clavier
document.addEventListener('keydown', (e) => {
  // Recupere la valeur de la touche du clavier
  let key = allowedKeys.indexOf(e.key);
  
  // recupere la valeur de la touche du clavier dont on a besoin pour le code konami
  let requiredKey = konamiCode[konamiCodePosition];

  // On compare la touche du clavier avec la touche du code konami
  if (key == requiredKey) {

    // On passe a la prochaine clé du code konami
    konamiCodePosition++;

    // Si la derniere clé est atteinte, on declenche la fonction cheats
    if (konamiCodePosition == konamiCode.length) {
      cheats();
      konamiCodePosition = 0;
    }
  } else {
    konamiCodePosition = 0;
 

  }});

  function cheats() {
    body.style.backgroundColor = "#336699";
    body.style.color = "white";
    footer.style.backgroundColor = "#FF9F00";
    footer.style.color = "white";
  }
});