import React from 'react';
import '../App.css';  

export default function About() {
  return (
    <div className='about'>
      <h1>About Me</h1>
      <p>Welcome to my portfolio! I am a passionate developer with a love for creating innovative solutions. My journey in tech has been driven by curiosity and a desire to learn continuously. I enjoy collaborating with others and am always looking for new challenges to tackle.</p>
      <p>In my free time, I like to explore new technologies, contribute to open-source projects, and share my knowledge with the community. I believe in the power of technology to make a positive impact on the world.</p>
      <p>Feel free to connect with me through my social media or contact page. I look forward to hearing from you!</p>
      <img
        src={require('../assets/IMG_3683_.jpg')}
        alt='Profile'
        style={{ width: '100%', maxWidth: '300px' }}
      />
      <h3>Social Media</h3>
      <div className='social-media'>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  );
}



