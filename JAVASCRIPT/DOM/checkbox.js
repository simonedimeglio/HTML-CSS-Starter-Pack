let quadratino = document.getElementById("paperino");

// Listener al click
quadratino.addEventListener("click", function () {
  // Verifico se la mia checbox è "checkata"
  if (quadratino.checked) {
    console.log("Checkbox selezionata");
  } else {
    console.log("Checkbox non selezionata");
  }

  // Ottenere il valore
  let valore = quadratino.value;
  console.log(valore);
});
