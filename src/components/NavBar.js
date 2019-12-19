import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar'>
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/actors'>Actors</NavLink></li>
        <li><NavLink to='/movies'>Movies</NavLink></li>
        <li><NavLink to='/directors'>Directors</NavLink></li>
      </ul>
    </div>
  );
};

export default NavBar;
