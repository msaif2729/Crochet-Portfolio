import React from 'react'

export default function Svg({color}) {

  const fillColor = `fill-${color}-200`;
  return (
    <div className='relative'>
      <svg viewBox="0 0 487 30" preserveAspectRatio="none" className="w-full rotate-180 absolute z-20 -translate-y-1">
    <path
        d="
            M0,20 
            C12.5,10 25,10 37.5,20 
            C50,30 62.5,30 75,20
            C87.5,10 100,10 112.5,20
            C125,30 137.5,30 150,20
            C162.5,10 175,10 187.5,20
            C200,30 212.5,30 225,20
            C237.5,10 250,10 262.5,20
            C275,30 287.5,30 300,20
            C312.5,10 325,10 337.5,20
            C350,30 362.5,30 375,20
            C387.5,10 400,10 412.5,20
            C425,30 437.5,30 450,20
            C462.5,10 475,10 487.5,20
            L487,45 L0,45 Z"
        className={`${fillColor}`}
    />
</svg>
    </div>
  )
}
