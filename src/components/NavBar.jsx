import React from 'react'
import { NavLink } from 'react-router';

function NavBar() {
  const menu = [
    { id: 1, name: 'Home', to: '/' },
    { id: 2, name: 'Login', to: '/login' },
    { id: 3, name: 'ToDo', to: '/todo' },
  ];
  return (
    <div className='flex gap-16 justify-center items-center h-16 bg-primary'>
      {menu.map((el) => (
        <NavLink key={el.id} to={el.to} className='btn bg-amber-100'>
          {el.name}
        </NavLink>
      ))}
    </div>
  )
}

export default NavBar