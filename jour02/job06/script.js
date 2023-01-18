// Par défaut, votre index.php n’a pas de contenu.
// Lorsqu’un utilisateur effectue un code konami, la page devient stylisée, aux couleurs de La Plateforme_.

document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");
  const footer = document.querySelector("footer");
  const pressedKey = [];
  const konamiCode =
    "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba";

  window.addEventListener("keyup", (e) => {
    pressedKey.push(e.key);
    console.log(pressedKey);
    pressedKey.splice(
      -konamiCode.length - 1,
      pressedKey.length - konamiCode.length
    );
    if (pressedKey.join("").includes(konamiCode)) {
      console.log("C'est le code konami");
      cornify_add();
      cheats();
    }
  });

  function cheats() {
    body.style.display = "block";
    footer.style.display = "block";
  }
});
