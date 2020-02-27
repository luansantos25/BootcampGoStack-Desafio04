import React from 'react';
import './Header.css';
import user from '../assets/user.png';

export default () => {
  return (
    <header>
      <div className="brand">Facebook</div>
      <div className="profile"><span>Meu Perfil</span> <img src={user}/></div>
    </header>
  )
}