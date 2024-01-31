import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import {} from 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from '../assets/1.png'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
const Services = () => {
  return (
    <Carousel
    infiniteLoop
    autoPlay
    showStatus={false}
    showArrows={false}
    interval={1000}
    showThumbs={false}
    showIndicators={false}
    
    >
        <div className='h-[80vh] bg-[#080814]'>
        {/* <div className='h-[80vh] '> */}
            <img src="../src/assets/1.png" className=' w-[70vw] bg-[#080814]' alt="img1" />
            <p>Full Stack</p>
        </div>
        <div className='h-[80vh] bg-[#080814]'>
            <img src="../src/assets/3.jpg" alt="img1" className='w-[70vw] bg-[#080814]' />
            <p>Full Stack</p>
        </div>
        <div className='h-[80vh] m-auto bg-[#080814]'>
            <img src={img1} alt="img3" className='w-[70vw] bg-[#080814] ' />
            <p>Full Stack</p>
        </div>
    </Carousel>

  )
}

export default Services;