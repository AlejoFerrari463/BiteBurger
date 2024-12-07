import React from 'react'

import "./NavBar.css"

const NavBar = () => {
  return (
    <div className='sticky-top nv' >
   
      <div className='informacion' >
      
        <div className='envios-y-horarios' >
          Jueves a Domingo 20 a 23hs - Envios a Tigre Centro, San Fernando y Rincón!
          Transferencia o efectivo.
        </div>
        <a href="https://www.instagram.com/biteburger__/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
      
      </div>

      <nav className="navbar ">
    
          <h1 className='navbar-brand text-center tracking-in-contract' >
            BiteBurger
          </h1>
      </nav>
    
    
    </div>
  )
}

export default NavBar