import React from 'react'
import { Link } from 'react-router-dom';
import {HashLink} from 'react-router-hash-link'
const Navbar = () => {
  return (
    <>
        <nav className='w-full h-[9vh] z-10 shadow-lg p-2 py-4 flex items-center justify-between text-[#6b6bde] bg-[#080814]'>
            <h1 className='text-3xl tracking-wider font-localFont font-[600]' data-aos="zoom-in">TechyStar.</h1>
            <main className='grid grid-cols-5 gap-3'>
                <Link to={"/#home"} data-aos='fade-in' className='text-center'>Home</Link>
                <Link to={"/contact"} data-aos='fade-in' className='text-center'>Contact</Link>
                <HashLink to={"/#about"} data-aos='fade-out' className='text-center'>About</HashLink>
                <HashLink to={"/#brands"} data-aos='fade-out' className='text-center'>Brands</HashLink>
                <Link to={"/services"} data-aos='fade-out' className='text-center'>Services</Link>
            </main>
        </nav>
    </>
    )
}

export default Navbar;