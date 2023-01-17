// Créez un fichier style.css. Définissez la taille minimale de votre body à 4096px.
// Ajoutez un <footer> qui prend toute la largeur de votre page en position : fixed en bas de votre fenêtre.
// De la même façon qu’une barre de chargement, la couleur du footer doit évoluer en fonction du pourcentage de scrolling.

document.addEventListener("DOMContentLoaded", () => {

    const footer = document.querySelector("footer");
    const body = document.querySelector("body");

    window.addEventListener("scroll", () => {
        let scrollVert = window.scrollY;
        let inner = window.innerHeight;
        let height = body.offsetHeight;
        let percentage = (scrollVert/(height-inner)) * 100;
        /* console.log(percentage); */ 
        footer.style.width = percentage + "%";
    });
});