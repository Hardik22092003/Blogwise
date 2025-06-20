import React from 'react'
import {assets} from '../assets/assets'
const Header = () => {
  return (
    <div className='mx-8 sm:mx-16 xl:mx-24 relative'>
        <div className='text-center mt-20 mb-8'>
            <div className='inline-flex items-center justify-center gap-4 px-6 py-1.5 
            mb-4 border border-primary/40 bg-primary/10 rounded-full text-sm text-primary'>
             <p>New Ai feature integrated</p>
             <img src={assets.star_icon} alt="" />
            </div>
            <h1 className="text-3xl sm:text-6xl font-semibold sm:leading-16 text-gray-700">Your own <span className='text-primary'>Blogging</span> <br /> Platform</h1>
            <p className="my-6 sm:my-8 max-w-2xl m-auto max-sm:text-sx text-gray-500 ">This is your space to think out loud,to share what matters,
                 and to write without filters. Whether it's one word or a thousand
                 your story starts right here.</p>

                 <form className='flex justify-between max-w-lg max-sm:scale-75 mx-auto
                 border border-gray-300 bg-white rounded overflow-hidden'>
                    <input type="text" className='w-full pl-4 outline-none' placeholder='Search for blogs' required/>
                    <button type='submit' className='bg-primary text-white px-8 py-2 m-1.5 rounded 
                    hover:scale-105 transition-all cursor-pointer'>Search</button>
                 </form>
            </div>
        <img src={assets.gradientBackground} alt="" className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1] opacity-50 pointer-events-none'/>    
      
    </div>
  )
}

export default Header
