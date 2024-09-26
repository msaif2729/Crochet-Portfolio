import React from 'react'

export default function ServiceItems(props) {
    const { name,email,phno,message,image } = props;


    return (
        <div className="flex bg-white md:h-[14rem] justify-between shadow-gray-500  flex-col md:flex-row rounded-lg shadow-md w-full">
            {/* Left Image Section */}
            <div className="left h-[50%] w-full md:h-full md:w-[35%] flex-shrink-0 self-center ">
                <img src={image} alt="" className="object-cover h-[19rem] rounded-t-lg md:h-full self-center w-full md:rounded-s-lg" />
            </div>

            {/* Right Content Section */}
            <div className="right px-4 xl:w-[65%] w-full flex py-5 items-start flex-col justify-between">
                {/* Top Section: Rating and Date */}
                <div className="w-full space-y-2">
                    <p className="text-md font-medium text-gray-700 px-1">{message}</p>
                </div>
                {/* Bottom Section: Name */}
                <div className="w-full mt-auto break-words">
                    <p className="text-base text-gray-600 px-1">{name}</p>
                    <p className="text-base text-gray-600 px-1">{email}</p>
                    <p className="text-base text-gray-600 px-1">{phno}</p>
                    
                    
                </div>
            </div>
        </div>
    );
}
