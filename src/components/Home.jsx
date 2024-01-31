import React from 'react'
import {AiFillGoogleCircle,AiFillFacebook,AiFillGithub,AiFillLinkedin } from 'react-icons/ai'
const Home = () => {
  return (
    <div className="home bg-[#080814] min-h-screen w-full" id='home'>
      <div className="prt1 min-h-[91vh] bg-home w-full">
        <div className="heading absolute top-[20%] right-2" data-aos="zoom-in-up">
          <h1 className='tracking-wider text-[12rem] font-localFont text-[#ffebcf]'>TechyStar.</h1>
        </div>
        <div className="para text-2xl absolute top-[52%] right-[5%] " data-aos="zoom-in-left">
          <p className='text-[#efefff] tracking-wide'>Solution to all your problems</p>
        </div>
      </div>
      <div className="prt1 bg-[#080814] min-h-[50vh] grid grid-cols-2 items-center">
        <img src="../src/assets/2.webp" alt="" className='animate-pulse inline-block' />
        <p data-aos="zoom-in-out" className='text-[#efefff] text-end text-[2rem] w-[45vw] relative right-[3rem] p-2 leading-[3rem] font-[600]'>We are your one and only solution to teach the problems 
          you face
          everyday. <br /> We are leading tech company whose aim is to 
          increase the <br />
          problem solving ability in children.
        </p>
      </div>
      <div className="whoweare bg-[#3B1175] boxShadow h-[80vh] shadow-2xl mt-[3rem] w-[60%] rounded-tr-[5rem] rounded-br-[5rem] border-[blue] text-[#efefff]" id='about'>
        <div className="para text-[#efefff] pt-[15%]">
          <h1 className='text-4xl font-[500] text-center' data-aos="zoom-in-out">Who we are?</h1>
        </div>
        <div className="ans mt-9">
          <p data-aos="zoom-in-out" className='w-[70%] m-auto text-start leading-[1.5rem] text-[1.2rem]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla ab, vel maiores nisi ratione, reiciendis quis, error voluptates mollitia modi nemo qui numquam. Pariatur, in molestias recusandae suscipit facilis beatae modi iure tempore quis esse minima, natus mollitia corrupti autem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque neque, iure et magni labore perferendis voluptatibus culpa ea, fugit quod, libero facilis nostrum autem. Sint, eveniet voluptatum dolores blanditiis ab possimus ullam maiores animi tempore aliquam nam, consectetur voluptatem facilis rerum! Quos facere asperiores porro, recusandae nam aliquid fugiat iusto!</p>
        </div>
      </div>

      <div className='mt-[10rem] h-[65vh] w-full bg-[#3B1175]' id='brands'>
          <h1 className='text-center text-[5rem] underline tracking-wider relative top-[10%] font-[600] text-[#efefff]'>Brands</h1>
          <div  data-aos-mirror="true" className='flex gap-9 items-center mt-[10rem] justify-center'>
            <div data-aos="flip-up" className="google px-5 bg-[#efefff] cursor-pointer py-5  text-center flex items-center flex-col justify-center rounded-[50%] "><AiFillGoogleCircle className='text-4xl' /><p>Google</p></div>
            <div data-aos="flip-right" className="facebook px-4 bg-[#efefff] py-5 cursor-pointer flex items-center flex-col justify-center rounded-[50%]"><AiFillFacebook className='text-4xl'/>Facebook</div>
            <div data-aos="flip-down" className="github px-5 py-5 bg-[#efefff] cursor-pointer flex items-center flex-col justify-center rounded-[50%]"><AiFillGithub className='text-4xl'/>GitHub</div>
            <div data-aos="flip-left" className="linkedin px-5 py-5 bg-[#efefff] cursor-pointer flex items-center flex-col justify-center rounded-[50%]"><AiFillLinkedin className='text-4xl'/>Linkedln</div>
          </div>
      </div>

      <br /><br />
    </div>
  )
}

export default Home;