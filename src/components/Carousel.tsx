import React, {FC, useEffect, useState} from 'react';
import Slider from 'react-slick';
import img1 from '../images/cat1.png';
import img2 from '../images/cat2.png';
import img3 from '../images/cat3.png';
import img4 from '../images/cat4.png';
import Image from 'next/image';

const Carousel: FC = () => {
  const [show, setShow] = useState(0);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      const SWeight = document.documentElement.clientWidth;
      if (SWeight > 1400) {
        setShow(3);
      } else if (SWeight < 1400 && SWeight > 800) {
        setShow(2);
      } else {
        setShow(1);
      }
    });
    resizeObserver.observe(document.documentElement);
  }, []);
  const slickSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: show,
    prevArrow: <></>,
    nextArrow: <></>,
  };
  return (
    <div>
      {/* @ts-ignore */}
      <Slider {...slickSettings}>
        <div className="w-80 px-4">
          <Image alt="" src={img1} priority className="w-full lg:h-120" />
        </div>
        <div className="w-80 px-4">
          <Image alt="" src={img2} priority className="w-full lg:h-120" />
        </div>
        <div className="w-80 px-4">
          <Image alt="" src={img3} priority className="w-full lg:h-120" />
        </div>
        <div className="w-80 px-4">
          <Image alt="" src={img4} priority className="w-full lg:h-120" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
