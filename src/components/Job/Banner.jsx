import React, { useState } from 'react'
import { FiMapPin, FiSearch } from 'react-icons/fi'


const Banner = ({query, handleInputChange}) => {

  return (
    <div className=" w-[80%] mx-auto items-start pb-[2rem] border-b-2 border-white border-opacity-10 py-14" >
        <h1 className='text-5xl font-bold text-primary mb-3 text-blue-950'>Find Your New Job Today</h1>
        <p className='text-lg text-blue-900 mb-8'>we can help you with that</p>

        <form>
          <div className='flex justify-start md:flex-row flex-col mad:gap-0 '>
            <div className='flex md:rounded-s-md rounded shadow-sm ring-1 ring-inset 
            focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/2 w-full'>
              <input type="text" name='title' id='title' placeholder='what position your looking for ?' className='block flex-1 border-0 bg-transparent py-1.5 pl-8 
              text-gray-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6'  
              onChange={handleInputChange}
              value={query} 
              />
              <FiSearch className='absolute mt-2.5 ml-2 text-gray-400'/>
            </div>
            <div className='flex md:rounded-s-none rounded shadow-sm ring-1 ring-inset 
            focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/3 w-full'>
              <input type="text" name='title' id='title' placeholder='Location ?' className='block flex-1 border-0 bg-transparent py-1.5 pl-8 
              text-gray-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6'
              />
              <FiMapPin className='absolute mt-2.5 ml-2 text-gray-400'/>
            </div>
            <button type='submit' className=' bg-blue-950 py-2 px-8 text-white md:rounded-s-none rounded'>Search</button>
          </div>
        </form>
    </div>
  )
}

export default Banner