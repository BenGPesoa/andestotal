import React from 'react';
import '../../styles/components/layout/nav.css';

import { NavLink } from "react-router-dom";
 
const Nav = (props) => {
    return (
        <div>
          <nav>
          <ul>
            <li><NavLink to='/inicio' className={({isActive}) => isActive ? "activo" : undefined }>Inicio</NavLink></li>
            <li><NavLink to='/productos' className={({isActive}) => isActive ? "activo" : undefined }>Productos</NavLink></li>
            <li><NavLink to='/fabrica' className={({isActive}) => isActive ? "activo" : undefined }>Nuestra Fábrica</NavLink></li>
            <li><NavLink to='/efemerides' className={({isActive}) => isActive ? "activo" : undefined }>Efemérides Astronómicas</NavLink></li>
            <li><NavLink to='/galeria' className={({isActive}) => isActive ? "activo" : undefined }>Imágenes</NavLink></li>
            <li><NavLink to='/contacto' className={({isActive}) => isActive ? "activo" : undefined }>Contacto</NavLink></li>
          </ul>
          </nav>
        </div>
    );
};
export default Nav;