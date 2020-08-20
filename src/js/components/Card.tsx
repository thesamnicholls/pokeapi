import React from 'react'
import { useHistory } from 'react-router-dom'

type CardProps = {
  name: string
}

const Card = ({ name }: CardProps) => {
  // Initalising the useHistory function
  const history = useHistory()

  // Function which takes a name and then navigates the user to that names detail page
  const viewDetails = (name: string) => (event: any) => {
    event.preventDefault()
    history.push(`/pokeapi/${name}`)
  }

  return (
    <button className='c-card' onClick={viewDetails(name)}>
      <div className='c-card__wrapper'>
        <p className='c-card__title'>{name}</p>
      </div>
    </button>
  )
}

export default Card
