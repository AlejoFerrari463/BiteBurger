import React from 'react'

import "./ItemList.css"
import Item from '../Item/Item'

const ItemList = ({produ}) => {
  return (
    <>

      
      <div className='contenedor-cards' >

      {


        produ.map((item)=>{

       
          return <Item key={item.id} {...item} />

        })


      }
    
      </div>
    </>
  )
}

export default ItemList