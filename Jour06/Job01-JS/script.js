window.addEventListener("resize", () => {
  let size2 = window.matchMedia("(max-width: 1920px) and (min-width: 1680px)");
  let size3 = window.matchMedia("(max-width: 1680px) and (min-width: 1280px)");
  let size4 = window.matchMedia("(max-width: 1280px)");

  let link = document.getElementById("style-link");

  if (size2.matches) {
    link.href = "style2.css";
  } else if (size3.matches) {
    link.href = "style3.css";
  } else if (size4.matches) {
    link.href = "style4.css";
  } else {
    link.href = "style1.css";
  }
  document.body.style.backgroundColor = document.body.style.backgroundColor;
  console.log(link.href);
});
