/**
 *
 * CALLBACK
 *
 * Le callback sono FUNZIONI che passiamo come argomento
 * ad altre funzioni
 *
 * Verranno eseguite in seguito ad una azione specifica
 * o ad un evento specifico
 *
 */

// function miaCallback() {
//   console.log("Sono la callback");
// }

// function saluta(x) {
//   x();
//   console.log("Ciao Simone!");
// }

// saluta(miaCallback);

/**
 *
 * PROMISE
 *
 * In Js è UN OGGETTO che fa riferimento al risultato di una operazione ASINCRONA
 *
 * La promise si può trovare in 3 stati
 *
 * - Pending (In attesa)
 * - Fullfilled (Risolta con successo)
 * - Rejected (Fallita)
 *
 */

// let promise = new Promise(function (resolve, reject) {
//   // Simulo una operazione che impieghi del tempo, tipo una FETCH verso un endpoint
//   setTimeout(() => {
//     let risultato = "Lista degli utenti della dashboard";
//     resolve(risultato);
//   }, 1500);
// });

// promise
//   .then(function (risultato) {
//     console.log("Fulfilled", risultato);
//   })
//   .catch(function (errore) {
//     console.log(errore);
//   });

/****
 *
 *
 * ASYNC / AWAIT
 *
 * Combo di parole chiave che permettono di trasformare una funzione
 * asincrona in una funzione sincrona.
 *
 *
 */

async function ottieneDatiDaServer() {
  try {
    let promise = new Promise(function (resolve, reject) {
      setTimeout(() => {
        let risultato = "Dati ok";
        resolve(risultato);
      }, 3000);
    });

    let risultato = await promise;
    console.log(risultato); // Dati ok
  } catch (errore) {
    console.error(errore);
  }
}

ottieneDatiDaServer();
