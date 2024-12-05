import React from 'react'

import "./Item.css"


const Item = ({nombre,tamaño,ingredientes,imagen,precio}) => {
  return (

   
    
    <div className="cards mb-3" >
        <div>

            <img className='cards-imagen' src={imagen} alt="" />

        </div>

        <div className='cards-body' >

            <h3>{nombre}</h3>
            <h5>{ingredientes}</h5>
            <h5>Podes pedirla : {tamaño}</h5>
            <h6>${precio}</h6>

        </div>
   
    </div>
    

 
  )
}

export default Item