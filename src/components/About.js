import React from 'react'
import crochet from './croc.png'
import Svg from './Svg'

export default function About() {
    return (
        <div className='-z-10 relative  ' id='about'>
            <div className='flex pt-20 lg:pt-28 flex-col space-y-5 lg:justify-center lg:items-center lg:flex-row  lg:py-10  py-4 bg-blue-200 justify-evenly xl:px-20 px-4  '>
                <div className='left xl:py-10 xl:px-10 xl:w-[50%] flex justify-center flex-col items-center xl:items-start'>
                    <h1 className='text-5xl xl:text-6xl font-extrabold  '>About. </h1>
                    <p className='text-xl font-normal py-3 xl:text-start text-center'>I’m thrilled to share my passion for crochet with you through this portfolio. My name is <span className='text-red-600 font-bold'> Ansari Sana</span>, and crochet is more than just a hobby for me—it's a true love affair with yarn and creativity. This portfolio is a showcase of my journey, skills, and the countless hours of joy and dedication I've poured into my craft.</p>
                </div>
                <div className='right px-4 xl:px-20 xl:w-[50%] items-center flex flex-col xl:flex-col'>
                    <h1 className='text-5xl xl:text-7xl text-center font-extrabold  ' id='hook'>Hand-hooked goods made with love ! </h1>
                    <img src={crochet} alt="" className='self-center' />
                </div>

            </div>
            <Svg color="blue" />
        </div>
    )
}
