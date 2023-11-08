import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:3001/pokemon')
      .then(r => (r.json()))
      .then(pokemonArray => setPokemon(pokemonArray))
  }, [])

  // const pokemonsToDisplay = pokemon.filter((poke) => {
  //   return poke.name.toLowerCase().includes(sear)
  // }) 



  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search />
      <br />
      <PokemonCollection pokemon = {pokemon} />
    </Container>
  );
}

export default PokemonPage;
