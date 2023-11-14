import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetch('http://127.0.0.1:3001/pokemon')
      .then(r => (r.json()))
      .then(pokemonArray => setPokemon(pokemonArray))
  }, [])

  function handleAddPokemon(newPokemon) {
    setPokemon([...pokemon, newPokemon])
  }

  const pokemonToDisplay = pokemon.filter((poke) => 
    poke.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon = {handleAddPokemon} />
      <br />
      <Search searchTerm = {searchTerm} onChangeSearch = {setSearchTerm} />
      <br />
      <PokemonCollection pokemon = {pokemonToDisplay} />
    </Container>
  );
}

export default PokemonPage;
