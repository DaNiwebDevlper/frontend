import React from 'react'
import Link from "next/link"
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiUpwork } from "react-icons/si";
const Footer = () => {
  return (
    <>
      <footer className="flex py-7 justify-around items-center bg-neutral-100 text-center text-black">

      <div className="text-lg font-mono">
        <p><span className='text-xl font-semibold'>©</span>2023 Copyright:<span className='text-primary font-semibold'>Danish</span></p>
      </div>
        {/* ////////////--Social-Icons---////////////// */}
        <div className="flex gap-6 text-2xl">
          <Link href="/" target='_blank'>
          <FaGithub/>
          </Link>
          <Link href="/" target='_blank'>
          <FaLinkedin className='text-primary'/>
          </Link>
          <Link href="/" target='_blank'>
          <SiUpwork className='text-teal-500'/>
          </Link>
        </div>
        
      </footer>
    </>

  )
}

export default Footer