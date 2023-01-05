import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils'
import React from 'react'
import './Compare.css'

function Compare() {
    //create an object to store all the card details 
    const compareStyle={
        backgroundColor: "#F6FAFD",
        color: "black",
        height: "225px",
        width: "100%",
        textAlign: "center",
        position: "relative",
    }

  return (
    <div style={compareStyle} className="icon-container">
        <div className='search-container'>
            <svg className="search" width="97" height="96" viewBox="0 0 97 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M46 95.375C39.6667 95.125 33.7292 93.7083 28.1875 91.125C22.6458 88.5417 17.8333 85.125 13.75 80.875C9.66667 76.625 6.4375 71.6875 4.0625 66.0625C1.6875 60.4375 0.5 54.4167 0.5 48C0.5 41.4167 1.75 35.25 4.25 29.5C6.75 23.75 10.1458 18.7292 14.4375 14.4375C18.7292 10.1458 23.75 6.75 29.5 4.25C35.25 1.75 41.4167 0.5 48 0.5C60.0833 0.5 70.5417 4.39583 79.375 12.1875C88.2083 19.9792 93.4167 29.7083 95 41.375H89.25C88.1667 34.0417 85.375 27.4792 80.875 21.6875C76.375 15.8958 70.625 11.5833 63.625 8.75V11.125C63.625 13.9583 62.625 16.4375 60.625 18.5625C58.625 20.6875 56.2083 21.75 53.375 21.75H42.75V32.375C42.75 33.7917 42.2083 34.9583 41.125 35.875C40.0417 36.7917 38.7917 37.25 37.375 37.25H27.125V48H39.5V63.375H32.375L7.25 38.375C6.91667 39.9583 6.64583 41.5417 6.4375 43.125C6.22917 44.7083 6.125 46.3333 6.125 48C6.125 59.1667 9.9375 68.7917 17.5625 76.875C25.1875 84.9583 34.6667 89.25 46 89.75V95.375ZM91.875 90.875L76.625 75.875C75.0417 77.0417 73.2917 77.9583 71.375 78.625C69.4583 79.2917 67.5 79.625 65.5 79.625C60.1667 79.625 55.6458 77.7708 51.9375 74.0625C48.2292 70.3542 46.375 65.8333 46.375 60.5C46.375 55.1667 48.2292 50.6458 51.9375 46.9375C55.6458 43.2292 60.1667 41.375 65.5 41.375C70.8333 41.375 75.3542 43.2292 79.0625 46.9375C82.7708 50.6458 84.625 55.1667 84.625 60.5C84.625 62.5 84.2708 64.4792 83.5625 66.4375C82.8542 68.3958 81.9167 70.2083 80.75 71.875L95.875 86.875C96.4583 87.4583 96.7708 88.125 96.8125 88.875C96.8542 89.625 96.5833 90.3333 96 91C95.4167 91.5 94.7292 91.75 93.9375 91.75C93.1458 91.75 92.4583 91.4583 91.875 90.875ZM65.5 73.875C69.25 73.875 72.4167 72.5833 75 70C77.5833 67.4167 78.875 64.25 78.875 60.5C78.875 56.75 77.5833 53.5833 75 51C72.4167 48.4167 69.25 47.125 65.5 47.125C61.75 47.125 58.5833 48.4167 56 51C53.4167 53.5833 52.125 56.75 52.125 60.5C52.125 64.25 53.4167 67.4167 56 70C58.5833 72.5833 61.75 73.875 65.5 73.875Z" fill="#3A5295"/>
            </svg>
            <h3>Search</h3>
            <p>Find your dream home in the perfect area near your university.</p>
        </div>
        <div className='compare-container'>
            <svg width="97" height="74" viewBox="0 0 97 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M71.625 20.875L91.5 1.125C92.0833 0.541665 92.75 0.25 93.5 0.25C94.25 0.25 94.9167 0.541665 95.5 1.125C96.0833 1.70833 96.375 2.375 96.375 3.125C96.375 3.875 96.0833 4.54167 95.5 5.125L74.25 26.375C73.5833 27.125 72.75 27.5 71.75 27.5C70.75 27.5 69.9167 27.125 69.25 26.375L58.25 15.5C57.75 14.9167 57.5 14.25 57.5 13.5C57.5 12.75 57.75 12.0833 58.25 11.5C58.8333 11 59.5 10.75 60.25 10.75C61 10.75 61.6667 11 62.25 11.5L71.625 20.875ZM3.125 19.875C2.29167 19.875 1.60417 19.6042 1.0625 19.0625C0.520833 18.5208 0.25 17.8333 0.25 17C0.25 16.1667 0.520833 15.4792 1.0625 14.9375C1.60417 14.3958 2.29167 14.125 3.125 14.125H39.875C40.7083 14.125 41.3958 14.3958 41.9375 14.9375C42.4792 15.4792 42.75 16.1667 42.75 17C42.75 17.8333 42.4792 18.5208 41.9375 19.0625C41.3958 19.6042 40.7083 19.875 39.875 19.875H3.125ZM74 61L62.25 72.625C61.6667 73.125 61 73.3958 60.25 73.4375C59.5 73.4792 58.8333 73.2083 58.25 72.625C57.75 72.0417 57.5 71.375 57.5 70.625C57.5 69.875 57.75 69.2083 58.25 68.625L70 57L58.25 45.375C57.75 44.7917 57.5 44.125 57.5 43.375C57.5 42.625 57.75 41.9583 58.25 41.375C58.8333 40.7917 59.5 40.5208 60.25 40.5625C61 40.6042 61.6667 40.875 62.25 41.375L74 53L85.625 41.375C86.2083 40.7917 86.875 40.5 87.625 40.5C88.375 40.5 89.0417 40.7917 89.625 41.375C90.2083 41.9583 90.5 42.625 90.5 43.375C90.5 44.125 90.2083 44.7917 89.625 45.375L78 57L89.625 68.625C90.2083 69.2083 90.5 69.875 90.5 70.625C90.5 71.375 90.2083 72.0417 89.625 72.625C89.0417 73.2083 88.375 73.5 87.625 73.5C86.875 73.5 86.2083 73.2083 85.625 72.625L74 61ZM3.125 59.875C2.29167 59.875 1.60417 59.6042 1.0625 59.0625C0.520833 58.5208 0.25 57.8333 0.25 57C0.25 56.1667 0.520833 55.4792 1.0625 54.9375C1.60417 54.3958 2.29167 54.125 3.125 54.125H39.875C40.7083 54.125 41.3958 54.3958 41.9375 54.9375C42.4792 55.4792 42.75 56.1667 42.75 57C42.75 57.8333 42.4792 58.5208 41.9375 59.0625C41.3958 59.6042 40.7083 59.875 39.875 59.875H3.125Z" fill="#3A5295"/>
            </svg>
            <h3>Compare</h3>
            <p>Compare student accommodation to find the right home for you.</p>
        </div>
        <div className='bills-container'>
            <svg width="86" height="95" viewBox="0 0 86 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.375 94.5C8.29167 94.5 5.66667 93.4167 3.5 91.25C1.33333 89.0833 0.25 86.4583 0.25 83.375V74C0.25 73 0.583334 72.1458 1.25 71.4375C1.91667 70.7292 2.79167 70.375 3.875 70.375H15.875V3.75C15.875 2.83333 16.2292 2.33333 16.9375 2.25C17.6458 2.16667 18.3333 2.41667 19 3L22.75 6.75L28.5 1.25C28.8333 0.833333 29.2708 0.625 29.8125 0.625C30.3542 0.625 30.7917 0.833333 31.125 1.25L36.75 6.75L42.5 1.25C42.8333 0.833333 43.25 0.625 43.75 0.625C44.25 0.625 44.7083 0.833333 45.125 1.25L50.75 6.75L56.5 1.25C56.8333 0.833333 57.2708 0.625 57.8125 0.625C58.3542 0.625 58.7917 0.833333 59.125 1.25L64.875 6.75L70.5 1.25C70.8333 0.833333 71.2708 0.625 71.8125 0.625C72.3542 0.625 72.7917 0.833333 73.125 1.25L78.875 6.75L82.625 3C83.2917 2.33333 83.9792 2.08333 84.6875 2.25C85.3958 2.41667 85.75 2.91667 85.75 3.75V83.375C85.75 86.4583 84.6667 89.0833 82.5 91.25C80.3333 93.4167 77.7083 94.5 74.625 94.5H11.375ZM74.625 88.875C76.2083 88.875 77.5208 88.3542 78.5625 87.3125C79.6042 86.2708 80.125 84.9583 80.125 83.375V10.125H21.5V70.375H65.625C66.625 70.375 67.4792 70.7292 68.1875 71.4375C68.8958 72.1458 69.25 73 69.25 74V83.375C69.25 84.9583 69.75 86.2708 70.75 87.3125C71.75 88.3542 73.0417 88.875 74.625 88.875ZM31.375 28.75C30.625 28.75 29.9792 28.4583 29.4375 27.875C28.8958 27.2917 28.625 26.625 28.625 25.875C28.625 25.0417 28.9167 24.3542 29.5 23.8125C30.0833 23.2708 30.75 23 31.5 23H54.25C55 23 55.6458 23.2917 56.1875 23.875C56.7292 24.4583 57 25.125 57 25.875C57 26.7083 56.7292 27.3958 56.1875 27.9375C55.6458 28.4792 55 28.75 54.25 28.75H31.375ZM31.375 45C30.625 45 29.9792 44.7083 29.4375 44.125C28.8958 43.5417 28.625 42.875 28.625 42.125C28.625 41.375 28.9167 40.7292 29.5 40.1875C30.0833 39.6458 30.75 39.375 31.5 39.375H54.25C55 39.375 55.6458 39.6458 56.1875 40.1875C56.7292 40.7292 57 41.4167 57 42.25C57 43.0833 56.7292 43.75 56.1875 44.25C55.6458 44.75 55 45 54.25 45H31.375ZM68.625 29.375C67.7083 29.375 66.8958 29.0208 66.1875 28.3125C65.4792 27.6042 65.125 26.7917 65.125 25.875C65.125 24.9583 65.4792 24.1458 66.1875 23.4375C66.8958 22.7292 67.7083 22.375 68.625 22.375C69.5417 22.375 70.3542 22.7292 71.0625 23.4375C71.7708 24.1458 72.125 24.9583 72.125 25.875C72.125 26.7917 71.7708 27.6042 71.0625 28.3125C70.3542 29.0208 69.5417 29.375 68.625 29.375ZM68.625 45.25C67.7083 45.25 66.8958 44.8958 66.1875 44.1875C65.4792 43.4792 65.125 42.6667 65.125 41.75C65.125 40.8333 65.4792 40.0208 66.1875 39.3125C66.8958 38.6042 67.7083 38.25 68.625 38.25C69.5417 38.25 70.3542 38.6042 71.0625 39.3125C71.7708 40.0208 72.125 40.8333 72.125 41.75C72.125 42.6667 71.7708 43.4792 71.0625 44.1875C70.3542 44.8958 69.5417 45.25 68.625 45.25ZM11.25 88.875H63.5V76.125H5.875V83.375C5.875 84.9583 6.39583 86.2708 7.4375 87.3125C8.47917 88.3542 9.75 88.875 11.25 88.875ZM5.875 88.875V76.125V88.875Z" fill="#3A5295"/>
            </svg>
            <h3>Bills Included</h3>
            <p>Bills are included in all rent prices. No hidden fees.</p>
        </div>
    </div>
  )
}

export default Compare