import React from 'react'

 const header = () => {
  return (
    <div className='header'>
        <h2>martin</h2>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/aboutme">About Me</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/testmonies">Testmonies</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    </div>
  )
}
export default header;