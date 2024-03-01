import React from 'react'
import { ProductItem } from '..'
import Link from "next/link"
import { IoIosArrowRoundForward } from "react-icons/io";
const ProjectList = ({ productList }) => {
  return (
    <div className="">
      <Link href="/projects"
        className='flex justify-end items-center text text-lg font-mono hover:underline'>View all products <IoIosArrowRoundForward className='text-2xl text-primary' /></Link>

      <div className='my-9 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-3 gap-5'>

        {productList.map((item, index) => index <= 2 && (

          <div key={index}>
            <ProductItem product={item} />
          </div>

        ))}
      </div>
    </div>
  )
}

export default ProjectList