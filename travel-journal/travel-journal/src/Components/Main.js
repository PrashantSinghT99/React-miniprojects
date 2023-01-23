import React from 'react'
import visit from '../images/visit.png'

function Main(props) {
  return (
    <section className='places'>
      <div className="main-container">
        <img className="image-item" src={`../images/${props.Image}`}/>

        <div className="info">
          <div className="heading">
            <img src={visit} height="35px" width="40px"/>
            <span>{props.location}</span>
            <a target="_blank" href={`${props.googleMap}`}><small className='map'>View on Google Maps</small></a>
          </div>

          <h1>{props.title}</h1>
          <span className='dates'>{props.startDate} - {props.endDate}</span><br/><br/>
          <small>{props.description}</small>
        </div>


      </div>

    </section>
  )
}

export default Main