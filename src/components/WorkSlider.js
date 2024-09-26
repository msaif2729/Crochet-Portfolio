import React, { useContext, useEffect, useState } from 'react';
import Items from './Items';
import Slider from 'react-slick';
import workContext from '../context/work/workContext';


export default function WorkSlider() {
  const [work, setWork] = useState([]);
  const context = useContext(workContext)


  useEffect(() => {
    const fetchWork = async () => {
      if (context && context.getWorks) {
        const getworks = await context.getWorks();
        // console.log(getworks);
        setWork(getworks || []);
      } else {
        console.error('Context or getWorks method is undefined');
      }
    };

    fetchWork();
  },[]);


  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="relative px-5 py-5 fles">
      {
        work.length > 0 ? (
          <Slider {...settings}>
            {work.map((item, index) => (
              <div key={index} className="flex justify-center items-center p-4 overflow-hidden">
                <Items name={item.name} image={item.image} />
              </div>
            ))}
          </Slider>
        ) : (
          <p className='text-center font-extrabold text-3xl '>No Work Available</p>
        )
      }

    </div>
  );
}
