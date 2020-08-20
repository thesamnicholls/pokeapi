import React, { useState } from 'react'
import { useQuery } from 'react-query'
import Card from './Card'
import Loading from './Loading'
import Pagination from './Pagination'
import Error from './Error'

const List = (): JSX.Element => {
  const [offset, setOffset] = useState(0)
  const [page, setPage] = useState(1)

  // Asynchronous function which returns a list of all the Pokemon
  const getPokemonList = async (
    key: string,
    { offset }: { offset: number },
  ) => {
    // Fetching the list of pokemon
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?offset=${offset}`,
    )
    // Returing the list of Pokemon in JSON format
    return response.json()
  }

  // useQuery hook which stores the status and data of the fetch
  const { data, status } = useQuery(['pokemon', { offset }], getPokemonList)
  
  return (
    <div className='o-page'>
      <h2 className='o-page__title'>Pokemon List</h2>
      {status === 'success' && (
        <React.Fragment>
          <div className='l-grid'>
            {data.results.map((item: any) => (
              <Card key={item.name} name={item.name} />
            ))}
          </div>
          <Pagination
            page={page}
            offset={offset}
            setPage={setPage}
            setOffset={setOffset}
          />
        </React.Fragment>
      )}
      {status === 'loading' && <Loading />}
      {status === 'error' && <Error />}
    </div>
  )
}

export default List
