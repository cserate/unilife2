import React from 'react'
import axios from 'axios'
import './SeeAllCities.css'
import Banner from '../../components/Banner/Banner'
import CityButtons from '../../components/CityButtons/CityButtons'
import Footer from '../../components/Footer/Footer'
import CityCard from '../../components/CityCard/CityCard'






function SeeAllCities() {
    const baseUrl = "https://unilife-server.herokuapp.com";

    //create state to hold cities
    const [cities, setCities] = React.useState([])
    
    React.useEffect(
      ()=>{
          //call api to get cities
          axios.get(`${baseUrl}/cities?limit=30`)
          // https://unilife-server.herokuapp.com/cities
          .then (res =>{
            // console.log(res.data.response);
            //store the data from the api into state
            setCities(res.data.response)
          })
          .catch(err => console.log(err))
    }, []
    )

  return (
    //figure out how to reuse the Banner but pass new data that I type in
    //the banner component works, but has the wrong text
    <div className='see-all-cities-page'>
        <Banner                   headline ="Student Accomodation"
                                  text ="UniLife have student accommodation available across the UK.
                                  Whatever you’re after, we can help you find the right student accommodation for you. "/>

            <h3>Search by City</h3>
        
            <div className='city-buttons-container'>
                {cities.map(item=> <CityButtons     
                                                    city={item} />)}
            
            {/* {cities.map(item=> <button>{item.name}</button>     
                  )} */}
            
            </div>
        
    </div>
  )
}

export default SeeAllCities