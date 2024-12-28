import React from 'react'

export default function RatingStar({rating=0}) {
  return (
    <div className='flex'>
      {Array.from({ length: 5 }, (_, index) => (
        <label key={index}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={index + 1 <= rating ? "gold" : "gray"}
            viewBox="0 0 24 24"
            className="w-6 h-6 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            />
          </svg>
        </label>
      ))}
    </div>
  )
}
