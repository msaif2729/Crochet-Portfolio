import { useContext, useEffect, useState } from 'react';
import ReviewItems from './ReviewItems';
import Slider from 'react-slick';
import reviewcontext from '../context/review/reviewContext';

export default function ItemSlider() {
  const [notes, setReviews] = useState([]);
  const context = useContext(reviewcontext);  

  useEffect(() => {
    const fetchReviews = async () => {
      if (context && context.getReview) {
        const reviews = await context.getReview(); 
        setReviews(reviews || []); 
      } else {
        console.error('Context or getReview method is undefined');
      }
    };

    fetchReviews();
  },[]);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
    <div className="relative px-5 py-5">
      {notes.length > 0 ? (
        <Slider {...settings}>
          {notes.map((fruit, index) => (
            <div key={index} className="flex justify-center items-center p-4 overflow-hidden">
              <ReviewItems 
                name={fruit.name} 
                rating={fruit.rating} 
                review={fruit.reviewtext} 
                date={fruit.date} 
                image={fruit.image} 
              />
            </div>
          ))}
        </Slider>
      ) : (
        <p className='text-center font-extrabold text-3xl '>No Reviews Available.</p> // Message or alternative content when no reviews are present
      )}
    </div>
  );
}
