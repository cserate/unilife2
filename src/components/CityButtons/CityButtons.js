import React from 'react'
import './CityButtons.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

function CityButtons({city}) {

     const baseUrl = "https://unilife-server.herokuapp.com";

    //create state to hold cities
    const [cities, setCities] = React.useState([])

    //call api to direct to correct city
    React.useEffect(
       ()=>{
            //call api to get cities
            axios.get(`${baseUrl}/cities`)
            // https://unilife-server.herokuapp.com/cities
            .then (res =>{
              console.log(res.data.response);
              //store the data from the api into state
             setCities(res.data.response)
        
            })
            .catch(err => console.log(err))
      }, []
      )

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
            
        {/* <Link to={`/moviedetails/${upcomingMovies[index]?.id}`}>
                <p className="see-details">See Details</p>
           </Link> */}
                <div className='city-buttons'>
                    <Link to={`/citydetails/${city._id}`}>
                        <p>{city.name}</p>
                    </Link>
                </div>
            </div>
      )
        
}

export default CityButtons