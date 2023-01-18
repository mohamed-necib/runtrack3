$(document).ready(function () {
  // Mise en place du bouton pour shuffle l'ensemble des pieces du puzzle
  $("#btn-shuffle").on("click", () => {

    let container = $(".puzzle-shuffle");
    // On récupere les enfants du container
    let children = container.children();
    while(children.length){
      // On déplace n'importe quel enfant vers la fin
      // .eq permet de cibler un élément spécifique grâce à l'index
      container.append(children.splice(Math.floor(Math.random()*children.length), 1)[0]);
    }
  });

  let img = $(".puzzle-shuffle").children();
  img.on("click", () => {
    let newContainer = $(".puzzle-container");
    newContainer.append(img);
  })
});
