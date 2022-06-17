import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
      <div className='nav-style'>
        <h1>Ferreteria e insumos de trabajo</h1>
        <nav >    
            <a href=''>Inicio</a>
            <a href=''>Herramientas</a>
            <a href=''>Indumentaria</a>
            <a href=''>Contacto</a>           
        </nav>
      </div>
  )
}

export default NavBar