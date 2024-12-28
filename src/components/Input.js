import React, { useContext, useState } from "react";
import imageContext from "../context/image/imageContext";

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [imageurl,setURL] = useState(null);
  const context = useContext(imageContext)


  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      console.log(e.target.files[0])
    }
  };

  const handleUploads= async () => {
    if (image) {
     const data  = await context.handleUpload(image)
     console.log("Input.js : ",data)

    }
  };
  

  return (
    <div className="p-10 ">
      <input type="file" onChange={handleImageChange} />
      <button className="bg-red-500 hover:bg-red-700 px-4 py-2 text-white font-bold rounded-lg" onClick={handleUploads}>Upload Image</button>
      <img src={imageurl} alt="erorr" />
    </div>
  );
};

export default ImageUpload;
