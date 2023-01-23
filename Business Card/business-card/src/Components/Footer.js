import React from "react"

import  facebook from '../images/facebook.png'
import insta from '../images/insta.png'
import  github from '../images/github.png'
import twitter from '../images/twitter.png'
import linkedin from '../images/linkedin.png'

export default function Footer()
{
  
    return(
        <section className="footer">
       <div className="social-list">
<div className="social-item"><img src={linkedin}/></div>
<div className="social-item"><img src={github} width="50px" height="45px" /></div>
<div className="social-item"><img src={twitter} alt="" /></div>
<div className="social-item"><img src={insta}/></div>
<div className="social-item"><img src={facebook}/></div>
       </div>
        </section>
    )
}

// twiter face inst github linked


