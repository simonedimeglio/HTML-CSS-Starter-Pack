let umano = {
  nome: "Simone",
  cognome: "Di Meglio",
  età: 28,
  professione: "Dev",
};

alert("ciao");

console.log(typeof umano.professione); // Dev

umano.professione = "Pizzaiolo";

console.log(umano.professione);

umano.passioni = ["Sport", "Cinema", "Musica"];

console.log(umano);

delete umano.passioni;

console.log(umano);
