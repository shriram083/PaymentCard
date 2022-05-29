import React from 'react'
import Card from './Card'

const Cards = (props) => {
  return (
    <div>
        {
            props.cardData.map((el,index)=>{
                return <Card cardData={el} key={index} i={index}/>
            })
        }
    </div>
  )
}

export default Cards