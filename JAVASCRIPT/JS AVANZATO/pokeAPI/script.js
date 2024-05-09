let pokemonContainer = document.getElementById("pokemonContainer");

// Funzione per ottenere un numero random
const getRandonNumber = (minimo, massimo) =>
  Math.floor(Math.random() * (massimo - minimo + 1)) + minimo;

// Funzione per chiamare PokeAPI ed ottenere un pokemon casuale
const ottieniPokemonCasuale = () => {
  pokemonContainer.innerHTML = "";
  const pokemonId = getRandonNumber(1, 1302);

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    .then((response) => response.json())
    .then((pokemon) => {
      // Costruisco la card html per il pokemon
      const pokemonCard = document.createElement("div");
      pokemonCard.innerHTML = `
      <div>
        <h2>${pokemon.name}</h2>
        <img src="${pokemon.sprites.back_default}"
      </div>
      `;

      // Aggiungo la card in pagina
      pokemonContainer.appendChild(pokemonCard);
    })
    .catch((error) => console.error("Errore:", error));
};

document
  .getElementById("ottieniPokemon")
  .addEventListener("click", ottieniPokemonCasuale);
