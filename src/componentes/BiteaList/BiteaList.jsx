import React from 'react'
import Bitea from '../Bitea/Bitea'

import "./BiteaList.css"

const BiteaList = ({bitea}) => {
  return (
    <>
    
    <div className='contenedor-bitea' >
      {
              
              bitea.map((item)=>{


              return <Bitea key={item.id} {...item} />

          })

      }
    </div>

</>
  )
}

export default BiteaList