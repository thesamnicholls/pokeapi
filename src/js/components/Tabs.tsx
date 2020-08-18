import React from 'react'

type TabProps = {
  setPage: React.Dispatch<React.SetStateAction<string>>
}

const Tabs = ({ setPage }: TabProps) => {
  const onClick = (page: string) => (event: React.MouseEvent) => {
    // Prevent the default action onClick
    event.preventDefault()
    // Set the page state to be the page passed into the function
    setPage(page)
  }

  return (
    <div className='c-tabs'>
      <button
        className='c-tabs__tab c-tabs__tab--margin-right'
        onClick={onClick('pokemon')}
        title='Go to the Pokemon listing page'
      >
        Pokemon
      </button>
      <button
        className='c-tabs__tab'
        onClick={onClick('locations')}
        title='Go to the Locations listing page'
      >
        Locations
      </button>
    </div>
  )
}

export default Tabs
