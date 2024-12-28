import React, { useContext, useRef, useState } from "react";
import Alert from "./Alert";
import workContext from "../context/work/workContext";
import ServiceSlider from "./ServiceSlider";
import ServiceState from "../context/service/serviceState";
import imageContext from "../context/image/imageContext";

export default function Adminpage() {

    const [work, setWork] = useState({ name: "", image: "" });
    const [selectedImage, setSelectedImage] = useState({ baseimage: "", image: "" });
    const reff = useRef(null)
    const disbutton = useRef(null)
    const [showalert, setShowalert] = useState(false)
    const context = useContext(workContext)
    const imgcontext = useContext(imageContext)
    let show = false;

    const handleSubmit = async (e) => {
        e.preventDefault();
        show = true;
        if (show) {
            setShowalert(true)
            const data = await imgcontext.handleUpload(selectedImage.image);
            setWork((prevWork) => {
                const updatedWork = { ...prevWork, image: data };
                context.createWork(updatedWork);
                return updatedWork; 
            });
            setWork({ name: "", image: "" })
            setSelectedImage({ baseimage: "", image: "" })
            if (reff.current) {
                reff.current.value = '';
            }
            setTimeout(() => {
                setShowalert(false)
                show = false
            }, 3000)
        }
    };

    const handleChange = (e) => {
        setWork({ ...work, [e.target.name]: e.target.value })
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (!disbutton.current.disabled)
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

    return (
        <div className="bg-gray-200 w-full">
            <h1 className="bg-yellow-200 font-extrabold text-3xl xl:text-5xl text-center p-5   ">
                Admin Page
            </h1>
            <div className=" px-5 bg-gray-200 py-5">
                <h1 className=" font-extrabold text-3xl xl:text-5xl  p-5   ">
                    Your Works
                </h1>
                <div className=" bg-white w-full shadow-md rounded-lg p-8 ">
                    <form onSubmit={handleSubmit}>
                        <div className=" ">
                            <div className="flex-1 pb-4">
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={work.name}
                                    onChange={handleChange}
                                    autoComplete="true"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-200 focus:border-purple-200 sm:text-sm"
                                />
                            </div>
                            <div>
                                <label htmlFor="image" className="block text-sm font-medium text-gray-700">Upload your image here </label>
                                <input
                                    type='file'
                                    id="image"
                                    ref={reff}
                                    name="image"
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

                            <div className='flex justify-center pt-8 '>
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
                <h1 className=" font-extrabold text-3xl xl:text-5xl  p-5   ">
                    Services
                </h1>
                <ServiceState>
                    <ServiceSlider />
                </ServiceState>
            </div>
            {
                showalert && <Alert text="Submitted Successfully!!!!" />
            }
        </div>
    );
}
