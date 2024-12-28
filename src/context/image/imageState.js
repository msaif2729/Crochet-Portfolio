import ImageContext from './imageContext';
import { storage } from "../../Firebase/Firebase"; // Path to your firebase.js
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useState } from 'react';

const ImageState = (props) => {
    const [imageurl, setURL] = useState(null);

    const handleUpload = (image) => {
        return new Promise((resolve, reject) => {
            if (image) {
                const storageRef = ref(storage, `images/${image.name}`);
                const uploadTask = uploadBytesResumable(storageRef, image);

                uploadTask.on(
                    "state_changed",
                    null,
                    (error) => {
                        console.error(error);
                        reject(error);
                    },
                    async () => {
                        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                        setURL(downloadURL);
                        // console.log("Image uploaded successfully! URL: " + downloadURL);
                        resolve(downloadURL); // Resolve the promise with the URL
                    }
                );
            } else {
                reject("No image provided");
            }
        });
    };

    return (
        <ImageContext.Provider value={{ imageurl, handleUpload }}>
            {props.children}
        </ImageContext.Provider>
    );
};

export default ImageState;
