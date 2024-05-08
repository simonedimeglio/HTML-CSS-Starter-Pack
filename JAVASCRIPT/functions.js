// FUNZIONI DICHIARATE
function nomeDellaFunzione(argomento1, argomento2) {
  // Blocco di codice da eseguire
}

function somma(a, b) {
  return a + b;
}

// ESPRESSIONI
const nomeFunzione = function (argomento1) {
  // Blocco di codice da eseguire
};

const somma = function (a, b) {
  return a + b;
};

// ARROW FUNCTIONS
const nomeFunzione2 = (item1, item2) => {
  // Blocco di codice da eseguire
};

const somma = (a, b) => {
  return a + b;
};

// ESEMPI
function saluta() {
  console.log("Ciao");
}

function somma(x, y) {
  return x + y;
}

let risultato = somma(5, 4);

console.log(risultato);

console.log(somma(3, 2));

function prendiIDati() {
  let x = 5;
  let y = 10;
  return [x, y];
}

let banana = prendiIDati();
console.log(banana);
