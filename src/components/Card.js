import React from 'react'

const Card = ({ details }) => {
  // Création d'un tableau pour nos ingrédients, chaque ingrédient doit être séparé par une virgule et sera alors intégré dans un li
  const ingredients = details.ingredients
    .split(',')
    .map(item => <li key={item}>{item}</li>)

  // Création d'un tableau pour nos instructions, chaque ingrédient doit être séparé par un point et sera alors intégré dans un li
  const instructions = details.instructions
    .split('.')
    .map(item => <li key={item}>{item}</li>)

  return (
    <div className='card'>
      <div className='image'>
        <img src={require(`../img/${details.image}`)} alt={details.nom} />
      </div>
      <div className='recette'>
        <h2>{details.nom}</h2>
        <ul className='liste-ingredients'>
          {ingredients}
        </ul>
        <ol className='liste-instructions'>
          {instructions}
        </ol>
      </div>
    </div>
  )
}

export default Card
