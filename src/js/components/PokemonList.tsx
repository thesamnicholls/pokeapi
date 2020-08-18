import React from 'react'
import { useQuery } from 'react-query'

const PokemonList = (): JSX.Element => {
  const fetchPokemon = async () => {
    // Fetching all of the first generation pokemon
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
    // Return the response in a json format
    return response.json()
  }

  const { data, status } = useQuery('pokemon', fetchPokemon)

  return (
    <div className='o-page'>
      <h2 className='o-page__title'>Pokemon List</h2>
    </div>
  )
}

export default PokemonList
