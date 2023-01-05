import React from 'react'
import './CityCard.css'

function CityCard({city, imgUrl, imgheight, imgwidth, borderRadius}) {

    const baseUrl = "https://unilife-server.herokuapp.com/";

//create an object to store all the card details 
    const imageStyle={
        backgroundImage: `url("${imgUrl}")`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        backdropFilter: "blur: 2px",
        margin: "5px",
        height: "225px",
        borderRadius: "24px",
        width: "300px",
        position: "relative" 
    }

  return (
    // <div className={cardStyle}>
        <div style= {imageStyle}>
            <div className='city-info-top'>
                <h3>{city.name}</h3>
            </div>
            <div className='city-info-bottom'>
                <p>{city.property_count} properties</p>
            </div>
            
        </div>
    // </div>
  )
}

export default CityCard