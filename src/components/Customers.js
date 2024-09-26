import React from 'react'
import Svg from './Svg'
import ItemSlider from './ItemSlider'

export default function Customers() {
    return (
        <div className='-z-[25] relative ' id='customer'>
            <div className='px-4 xl:px-20 pb-20 bg-cyan-200 pt-20 xl:pt-36  '>
                <h1 className='text-5xl xl:text-6xl text-center xl:text-start font-extrabold py-5  '>Our Happy Customers.</h1>
                <ItemSlider />
            </div>
            <Svg color="cyan" />
        </div>
    )
}
