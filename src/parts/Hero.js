import React from 'react';

import Fade from 'react-reveal/Fade';

import ImageHero from 'assets/Images/picture.svg';
import ImageHeroFrame from 'assets/Images/frame.svg';
import IconCities from 'assets/Images/Icons/ic_cities.svg';
import IconTraveler from 'assets/Images/Icons/ic_traveler.svg';
import IconTreasure from 'assets/Images/Icons/ic_treasure.svg';

import Button from 'elements/Button';
import formatNumber from 'utils/formatNumber';

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: 'smooth',
    });
  }
  return (
    <Fade bottom>
      <section className='container pt-4'>
        <div className='row align-item-center'>
          <div className='col-auto pr-5' style={{ width: 530 }}>
            <h1 className='font-weight-bold line-height-1 mb-3'>
              Forget Busy Work, <br />
              Start Next Vacation
            </h1>
            <p className='mb-4 font-weight-light text-gray-500 w-75' style={{ lineHeight: '170%' }}>
              We provide what you need to enjoy your holiday with family. Time to make another memorable moments.
            </p>
            <Button className='btn px-5' hasShadow isPrimary onClick={showMostPicked}>
              Show Me Now
            </Button>

            <div className='row' style={{ marginTop: 80 }}>
              <div className='col-auto' style={{ marginRight: 35 }}>
                <img width='36' height='36' src={IconTraveler} alt={`${props.data.travelers} travelers`} />
                <h6 className='mt-3'>
                  {formatNumber(props.data.travelers)} <span className='text-gray-500 font-weight-light'>travelers</span>
                </h6>
              </div>
              <div className='col-auto' style={{ marginRight: 35 }}>
                <img width='36' height='36' src={IconTreasure} alt={`${props.data.treasures} treasures`} />
                <h6 className='mt-3'>
                  {formatNumber(props.data.treasures)} <span className='text-gray-500 font-weight-light'>treasures</span>
                </h6>
              </div>
              <div className='col-auto'>
                <img width='36' height='36' src={IconCities} alt={`${props.data.cities} cities`} />
                <h6 className='mt-3'>
                  {formatNumber(props.data.cities)} <span className='text-gray-500 font-weight-light'>cities</span>
                </h6>
              </div>
            </div>
          </div>
          {/* Right */}
          <div className='col-6 pl-5 pt-1'>
            <div style={{ width: 520, height: 410 }}>
              <div>
                <img src={ImageHero} alt='Home' className='img-fluid position-absolute' style={{ margin: '-30px 0 0 -30px', zIndex: 1 }} />
                <img src={ImageHeroFrame} alt='Frame' className='img-fluid position-absolute' style={{ margin: '0 -15px -15px 0' }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
