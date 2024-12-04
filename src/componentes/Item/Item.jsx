import React from 'react'

const Item = ({nombre,cantidad,ingredientes}) => {
  return (
    <div>

        {console.log(nombre)}
        <h1>{nombre}</h1>
        <h1>{cantidad}</h1>
        <h1>{ingredientes}</h1>


    </div>
  )
}

export default Item