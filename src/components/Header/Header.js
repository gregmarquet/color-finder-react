import React from 'react';
import './Header.css';

function Header(props) {
  return (
    <div className="header">
      <div className="container">
        <h1 className="header__title">Découvrir ses couleurs</h1>
        <p className="header__subtitle">Remplissez ce petit questionnaire pour decouvrir vos couleurs</p>
      </div>
    </div>
  )
}

export { Header };