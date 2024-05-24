import React from 'react'
import { cardContainer} from '../../utils/Utils'
import CardsChild from '../CardsChild/CardsChild'
const Cards = () => {
  return (
    <>
    {
      cardContainer.map((element)=><CardsChild key={element[0].title} title={element[0].title} cardContainer={element}></CardsChild>)
    }
    </>
  )
}

export default Cards
