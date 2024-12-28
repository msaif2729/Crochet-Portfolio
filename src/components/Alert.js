import React, { useEffect, useRef } from 'react';

export default function Alert({ text }) {
    const reff = useRef(null);

    useEffect(() => {
        if (reff.current && text !== null) {
            // Show the alert
            reff.current.style.display = 'block';

            // Hide the alert after 2 seconds
            const timeout = setTimeout(() => {
                if (reff.current) {
                    reff.current.style.display = 'none';
                }
            }, 2000);

            // Cleanup timeout if the component unmounts or text changes
            return () => clearTimeout(timeout);
        }
    }, [text]);

    return (
        <div
            className="fixed bottom-5 right-5 bg-red-500 text-white py-2 px-4 rounded-md  shadow-lg z-[1000]"
            ref={reff}
            style={{ display: 'none' }} // Initially hidden
        >
            {text}
        </div>
    );
}
