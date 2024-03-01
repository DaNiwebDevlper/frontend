import React from 'react'
import Image from "next/image"
const ProjectBanner = ({ product }) => {
  return (
    <div>
      {product ?
        <Image src={product?.attributes?.banner?.data?.attributes?.url}
          width={300}
          height={300}
          alt='banner'
          className='rounded-lg min-h-[300px] max-h-[500px] bg-cover w-[400px] shadow-md' /> :

        <div className="w-[400px] h-[350px] rounded-xl bg-gray-100 animate-pulse border"></div>}

    </div>
  )
}

export default ProjectBanner