import React from 'react'

import "./Bitea.css"

const Bitea = ({nombre,precio}) => {
  return (



    <div className='cards-bitea ' >

        <div className='text-center' >{nombre}</div>
        <div className='text-center fw-bold' >{precio}</div>

    </div>
  )
}

export default Bitea