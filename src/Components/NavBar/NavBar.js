import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import ferreteria from '../../assets/ferreteria.png'

const NavBar = () => {
  return (
      <div className='nav-style'>
        <img src={ferreteria} className='logo'></img>
        <h1 className='title'>Ferreteria e insumos de trabajo</h1>
        <nav >    
            <a href=''>Inicio</a>
            <a href=''>Herramientas</a>
            <a href=''>Indumentaria</a>
            <a href=''>Contacto</a>           
        </nav>
        <div className='cart'>
          <CartWidget/>
        </div>
      </div>
  )
}

export default NavBar