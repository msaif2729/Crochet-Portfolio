import React from 'react'
import crochet from './crochet2.png'
import Svg from './Svg'

export default function Home() {
    return (
        <div className=' top-16 z-10 ' id='home'>
            <div className='flex pt-20 lg:pt-28 flex-col lg:justify-center lg:items-center lg:flex-row  lg:py-10  py-4 bg-orange-200 justify-evenly xl:px-20 px-4 '>
                <div className='left xl:px-20 xl:w-[50%] flex justify-center items-center '>
                    <img src={crochet} alt="" className=' ' />
                </div>
                <div className='right xl:py-10 xl:px-10 xl:w-[50%] flex justify-center flex-col items-center '>
                    <h1 className='text-6xl font-extrabold text-start  ' ><span className="text-red-600" >CROCHET</span></h1>
                    <h1 className='text-6xl font-extrabold text-center  ' ><span id='crochet'> Heaven.</span></h1>
                    <p className='text-xl font-normal py-3 text-center'>Welcome to Crochet Heaven, where creativity knows no bounds and every stitch is a step towards something beautiful. In our cozy corner of the crafting world, we believe that crochet is not just a hobby—it's a gateway to a realm of endless possibilities and heartfelt creations.   </p>
                </div>

            </div>

            <Svg color="orange" />

        </div>
    )
}
