import React from 'react'
import './HomeDetail.css'
import axios from 'axios';

function HomeDetail() {
    const baseUrl = "https://unilife-server.herokuapp.com";
    
    //need city id from url 
    const {id}= useParams()

    // //do I need a specific property id?
    // const {homeid}= useParams()

    //create state to hold properties
    const [properties, setProperties] = React.useState([])

    //call api to get detailed info about specific property
    React.useEffect(
        ()=>{
             //call api to get properties
             axios.get(`${baseUrl}/properties/city/${id}`)
             // https://unilife-server.herokuapp.com/cities
             .then (res =>{
               console.log(res.data.response);
               //store the data from the api into state
              setProperties(res.data.response)
             })
             .catch(err => console.log(err))
       }, []
       )
  return (
    <div className='home-detail-container'>
        HomeDetail
    </div>
  )
}

export default HomeDetail