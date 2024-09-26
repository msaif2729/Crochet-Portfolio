import React, { useContext, useRef, useState } from 'react'
import Svg from './Svg'
import crochet from './arrow2.png'
import StarRating from './Star';
import Alert from './Alert';
import reviewContext from "../context/review/reviewContext"
import imageContext from "../context/image/imageContext";

export default function Review() {

  const [selectedImage, setSelectedImage] = useState({ baseimage: "", image: "" });
  const [review, setReview] = useState({ first: "", last: "", email: "", rating: "", reviewtext: "", image:"" })
  const [showalert, setShowalert] = useState(false);
  const reff = useRef(null);
  const disbutton = useRef(null);
  const context = useContext(reviewContext);
  const imgcontext = useContext(imageContext)
  const [rating,setRating] = useState(0);

  const handleChange = (e) => {
    setReview({ ...review, [e.target.name]: e.target.value })
  }

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if(!disbutton.current.disabled)
      disbutton.current.disabled = true;

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
          setSelectedImage({ baseimage: reader.result, image: file });
          disbutton.current.disabled = false;
      }

      reader.readAsDataURL(file);
  }
  };

  const handleRate = (rate)=>{
    setRating(rate);
    setReview((prevReview) => ({
      ...prevReview,
      rating: rate
    }));
  }

  const handleSubmit = async (e) => {
    
    // if(review.image)
    // {
      e.preventDefault()
      // console.log(review); 
      setShowalert(true)
      const data = await imgcontext.handleUpload(selectedImage.image);
      setReview((prevWork) => {
          const updatedReview = { ...prevWork, image: data };
          context.createReview(updatedReview);
          return updatedReview; 
      });
      setReview({ first: "", last: "", email: "", rating: "", reviewtext: "",image:"" })
      setTimeout(() => {
        setShowalert(false)
      }, 2000)
      setSelectedImage({ baseimage: "", image: "" })
      setRating(0)
  
      if (reff.current) {
        reff.current.value = '';
      }
    // }

  }

  return (
    <div className=' -z-50 relative ' id='review'>
      <div className='px-4 xl:px-20 pt-28 py-20 bg-lime-200'>
        <div className='flex flex-col xl:flex-row space-y-20 xl:space-y-0'>
          <div className='left xl:py-10 xl:px-10 xl:w-[50%] flex justify-center flex-col items-center xl:items-start'>
            <h1 className='text-5xl xl:text-6xl font-extrabold pb-5 text-center xl:text-start '>Leave a Review</h1>
            <div>
              <p className='text-xl font-normal py-3 xl:text-start text-center'>  We’d love to hear your thoughts on our crochet piece! Your feedback helps us improve and inspires others. Whether it’s a cozy accessory, home décor, or a special gift, let us know how it added beauty to your life and share any suggestions. <span className='text-red-600 font-bold'>Thank you</span> for supporting our craft!"</p>
              <img src={crochet} alt="" className='self-center hidden  xl:block pt-10' />
            </div>
          </div>
          <div className='right xl:py-10 xl:px-10 xl:w-[50%] flex justify-center flex-col items-center '>
            <div className=" w-full bg-white shadow-md rounded-lg p-8 z-[101]">
              <form onSubmit={handleSubmit}>
                <div className="space-y-4 flex flex-col justify-center ">
                  <div className='flex flex-col space-y-2 xl:flex-row xl:space-y-0 xl:space-x-2 justify-evenly '>
                    <div className='flex-1 '>
                      <label htmlFor="first" className="block text-sm font-medium text-gray-700">Fisrt Name</label>
                      <input
                        type="text"
                        id="first"
                        name="first"
                        required
                        value={review.first}
                        onChange={handleChange}
                        autoComplete='true'
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-200 focus:border-purple-200 sm:text-sm"
                      />
                    </div>
                    <div className='flex-1'>
                      <label htmlFor="last" className="block text-sm font-medium text-gray-700">Last Name</label>
                      <input
                        type="text"
                        id="last"
                        name="last"
                        autoComplete='true'
                        required
                        value={review.last}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-200 focus:border-purple-200 sm:text-sm"
                      />
                    </div>

                  </div>


                  <div className='flex flex-col space-y-2 xl:flex-row xl:space-y-0 xl:space-x-2 justify-evenly '>
                    <div className='flex-1 '>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        autoComplete='true'
                        required
                        value={review.email}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-200 focus:border-purple-200 sm:text-sm"
                      />
                    </div>
                    <div className='flex-1'>
                      <label htmlFor="rating" className="block text-sm font-medium text-gray-700 pb-2">Rating</label>
                      <StarRating sendRate={handleRate} rrating={rating}/>
                    </div>

                  </div>

                  <div>
                    <label htmlFor="reviewtext" className="block text-sm font-medium text-gray-700">Your Review</label>
                    <textarea
                      id="reviewtext"
                      name="reviewtext"
                      rows="4"
                      required
                      value={review.reviewtext}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-200 focus:border-purple-200 sm:text-sm"
                    ></textarea>
                  </div>

                  <div>
                    <label htmlFor="image" className="block text-sm font-medium text-gray-700">Upload your image here </label>
                    <input
                      type='file'
                      id="image"
                      name="image"
                      ref={reff}
                      required
                      onChange={handleImageChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-200 focus:border-purple-200 sm:text-sm"
                    ></input>
                  </div>

                  {selectedImage.baseimage && (
                    <div className='mt-4 flex justify-center'>
                      <img
                        src={selectedImage.baseimage}
                        alt="Selected"
                        className="w-64 h-64 object-cover rounded-md shadow-md"
                      />
                    </div>
                  )}

                  <div className='flex justify-center '>
                    <button
                      type="submit"
                      ref={disbutton}
                      disabled
                      className=" bg-red-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-200"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Svg color="lime" />
      {
        showalert && <Alert text="Submitted Successfully!!!!" />
      }
    </div>
  )
}
