import React from 'react'

export default function Items(props) {

  let { name, image } = props;


  return (
    <div className="flex h-[19rem] bg-white rounded-lg shadow-md shadow-gray-500 relative overflow-hidden transition-all duration-300 ease-in-out hover:scale-110">

      <span className=' absolute px-2 py-1 z-1 text-white text-lg bg-red-600 rounded-tl-lg '>{name}</span>

      <img src={image} alt="" className="object-cover w-full" />


    </div>

  )
}
