import React from 'react';
import PropTypes from 'prop-types';

import './Result.css';
import Chart from '../Chart/Chart';

function Result(props) {
  return (
    <div className="result">
      <h1 className='result__color-title'>Vos Couleurs:</h1>
      <div>
        <div className='result__color-legend--container'>
          <p className='result__color-legend'>
            <span className='result__color-legend--color r'>R</span> : {`${Math.round(props.r / 0.13)}%`}</p>
          <p className='result__color-legend'>
            <span className='result__color-legend--color j'>J</span> : {`${Math.round(props.j / 0.13)}%`}</p>
          <p className='result__color-legend'>
            <span className='result__color-legend--color v'>V</span> : {`${Math.round(props.v / 0.13)}%`}</p>
          <p className='result__color-legend'>
            <span className='result__color-legend--color b'>B</span> : {`${Math.round(props.b / 0.13)}%`}</p>
        </div>
      </div>
      <Chart
        r={props.r}
        j={props.j}
        v={props.v}
        b={props.b} />
      <h2>Comprendre les résultats</h2>
      <div className="result__understand container">
        <p className='essential'>Point essentiel : Toutes les couleurs sont en vous. </p>
        <p>Plus le résultat est élevé dans une couleur, plus elle est facile d’accès pour vous, vous pouvez mettre en œuvre toutes ses caractéristiques : c’est votre zone de confort.</p>
        <p>Plus le résultat est bas, plus la couleur est difficile d’accès pour vous, vous devez faire des efforts pour mettre en œuvre ses caractéristiques : c’est votre zone d’inconfort.</p>
        <p>Afin de mieux vous connaître et mettre en avant vos talents, reportez-vous aux caractéristiques des couleurs.</p>
        <p>Ce test n’est qu’une approche pour vous donner une idée de vos zones de confort et d’inconfort, pour aller plus loin, remplissez le questionnaire Success Insights qui vous permettra un plan d’action pour réussir avec vos couleurs. Nous contacter</p>
      </div>
      <h2>Caractéristique de chaque couleur</h2>
      <div className="result__characteristic container">
        <div className="result__characteristic-color bleu b">
          <h3>Talents pour analyser les problèmes</h3>
          <ul>
            <li>Réfléchit avant d’agir</li>
            <li>Aime des organisations structurées</li>
            <li>S’intéresse aux détails</li>
            <li>Travaille seul avec précision</li>
            <li>Objectif et juste</li>
            <li>N’aime pas être mis en avant</li>
            <li>Souvent strict et froid</li>
            <li>Capacité à prendre du recul</li>
          </ul>
        </div>
        <div className="result__characteristic-color rouge r">
          <h3>Talents pour décider</h3>
          <ul>
            <li>Aime la compétiton</li>
            <li>Actions et decisions rapides</li>
            <li>Peu de tolérance pour les sentiments des autres</li>
            <li>N’aime pas les conseils</li>
            <li>Aime la confrontation</li>
            <li>Travaille rapidement et seul</li>
            <li>Fait preuve de peu d’écoute</li>
            <li>Est énergique et travailleur</li>
          </ul>
        </div>
        <div className="result__characteristic-color vert v">
          <h3>Talents pour conseiller</h3>
          <ul>
            <li>Prises de décision prudentes</li>
            <li>Écoute activement</li>
            <li>Soutient les autres</li>
            <li>Renforce la cohésion</li>
            <li>Obtient le soutien des autres</li>
            <li>Méthodique</li>
            <li>Consensuel</li>
            <li>N’aime pas les conflits</li>
          </ul>
        </div>
        <div className="result__characteristic-color jaune j">
          <h3>Talents pour persuader</h3>
          <ul>
            <li>Spontané</li>
            <li>N’aime pas la solitude</li>
            <li>A besoin de variété dans son travail</li>
            <li>N’aime pas se plier aux règles</li>
            <li>Recherche la reconnaissance</li>
            <li>Aime être mis en avant</li>
            <li>À l’aise en société</li>
            <li>Rapide et animé</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

Result.propTypes = {
  r: PropTypes.number.isRequired,
  j: PropTypes.number.isRequired,
  v: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
}

export default Result;