import React from 'react'
import './Banner.css'
import cover from '../../assets/cover-img.png'

function Banner({headline, text}) {

  //set a variable for the backgound image
  const banner = {
        backgroundImage: `url(${cover})`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        height:"40vh",
        position: "relative" 
  }
  return (
    <div style= { banner } >
        <div className='banner-overlay'></div>
        <div className='banner-text'>
            
          {/* </div>
          <div className='seeallcities-banner'> */}
            <h1>{headline}</h1>
            <p>{text}</p>
        </div>
    </div>

  )
}

export default Banner