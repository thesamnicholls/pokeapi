import React from 'react'
import { useQuery } from 'react-query'

const Detail = (props: any): JSX.Element => {
  // Storing the current page id in a variable
  const id = props.match.params.id

  // Asynchronous function which returns a detailed list of a single Pokemon
  const getPokemonDetail = async (key: any, { id }: { id: any }) => {
    // Fetching a single Pokemon which an id that matches the current page id
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    // Returing the single Pokemon in JSON format
    return response.json()
  }

  // useQuery hook which gets passed an id and then stores the pokemons data inside data
  const { data } = useQuery(['pokemon', { id }], getPokemonDetail)
  return (
    <div>
      {data && (
        <div>
          <p>{data.id}</p>
          <h2>{data.name}</h2>
        </div>
      )}
    </div>
  )
}

export default Detail
