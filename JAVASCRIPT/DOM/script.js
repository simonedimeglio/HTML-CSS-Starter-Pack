// PUNTATORI
let elementoDaId = document.getElementById("element");
// let elementoDallaClasse = document.getElementsByClassName("classe");
// let elementoDaTag = document.getElementsByTagName("div");
// let elementoDaQuery = document.querySelector("#id .classe");
// let elentoDaQueryMultipla = document.querySelectorAll(".paperino");

// Modifica delle classi
// elementoDaId.classList.add("ciao");
// elementoDaId.classList.remove("red");

// Modifica dello stile
// elementoDaId.style.backgroundColor = "black";

elementoDaId.addEventListener("click", function () {
  console.log("ciao");
  elementoDaId.classList.toggle("red");
});
