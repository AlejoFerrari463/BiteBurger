import React from 'react'

import "./Extrass.css"

const Extrass = ({nombre,precio,tipos}) => {
  return (
    <>

      <div className='cards-extras' >
        
        <div className='text-center' >
          
          <div>{nombre}</div>
          <div>{tipos}</div>

          
          </div>
        <div className='text-center fw-bold' >{precio}</div>
    
       </div>
    </>
  )
}

export default Extrass