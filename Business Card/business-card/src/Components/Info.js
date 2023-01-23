import React from "react";
import Passport from '../images/Passport.jpg'
import email from '../images/email.png'
import linked from '../images/linked_In.png'
import sun from'../images/sun.png'
// import { useState } from "react";
// import { useEffect } from "react";

export default function Info(props)
 {
    return (
       <section className="info" >
        <div className="info">
        <div className="top">
      <div className="icon"><img id="icon" onClick={props.updateClick} src={sun} height="30px" width="30px"/></div>
      <div className="pic">
      <img className="photo" src={Passport}/> </div>
      </div>
        <div className="title">
          <h4>Prashant Singh</h4>
          <p>Frontend Developer</p>
          <small>Prashant Website</small>
        </div>
        
        <div className="social">
            <div className="email">   
            <img src={email} width="35px" height="35px"/> 
          <a className="email" href="">Email</a>
          </div>
          <div className="linkedin">
          <img src={linked} width="35px" height="33px"/>
          <a className="linkedin" href="">LinkedIn</a>
          </div>
        </div>
        </div>

    </section>

  );
}
