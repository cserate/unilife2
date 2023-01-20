import React from 'react'
import './HomeDetail.css'
import axios from 'axios';
import { useParams } from 'react-router-dom'


function HomeDetail() {
    const baseUrl = "https://unilife-server.herokuapp.com";
    
    //need home id from url 
    const {homeid}= useParams()
    console.log(homeid)

    //create state to hold home data
    const [home, setHome] = React.useState([])

    //call api to get detailed info about specific property
    React.useEffect(
        ()=>{
             //call api to get home detaila
             axios.get(`${baseUrl}/properties/${homeid}`)
            //  https://unilife-server.herokuapp.com/properties/633d453061f49f86a21caa13
             .then (res =>{
               console.log(res.data);
               //store the data from the api into state
              // setProperties(res.data.response)
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