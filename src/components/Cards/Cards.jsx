import React from 'react'
import './Cards.css'
import { CardsData } from '../../Data/Data'
const Cards = () => {
  <div className="Cards">
    {CardsData.map((card,id)=>{
    return(
      <div className="parentContainer">
      </div>
    )
  })}
  </div>
}

export default Cards