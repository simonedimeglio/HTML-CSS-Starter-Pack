function prendiDati() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      // Genero un numero casuale tra 0 e quasi 1
      const numeroRandom = Math.random();

      if (numeroRandom < 0.5) {
        // Simulo il caso di RESOLVE con successo
        resolve("Dati ricevuti con successo, grazie.");
      } else {
        // Simulo il caso di REJECT
        const errore = new Error("Errore creato da Simone");
        reject(errore);
      }
    }, 3500);
  });
}

prendiDati()
  .then(function (risultato) {
    console.log(risultato);
  })
  .catch(function (errore) {
    console.error(errore);
  });
