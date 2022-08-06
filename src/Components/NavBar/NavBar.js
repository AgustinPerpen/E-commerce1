import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import ferreteria from '../../assets/ferreteria.png'
import {Link} from "react-router-dom";

const NavBar = () => {

  const categories = [
    {
        id: 1,
        path:'/',
        name: 'Inicio',
    },
    {
        id: 2,
        path:'/category/herramientas',
        name: 'Herramientas',
    },
    {
        id: 3,
        path:'/category/indumentaria',
        name:'Indumentaria',
    },
];

  return (
      <div className='nav-style'>
        <div>
          <Link to='/'><img src={ferreteria} className='logo'></img></Link>
        </div>
        <div>
          <h1 className='title'>Ferreteria e insumos de trabajo</h1>
        </div>
        <div>
          <nav >

            {categories.map((category) => (
                      <Link className='nav-bar' to={category.path} key={category.id}>
                          {category.name}
                      </Link>
              ))}    
          </nav>
        </div>
        <div className='cart-widget'>
          <Link to='/cart'><CartWidget/></Link>
        </div>
       
      </div>
  )
}

export default NavBar
   