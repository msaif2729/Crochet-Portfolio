import Svg from './Svg';
import WorkSlider from './WorkSlider';

export default function Work() {


  return (
    <div className='  -z-20 relative  ' id='work'>
      <div className='px-4 xl:px-20 pb-20 bg-green-200 pt-20 xl:pt-36  '>
        <h1 className='text-5xl xl:text-6xl text-center xl:text-start font-extrabold py-3  '>Our Work.</h1>
        <WorkSlider />
      </div>
      <Svg color="green" />
    </div>
  )
}
