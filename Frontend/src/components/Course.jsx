import React from 'react'
import list from "../../public/list.json"
import Cards from './Cards'
import { Link } from 'react-router-dom'

function Course() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
         <div className=' mt-28 items-center justify-center text-center'> 
          <h1 className=' text-2xl font-semibold md:text-4xl'>We re delighted to have you <span className='text-pink-500'> Here !</span> </h1>
          <p className='mt-12'>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque impedit id amet, distinctio maxime laboriosam repellat voluptate fugit, officia deserunt provident labore, nostrum dolorum eveniet? Repellat voluptas facere similique delectus.</p>
         
          <Link to='/'>
          <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
          </Link>
         </div>
         <div className='mt-12 grid grid-cols- md:grid-cols-4'>
          {
            list.map((item)=>(
              <Cards key={item.id} item={item}></Cards>
            ))
          }
         </div>

    </div>
    
    </>
  )
}

export default Course