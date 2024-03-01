import React from 'react'

const ProductListLoading = () => {
    return (
        <div className='grid sm:grid-cols-3 grid-cols-2 gap-y-7 m-auto place-items-center'>
            <div className=" sm:h-[250px] h-[150px] w-[160px] sm:w-[350px] bg-gray-200 rounded-md shadow-sm animate-pulse border"></div>
            <div className=" sm:h-[250px] h-[150px] w-[160px] sm:w-[350px] bg-gray-200 rounded-md shadow-sm animate-pulse border"></div>
            <div className=" sm:h-[250px] h-[150px] w-[160px] sm:w-[350px] bg-gray-200 rounded-md shadow-sm animate-pulse border"></div>
        </div>
    )
}

export default ProductListLoading