
import React from 'react'
import Image from '../images/Troll Face.png'
import meme1 from '../images/meme1.png'
import meme2 from '../images/meme2.png'
export default function Header() {
  return (
    <header className="header">
    <img 
        src={Image}
        className="header--image"
    />
    <h2 className="header--title">Meme Generator</h2>
     <img src={meme1} height="50px" width="50px"/>
     <img src={meme2}  height="50px" width="50px"/>

    <h4 className="header--project">MADE USING REACT</h4>
    </header>
  )
}
