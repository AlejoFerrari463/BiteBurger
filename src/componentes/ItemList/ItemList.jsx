import React from 'react'

import "./ItemList.css"
import Item from '../Item/Item'

const ItemList = ({produ}) => {
  return (
    <>
    
      {


        produ.map((item)=>{

       
          return <Item key={item.id} {...item} />

        })


      }
    
    </>
  )
}

export default ItemList