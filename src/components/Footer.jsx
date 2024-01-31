import React from 'react'
import {AiFillYoutube,AiFillFacebook,AiFillInstagram,AiOutlineWhatsApp} from 'react-icons/ai'
const Footer = () => {
  return (
    <div className='bg-[#080814] text-[#efefff] flex items-center justify-between px-5 pb-3'>
        <div className="rightSide pl-[4rem]">
            <h3 className='text-[5rem] font-[500] font-localFont'>TechyStar.</h3>
            <p>@All rights reserved</p>
        </div>
        <div className="leftSide pl-[4rem]">
            <div className="top text-2xl font-[600] mr-[6rem]"><p>Follow Us</p></div>
            <div className="bottom flex flex-col items-start justify-around">
                <a href="#" target='blank' data-aos='flip-up' className='text-center flex items-center gap-2 ml-5 mt-4'><AiFillYoutube className='text-[#ff3a3a]'/>Youtube</a>
                <a href="#" target='blank' data-aos='flip-up' className='text-center flex items-center gap-2 ml-5 mt-4'><AiFillInstagram className='text-[#de52f7]'/>Instagram</a>
                <a href="#" target='blank' data-aos='zoom-in' className='text-center flex items-center gap-2 ml-5 mt-4'><AiFillFacebook className='text-[#4859f4]'/>Facebook</a>
                <a href="#" target='blank' data-aos='zoom-in' className='text-center flex items-center gap-2 ml-5 mt-4'><AiOutlineWhatsApp className='text-[#43ff6f]'/>WhatsApp</a>
            </div>
        </div>
    </div>
  )
}

export default Footer;