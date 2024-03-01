import React from 'react'

const Loading = () => {
    return (
        < div className="flex flex-col gap-5">

            {/* //////////---Skelton loading effect---//////////// */}

            <div className=" h-[50px]  bg-gray-100 animate-pulse border"></div>
            <div className=" h-[150px]  bg-gray-100 animate-pulse border"></div>
            <div className="h-[50px] w-[350px] bg-gray-100 animate-pulse border"></div>
            <div className="flex justify-between">
                <div className=" h-[50px] w-[150px] bg-gray-100 animate-pulse border"></div>
                <div className=" h-[50px] w-[150px] bg-gray-100 animate-pulse border"></div>
            </div>
        </div>
    )
}

export default Loading