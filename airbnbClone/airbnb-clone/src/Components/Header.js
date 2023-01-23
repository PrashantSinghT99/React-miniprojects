import React from 'react'
import Group from '../public/../images/group.png'
const Header = () => {
  return (
    <section>
      <div className="groupImg">
      <img className="groupImg" src={Group}/>
      </div>
      <div className="summary">
        <h1 className='header'>Online Experiences</h1>
        <p className='header-text'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
      </div>
      </section>
  )
}

export default Header