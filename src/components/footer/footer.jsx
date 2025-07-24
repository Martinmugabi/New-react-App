import React from 'react'

const footer = () => {
  return (
    <>
    <div className='footer'>
        <h2>Footer Section</h2>
        <p>This is the footer content.</p>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <p>Follow us on social media for updates!</p>
        <div className='social-media'>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <p>© 2023 Your Company Name. All rights reserved.</p>
    </div>
    </>
  )
}
  export default footer