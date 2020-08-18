import React, { useState } from 'react'
import Header from '../components/Header'
import Tabs from '../components/Tabs'
import PokemonList from '../components/PokemonList'
import LocationList from '../components/LocationList'

const App = (): JSX.Element => {
  const [page, setPage] = useState('pokemon')

  return (
    <div>
      <Header />
      <div className='o-main'>
        <Tabs setPage={setPage} />
        <div className='l-container'>
          {page === 'pokemon' ? <PokemonList /> : <LocationList />}
        </div>
      </div>
    </div>
  )
}

export default App
