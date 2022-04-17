import React from 'react';
import meet from '../images/client-meet.svg';
import databiz from '../images/client-databiz.svg';
import maker from '../images/client-maker.svg';
import audiophile from '../images/client-audiophile.svg';
import '../styles/hero.scss';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-img-container'></div>
        <article className='hero-info'>
          <div className='hero-info-up'>
            <h1>Make remote work</h1>
            <p>
              Get your team in sync,no matter your location.Streamline processes
              , create team rituals,and watch productivity soar.
            </p>

            <button className='btn hero-btn'> Learn More</button>
          </div>
          <div className='clients-container'>
            <div>
              <img src={databiz} alt='' />
              <img src={audiophile} alt='' />
              <img src={meet} alt='' />
              <img src={maker} alt='' />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Hero;
