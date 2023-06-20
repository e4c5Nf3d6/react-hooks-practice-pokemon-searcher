import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonList, setPokemonList] = useState([])
  const [searchData, setSearchData] = useState('')
  
  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(r => r.json())
    .then(data => setPokemonList(data))
  }, [])

  function addPokemon(newPokemon) {
    fetch("http://localhost:3001/pokemon", {
      method: 'POST',
      headers:  {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPokemon)
    })
    .then(r => r.json())
    .then(data => {
      setPokemonList([...pokemonList, data])
    })
  }

  const pokemonToDisplay = pokemonList.filter(pokemon => pokemon.name.toLowerCase().includes(searchData.toLowerCase()))

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={addPokemon} />
      <br />
      <Search searchData={searchData} onSetSearchData={setSearchData} />
      <br />
      <PokemonCollection pokemonList={pokemonToDisplay} />
    </Container>
  );
}

export default PokemonPage;
