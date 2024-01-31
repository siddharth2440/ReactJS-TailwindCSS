import React from 'react'

const Contact = () => {
  return (
    <div className='bg-[#080814] h-[70vh] w-full'>
        <div data-aos="zoom-in" className="text-[#080814] bg-[#efefff] h-[85%] rounded-tr-[4rem] rounded-bl-[4rem] py-[2rem] m-auto relative top-[3rem] w-[90%]">
          <span className='text-[#080814] ml-[10rem] underline text-[2.3rem] font-[600] pt-[5rem]'>Contact Us</span>
          <form className='w-[90%] m-auto mt-9 h-[70%] flex items-start justify-center flex-col gap-4'>
          <div className="name">
            <label className='text-xl font-[600] ml-[4rem]'>Name : </label>
            <input type="text" placeholder='Name...' className='h-[2rem] w-[20rem] px-3 py-1 ml-[3rem] rounded-lg' />
          </div>
          <div className="email">
            <label className='text-xl font-[600] ml-[4rem]'>Email : </label>
            <input type="email" placeholder='Email...' className='h-[2rem] w-[20rem] px-3 py-1 ml-[3.4rem] rounded-lg' />
          </div>
          <div className="message flex items-center justify-center ">
            <label className='text-xl font-[600] ml-[4rem] self-start'>Message : </label>
            <textarea cols="30" rows="10" placeholder='Tell us about your query...' className=' h-[8rem] w-[20rem] px-3 py-1 ml-[1.7rem] rounded-lg'></textarea>
            {/* <input type="text" placeholder='Tell us about your query...' className='h-[2rem] w-[20rem] px-3 py-1 ml-[1.3rem]'/> */}
          </div>

          <button className='text-xl font-[600] border ml-[19rem] px-5 py-1 rounded-md text-[#fff] bg-[#080814]'>Send</button>
        </form>
        </div>
    </div>
  )
}

export default Contact;