import React from 'react'

import "./NavBar.css"

const NavBar = () => {
  return (
    <>
   
   <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span ><i className="icon fa-solid fa-burger fa-xl"></i></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
    <a className="navbar-brand" href="#">BiteBurger</a>
    </div>
  </div>
</nav>
    
    
    
    </>
  )
}

export default NavBar