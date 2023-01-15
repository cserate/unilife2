import React from 'react'
import './PropertyCard.css'
import {MdBed, MdOutlineBathtub, MdLocationPin, MdOutlineHome} from 'react-icons/md'
import {BsCurrencyPound} from 'react-icons/bs'


function PropertyCard({property, image}) {

    //create an object to store all the card details 
    const propImageStyle={
        backgroundImage: `url("${image}")`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        backdropFilter: "blur: 2px",
        marginBottom: "200px",
        height: "260px",
        borderRadius: "24px 24px 0 0",
        width: "400px",
        position: "relative" 
    }
  return (
    <div style= {propImageStyle} className='property-card-container'>

        <div className='card-info'>
            <div className='card-blue-label'>
                    <div className='left-side'>
                        <BsCurrencyPound className='pound'/>
                        <h3>{property.rent}</h3>
                        <small>pppw including bills</small>
                    </div>
                    <div className='right-side'>
                        <MdBed className='beds'/>
                        <small>{property.bedroom_count}</small>
                        <MdOutlineBathtub className='baths' />
                        <small>{property.bathroom_count}</small>
                    </div>
            </div> 
            <div className='location'>
                <div className='property-type'>
                    <h4>{property.property_type}</h4>
                    <h4>{property.furnished}</h4>
                </div>
                <div className='address'>
                    <MdLocationPin />
                    <small>{`${property.address.street}, ${property.address.city}, ${property.address.postcode}`}</small>
                </div>
            </div> 
            {/* <Link to={`/`} */}
            <div className='view'>
                <MdOutlineHome className='home-icon'/>
                <h4>View Home</h4>
            </div>     
        </div>
    </div>
  )
}

export default PropertyCard