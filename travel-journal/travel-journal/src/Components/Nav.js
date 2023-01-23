import React from 'react'
import Globe from '../images/globe.png'

export default function Nav() {
  return (
    <nav className='navbar'>
        <img src={Globe} alt="global-icon"/>
        <p>MyTravelJournal</p>
    </nav>
  )
}
