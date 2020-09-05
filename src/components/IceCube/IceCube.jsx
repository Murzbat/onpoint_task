import React from 'react';
import './IceCube.css';

export const IceCube = props => {
  const transform = (props.style) ? props.style.transform : '';
  const transition = (props.style) ? props.style.transition : '';
  const styleIceBrick = {
    top: `${props.top}px`,
    left: `${props.left}px`,
    transform: `${transform}`,
    transition: `${transition}`
  }
  return (
    <div className={`ice-brick ice-brick-${props.id}`} style={styleIceBrick}></div>
  )
}

