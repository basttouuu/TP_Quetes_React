
const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];


/** site utiliser pour m'aider a afficher les cartes des pokémons : 
 * https://fr.legacy.reactjs.org/docs/lists-and-keys.html */


function PokemonCard () {
    return (
        <div>
            {pokemonList.map((pokemon) => (
         
            <figure>
                {pokemon.imgSrc !== undefined ? (<img src={pokemon.imgSrc} alt={pokemon.name} />) : (<p>???</p>)}            
                <figcaption>{pokemon.name}</figcaption>
            </figure>

            ))}
        </div>
    );
}

export default PokemonCard;