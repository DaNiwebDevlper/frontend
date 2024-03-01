import React from 'react'
import Link from "next/link"
const Header = () => {

    const backgroundImage = {
        position: "relative",
        background: ' url("/images/bg.svg") no-repeat',
        backgroundSize: "cover",
        backgroundPosition: " center",
        backgroundRepeat: "repeat",
    }

    return (
        <section className=" text-black min-h-screen" style={backgroundImage}>
            <div className="flex flex-col justify-center items-center md:items-start pl-9 min-h-[90vh] gap-5 text-center md:text-left">
                <h1
                    className="bg-gradient-to-r from-blue-600 to-cyan-300 bg-clip-text text-transparent text-4xl font-extrabold md:w-[50%] leading-9 sm:text-5xl "
                >
                    Digital Marketplace Access 

                   <span className='text-[42px]'> Free Source Code & Assets</span> 
                </h1>

                <p className="md:w-[36%] sm:text-md/relaxed leading-6 tracking-wider font-Nanum text-black/70 w-[90%]">
                    Now, you can access all the source code assets free, just click the projects that you want.
                </p>

                <div className="mt-8 flex flex-wrap justify-left gap-4 w-[90%]">
                    <Link

                        className="block w-[90%] rounded border border-blue-600 bg-blue-600 px-12 py-3 text-md font-medium text-white hover:bg-blue-700  focus:outline-none focus:ring active:text-opacity-75 sm:w-auto transition-all duration-300"
                        href="/"
                    >
                        Get Started
                    </Link>

                    <Link
                        className="block w-[90%] rounded border border-blue-300 hover:border-blue-600 px-12 py-3 text-md font-medium text-black/70  focus:outline-none focus:ring active:bg-blue-500 sm:w-auto  transition-all "
                        href="/"
                    >
                        Learn More
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Header