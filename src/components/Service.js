import React, { useContext, useRef, useState } from 'react'
import Svg from './Svg';
import crochet from './arrow1.png'
import serviceContext from "../context/service/serviceContext"
import imageContext from "../context/image/imageContext";
import Alert from './Alert';


export default function Service() {

  const [selectedImage, setSelectedImage] = useState({ baseimage: "", image: "" });
  const [service, setService] = useState({ first: "", last: "", email: "", phno: "", message: "", image:"" })
  const [showalert, setShowalert] = useState(false);

  const disbutton = useRef(null)
  let fieldvalid = false;

  const context = useContext(serviceContext);
  const imgcontext = useContext(imageContext)

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

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let errorsCopy = { ...errors };

    if (name === "phno") {
      const phoneRegex = /^[0-9]{10}$/;
      if (!phoneRegex.test(value)) {
        errorsCopy.phno = "Invalid phone number. Please enter 10 digits.";
        fieldvalid = false;
      } else {
        delete errorsCopy.phno;
        fieldvalid = true;
      }
    }

    setErrors(errorsCopy);
  };

  const handleChange = (e) => {
    setService({ ...service, [e.target.name]: e.target.value })
  }

  const reff = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    validateField("phno", service.phno);

    if (fieldvalid)
    {
      const data = await imgcontext.handleUpload(selectedImage.image);
      setService((prevWork) => {
          const updatedWork = { ...prevWork, image: data };
          context.createService(updatedWork);
          return updatedWork; 
      });
        setShowalert(true)
        setService({first: "", last: "", email: "", phno: "", message: "", image:""  })
        setTimeout(()=>{
          setShowalert(false)
        },2000)
        setSelectedImage({ baseimage: "", image: "" })

      if (reff.current) {
        reff.current.value = '';
      }
    }
  }

  return (
    <div className=' -z-[40] relative  ' id='service'>
      <div className='px-4 xl:px-20 pb-28 bg-purple-200 pt-20 xl:pt-36 '>
        <div className='flex flex-col xl:flex-row space-y-20 xl:space-y-0'>
          <div className='left xl:py-10 xl:px-10 xl:w-[50%] flex justify-center flex-col items-center xl:items-start'>
            <h1 className='text-5xl xl:text-6xl font-extrabold pb-5 text-center xl:text-start '>Our Service</h1>
            <div>
              <p className='text-xl font-normal py-3 xl:text-start text-center'> Have a unique idea in mind for a crochet piece? Whether it's a personalized gift, a cozy accessory, or something special for your home, we’d love to bring your vision to life! Use the form to <span className='text-red-600 font-bold'>share your idea </span> with us, and we’ll work closely with you to create the perfect handmade crochet item tailored to your style and needs.</p>
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
                        value={service.first}
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
                        value={service.last}
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
                        value={service.email}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-200 focus:border-purple-200 sm:text-sm"
                      />
                    </div>
                    <div className='flex-1'>
                      <label htmlFor="phno" className="block text-sm font-medium text-gray-700">Phone Number</label>
                      <input
                        type="tel"
                        id="phno"
                        name="phno"
                        required
              
                        value={service.phno}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-200 focus:border-purple-200 sm:text-sm"
                      />
                      {errors.phno && <p className="text-red-500 text-sm">{errors.phno}</p>}
                    </div>

                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Crochet Idea</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      required
                      value={service.message}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-200 focus:border-purple-200 sm:text-sm"
                    ></textarea>
                  </div>

                  <div>
                    <label htmlFor="image" className="block text-sm font-medium text-gray-700">Upload your image here </label>
                    <input
                      type='file'
                      id="image"
                      ref={reff}
                      required
                      name="image"
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
                      disabled
                      ref={disbutton}
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
      <Svg color="purple" />
      {
        showalert && <Alert text="Submitted Successfully!!!!"/>
      }
      
    </div>
  )
}
