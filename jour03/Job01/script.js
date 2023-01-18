$(document).ready(function () {
  $("#btn-show").on("click", () => {
    $("body").append(
      "<p>Les logiciels et les cathédrales, c'est un peu la même chose - d'abord on les construits, ensuite on prie.<p>"
    );
  });
  $("#btn-hide").on("click", () => {
    $("p").remove();
  });
});
