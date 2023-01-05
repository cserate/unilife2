import React from 'react'
import './CityButtons.css'

function CityButtons({city}) {
    

    //create an object to store all the card buttons
        const buttonStyle={
            backgroundColor: "white",
            color: "black",
            border: "1px solid #CED3D8",
            margin: "5px",
            height: "80px",
            borderRadius: "24px",
            width: "300px",
            position: "relative" 
        }
    
      return (
        <div style= {buttonStyle}>
                <div className='city-buttons'>
                    <p>{city.name}</p>
                </div>
            </div>
      )
        
}

export default CityButtons