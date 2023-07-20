import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import image1 from './images/soccer-field.jpg';
import image2 from './images/basketball-field.jpg';
import image3 from './images/hockey-fieldd.jpg';
import HeadCenter from './DefaultComp/HeadCenter'
import { useTranslation } from 'react-i18next';
import zwa9 from '../zwa9.css';

const SimpleSlider = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: (
        <div>
          <div className="next-slick-arrow"> ► </div>
        </div>
      ),
      prevArrow: (
        <div>
          <div className="prev-slick-arrow"> ◄ </div>
        </div>
      ),
    };

    const { t } = useTranslation();

    return (
      <div>
        <HeadCenter centerheading={t('stadiums')}/>
        <Slider {...settings}>
          <div>
            <img className="carousel-image" src={image1} alt="Soccer field" />
          </div>
          <div>
            <img className="carousel-image" src={image2} alt="Basketball field" />
          </div>
          <div>
            <img className="carousel-image" src={image3} alt="Hockey field" />
          </div>
        </Slider>
      </div>
    );
}

export default SimpleSlider;

