import React from 'react'

 const header = () => {
  return (
    <div className='Header'>
        <h2>martin</h2>

        <div className='toggle-menu'>
            <span>hambager</span>
            <span></span>
        </div>

        <nav className='navbar'>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/aboutme">About Me</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/testmonies">Testmonies</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/awards">Awards</a></li>
                <li><a href="/myteam">My Team</a></li>
                <li><a href="/gallary">Gallary</a></li>

            </ul>
        </nav>
    </div>
  )
}
export default header;