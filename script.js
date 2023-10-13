function createPokemonCards() {
    const pokemonContainer = document.getElementById('pokemonContainer');
    pokemonContainer.innerHTML = '';

    for (const pokemon of pokemonData) {
    const card = document.createElement('div');
    card.classList.add('pokemon-card');
    card.textContent = `${pokemon.name} (${pokemon.type.join(', ')})`;
    card.addEventListener('click', () => displayPokemonDetails(pokemon));
    pokemonContainer.appendChild(card);
    }
}

function displayPokemonDetails(pokemon) {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = `<h2>${pokemon.name}</h2>
    <p>Type: ${pokemon.type.join(', ')}</p>
    <p>Weight: ${pokemon.weight}</p>
    <p>Moves: ${pokemon.moves.join(', ')}</p>`;

    modal.style.display = 'block';
}

function searchPokemon() {
const searchInput = document.getElementById('searchInput').value.toLowerCase();
const filteredPokemon = pokemonData.filter(pokemon => pokemon.name.toLowerCase().includes(searchInput));
createPokemonCards(filteredPokemon);
}

document.getElementById('searchInput').addEventListener('input', searchPokemon);