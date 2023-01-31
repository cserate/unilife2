import React from 'react'
import './BookViewing.css'
import ContactForm from '../../components/ContactForm/ContactForm'
import { useParams } from 'react-router-dom'
import axios from 'axios'


function BookViewing() {

    const baseUrl = "https://unilife-server.herokuapp.com";

    //need home id from url 
    const {homeid}= useParams()

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
              setHome(res.data)
             })
             .catch(err => console.log(err))
       }, []
       )

  return (
    <div>
        <ContactForm            headline="Book a Viewing"
                                text="town, city, zip"              />

    </div>
  )
}

export default BookViewing