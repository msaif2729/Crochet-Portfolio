import React from 'react'

export default function Footer() {
  return (
    <div className='bottom-0 w-full flex -z-[100] relative bg-yellow-100' id='footer'>
      <div className='w-full  flex flex-col md:flex-row  justify-between px-5 items-center pt-14 pb-5 mt-10' >

        <div className='flex flex-col justify-center items-center md:flex-row md:justify-start'>
          <h1>Developed By</h1>
          <span className="text-red-600 font-bold"> '❤️ Mohammed Saif Ansari ❤️'</span>

        </div>
        <div className='flex space-x-5 pt-5 md:pt-0 z-[200]'>
          <a href="https://www.linkedin.com/in/mohammed-saif27/"><i className="fa-brands fa-linkedin text-3xl hover:text-red-700 transition-all duration-200 hover:scale-125"></i></a>
          <a href="https://github.com/msaif2729"><i className="fa-brands fa-github text-3xl hover:text-red-700 transition-all duration-200 hover:scale-125"></i></a>
        </div>


      </div>
    </div>
  )
}
