import axios from 'axios';
import React from 'react'
import Banner from '../../components/Banner/Banner'
import Banner2 from '../../components/Banner2/Banner2';
import CityCard from '../../components/CityCard/CityCard';
import Compare from '../../components/Compare/Compare';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import './Homepage.css'
import { icons } from 'react-icons';
function Homepage() {

const baseUrl = "https://unilife-server.herokuapp.com";

//create state to hold cities
const [cities, setCities] = React.useState([])


React.useEffect(
  ()=>{
      //call api to get cities
      axios.get(`${baseUrl}/cities?limit=9`)
      // https://unilife-server.herokuapp.com/cities
      .then (res =>{
        console.log(res.data.response);
        //store the data from the api into state
        setCities(res.data.response)
      })
      .catch(err => console.log(err))
}, []
)


  return (
    <div className='homepage'>
      <Banner                 headline="Find student homes with bills included" 
                              text="A simple and faster way to search for student accommodation" />
      <div className='search-container'>Search Bar</div>

      <div className='accomodations-container'>
        <h3>Student accomodations in our top cities</h3>
        <div className='city-card-container'>
       
          {
          cities.map(item=> <CityCard     
                                          city={item}
                                          imgUrl={item.image_url}
                                           />)
                                          
                                          
          } 
          
         </div>
        {/* onClick needed below to link to the See All Cities Page */}
        <Link to={`/seeallcities/`}>
          <button className='see-all-cities-btn'>See All Cities</button>
        </Link>
      </div>
      <div className='compare-container'>
        <h3 className='compare-all'>Compare all inclusive student homes</h3>
        <Compare />
      </div>
        <Banner2 />
        
    </div>
  )
}

export default Homepage