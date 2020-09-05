import React from 'react';

import './NavButton.css'

export const NavButton = props => {
  const current = props.current || 0
  console.log(current)
  return (
    <div className='navbar'>
      <button className="navbar-item" id='0'  style={{background: (current == 0) ? '#f78b1f': '#fff'}}/>
      <button className="navbar-item" id='1'  style={{background: (current == 1) ? '#f78b1f': '#fff'}}/>
      <button className="navbar-item" id='2'  style={{background: (current == 2) ? '#f78b1f': '#fff'}}/>
    </div>
  )
}

