window.addEventListener("resize", () => {

  let size2 = window.matchMedia("(max-width: 1920px) and (min-width: 1680px)");
  let size3 = window.matchMedia("(max-width: 1680px) and (min-width: 1280px)");
  let size4 = window.matchMedia("(max-width: 1280px)");

if (size2.matches){
  document.body.style.backgroundColor = '#ffca4b';
} else if (size3.matches){
  document.body.style.backgroundColor = '#275fa0';
} else if (size4.matches){
  document.body.style.backgroundColor = '#ffffff';
} else {
  document.body.style.backgroundColor = '#88c1d0';
}

});