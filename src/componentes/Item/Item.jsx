import React from 'react'

import Typed from 'typed.js';

import { useEffect,useRef } from 'react';

import "./Item.css"



const Item = ({nombre,tamaño,ingredientes,imagen,precio}) => {

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [nombre],
      typeSpeed: 100,
      loop: false,
     
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);


  return (

   
    <div className="cards mb-3" >
        <div>

          <img className='cards-imagen' src={imagen} alt={nombre} />

        </div>

        <div className='cards-body' >

          <div className='cards-titulo text-light'>
            <span ref={el}></span>
          </div>
          <div>{ingredientes}</div>
          <div>Podes pedirla : {tamaño}</div>
          <div>{precio}</div>

        </div>
   
    </div>
    

 
  )
}

export default Item