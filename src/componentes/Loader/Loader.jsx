import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

import "./Loader.css"

const Loader = () => {
  return (
    <div className='loader-cont' >

   
      <Spinner animation="grow" size="sm" />
      <Spinner animation="grow" />
        

    </div>
  )
}

export default Loader