// PUNTATORI
let listaSpesa = document.getElementById("listaSpesa");
let checkboxes = document.querySelectorAll("input[type='checkbox']");

// console.log(checkboxes);

checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("click", function () {
    let messaggio = "Hai selezionato: ";

    checkboxes.forEach(function (checkbox) {
      if (checkbox.checked) {
        messaggio += checkbox.value + ", ";
      }
    });

    // Stampo e Rimuovo la virgola dall'ultimo elemento
    document.getElementById("messaggio").textContent = messaggio.slice(0, -2);
  });
});
