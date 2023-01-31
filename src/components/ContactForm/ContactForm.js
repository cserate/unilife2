import React from 'react'
import './ContactForm.css'

function ContactForm({headline, text}) {
  return (
    <div className='form-container'>
        <div className='form-heading'>
            <h3>{headline}</h3>
            <p>insert icon here</p>
            <p>{text}</p>
        </div>
        <div className='form-body'>
            <div className='form-area-left'>
                <h4>Name</h4>
                <input type='text' placeholder="Enter your name"></input>
                <h4>Email</h4>
                <input type='email' placeholder="Enter your email address"></input>
                <h4>Phone Number</h4>
                <input type="text" placeholder="Enter your phone number"></input>
            </div>
            <div className='form-area-right'>
                <h4>Message</h4>
                <textarea placeholder="Enter your message"></textarea>
                <button>Submit</button>
            </div>
        </div>
     </div>
  )
}

export default ContactForm