import React from 'react'
import './HomeDetail.css'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import {MdBed, MdOutlineBathtub} from 'react-icons/md'
import {BsCurrencyPound, BsHeart } from 'react-icons/bs'
import { AiOutlineCheck } from "react-icons/ai";

function HomeDetail() {
    const baseUrl = "https://unilife-server.herokuapp.com";
    
    //need home id from url 
    const {homeid}= useParams()
    // console.log(homeid)

    //create state to hold home data
    const [home, setHome] = React.useState([])

    //create state to hold images
    const [images, setImages] = React.useState([])

    //create state to hold key features
    const [features, setFeatures] = React.useState([])

    //call api to get detailed info about specific property
    React.useEffect(
        ()=>{
          console.log(`${baseUrl}/properties/${homeid}`)
             //call api to get home details
             axios.get(`${baseUrl}/properties/${homeid}`)
            //  https://unilife-server.herokuapp.com/properties/633d453061f49f86a21caa13
             .then (res =>{
               console.log(res.data);
               //store the data from the api into state
              setHome(res.data)
              setImages(res.data.images)
              setFeatures(res.data.key_features)
             })
             .catch(err => console.log(err))
       }, []
       )
  return (
    <div className='home-detail-container'>
        <div className='top-row'>
            <div className='photo-grid'>
              <img className='home-big' src={images[0]} />
              <div className='home-3pic'>
                <img className='home2' src={images[1]} />
                <img className='home3' src={images[2]} />
                <img className='home4' src={images[3]} />
              </div>
            </div>
            <div className='top-right'>
              <div className='property-overview'>
                <div className='address'>
                  <h3>{home?.address?.street}, {home?.address?.city},</h3>
                  <h3>{home?.address?.postcode}</h3>
                </div>
                <hr className='line-break'></hr>
                <div className='row1'>
                    <div className='bedrooms'>
                      <small>Bedrooms</small>
                      <div className='bedroom-info'>
                        <MdBed className='bed-icon'/>
                        <p>{home?.bedroom_count}</p>
                      </div>
                    </div>
                    <div className='bathrooms'>
                      <small>Bathrooms</small>
                      <div className='bathroom-info'>
                        <MdOutlineBathtub className='bath-icon'/>
                        <p>{home?.bathroom_count}</p>
                      </div>
                    </div>
                    <div className='property-type-info'>
                      <small>Property Type</small>
                      <p>{home?.property_type}</p>
                    </div>
                </div>
                <div className='row2'>
                    <div className='price'>
                      <small>Price</small>
                      <div className='price-info'>
                        <BsCurrencyPound className='pound-icon'/>
                        <p>{home?.rent}</p>
                      </div>
                    </div>
                    <div className='furnished-info'>
                      <small>Furnished Type</small>
                      <p>{home?.furnished}</p>
                    </div>
                    <div className='available-info'>
                      <small>Available</small>
                      <p>{home?.availability}</p>
                    </div>
                </div>
              </div>
              <div className='interest-container'>
                  <div className='shortlist'>
                    <BsHeart className='heart-icon' />
                    <p>Shortlist</p>
                  </div>
                  <button>Book Viewing</button>
              </div>
            </div>
        </div>
        <div className='middle-row'>
          <div className='description-container'>
            <h3>Description</h3>
            <p>{home?.property_description}</p>
          </div>
          <div className='bedroom-prices'>
            <p>Render mapping here</p>
            <p>Render mapping bedroom component here</p>  
          </div>
        </div>
        <div className='bottom-row'>
          
            <div className='key-features-list'>
                <h3>Key Features</h3>
                <div className='feature0'>
                  <AiOutlineCheck className='check' />
                  <p>{features[0]}</p>
                </div>
                <div className='feature1'>
                    <AiOutlineCheck className='check' />
                    <p>{features[1]}</p>
                </div>
                <div className='feature2'>
                  <AiOutlineCheck className='check' />
                  <p>{features[2]}</p>
                </div>
                <div className='feature3'>
                  <AiOutlineCheck className='check' />
                  <p>{features[3]}</p>
                </div>
                <div className='feature4'>
                  <AiOutlineCheck className='check' />
                  <p>{features[4]}</p>
                </div>
          </div>
        </div>
    </div>
    
  )
}

export default HomeDetail