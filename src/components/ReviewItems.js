import React from "react";
import RatingStar from "./RatingStar";

export default function ReviewItems(props) {
    const { name, rating, review, image, date } = props;

    let d = new Date(date);
    let fd = d.toDateString().slice(4);

    return (
        <div className="flex bg-white h-[30rem] md:h-[14rem] justify-between shadow-gray-500   flex-col md:flex-row rounded-lg shadow-md w-full">
            {/* Left Image Section */}
            <div className="left h-[50%] md:h-full md:w-[35%] flex-shrink-0 self-center">
                <img src={image} alt="" className="object-cover h-[19rem] rounded-t-lg md:h-full self-center w-full md:rounded-s-lg" />
            </div>

            {/* Right Content Section */}
            <div className="right px-4 xl:w-[65%] w-full flex py-5 items-start flex-col justify-between">
                {/* Top Section: Rating and Date */}
                <div className="w-full space-y-2">
                    <div className="flex justify-between w-full flex-col space-x-0 space-y-2 xl:flex-row xl:space-y-0 xl:space-x-4">
                        <RatingStar rating={rating} />
                        <p className="text-sm text-gray-500 px-1">{fd}</p>
                    </div>
                    {/* Review Text */}
                    <p className="text-md font-medium text-gray-700 px-1">{review}</p>
                </div>

                {/* Bottom Section: Name */}
                <div className="w-full mt-auto">
                    <p className="text-base text-gray-600 px-1">{name}</p>
                </div>
            </div>
        </div>
    );
}
