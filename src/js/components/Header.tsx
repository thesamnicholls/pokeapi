import React from 'react'

const Header = (): JSX.Element => {
  return (
    <div className='c-header'>
      <a
        className='c-header__link'
        href='/pokeapi'
        title='Click here to go home'
      >
        <h1 className='c-header__title'>Pokeapi</h1>
      </a>
    </div>
  )
}

export default Header
