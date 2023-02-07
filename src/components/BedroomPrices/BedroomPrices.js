import React from 'react'
import './BedroomPrices.css'

function BedroomPrices({bedroomPrices, home}) {

    //need an array for bedroom count
    const bedroomNumbers = [
        "bedroom_one",
        "bedroom_two",
        "bedroom_three",
        "bedroom_four",
        "bedroom_five",
        "bedroom_six",
        "bedroom_seven"
    ]
    console.log(bedroomNumbers);

    //need an empty array for new data
    const bedroomData = []
    console.log(bedroomData)

    // //need state to hold specific bedroom count data
    // const [bedCount, setBedCount] = React.useState()

    //need a for loop to iterate through bedroom numbers and match the price
    for( let i = 0; i < home?.bedroom_count; i++){

    //find the price that goes with the bedroomNumbers[i]
    // I think this is where my issue is....
     bedroomData.push({name:"Bedroom " + (i+1), price: BedroomPrices[bedroomNumbers[i]]})
    //  console.log(bedroomData)
   }


  return (
    <div className='bedroom-price-container'>
      {
        bedroomData.map(item => <p>{item.name} {item.price}</p>)
      }

    </div>
  )
}

export default BedroomPrices