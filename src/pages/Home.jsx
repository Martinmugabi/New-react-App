import React from 'react';
import portfolioImage from '../assets/IMG_3683_.jpg'; // Make sure image is in src/assets

const Home = () => {
  return (
    <div className='home'>
      <h1>Welcome to My Portfolio</h1>
      <p>This is the home page where you can find an overview of my work and achievements.</p>
      <img
        src={portfolioImage}
        alt='Portfolio'
        style={{ width: '100%', maxWidth: '500px' }}
      />
    </div>
  );
}

export default Home;
