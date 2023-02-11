const API = "https://pokeapi.co/api/v2/pokemon/";
const form = document.querySelector("form");

const getPokemon = (pokemon) => {
  const pokemonObject = fetch(`${API}${pokemon}`).then((response) =>
    response.json()
  );
  return pokemonObject;
};

const editPokemonCard = ({ types, name, sprites }) => {
  const frontIcon = document.querySelector("#pokemon-front-icon");
  const backIcon = document.querySelector("#pokemon-back-icon");
  const pokemonName = document.querySelector("#pokemon-name");
  const pokemonType = document.querySelector("#pokemon-type");
  const elementTypes = types
    .map((typeSection) => typeSection.type.name)
    .join(" | ");

  frontIcon.src = sprites.front_default;
  backIcon.src = sprites.back_default;
  pokemonName.innerText = name;
  pokemonType.innerText = elementTypes;
};

form.onsubmit = (event) => {
  event.preventDefault();
  const pokemon = document.querySelector("#pokemon-identifier").value;

  getPokemon(pokemon).catch(() => {
    alert("Pokémon not found!");
  });
  getPokemon(pokemon).then((pokemonObject) => {
    editPokemonCard(pokemonObject);
  });
};
