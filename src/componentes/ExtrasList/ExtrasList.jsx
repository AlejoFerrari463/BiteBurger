import React from 'react'
import Extrass from '../Extrass/Extrass'

import "./ExtrasList.css"

const ExtrasList = ({extras}) => {
  return (
    <>
    
        <div className='contenedor-extras' >
        {
                
            extras.map((item)=>{


                return <Extrass key={item.id} {...item} />

            })

        }
    
      </div>  
    </>
  )
}

export default ExtrasList