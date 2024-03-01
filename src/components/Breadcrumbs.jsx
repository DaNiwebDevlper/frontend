import React from 'react'
import Link from "next/link"
import { HiHome } from "react-icons/hi2";
const Breadcrumbs = () => {
    return (
        <nav aria-label="Breadcrumb" className="flex">
            <ol className="shadow-md flex overflow-hidden rounded-lg border border-gray-200 text-gray-600">
                <li className="flex items-center">
                    <Link
                        href="/"
                        className="flex h-10 items-center gap-1.5 bg-blue-50 px-4 transition hover:text-primary"
                    >
                        <HiHome className='text-md' />

                        <span className="ms-1.5 text-sm font-medium"> Home </span>
                    </Link>
                </li>

                <li className="relative flex items-center">
                    <span
                        className="absolute inset-y-0 -start-px h-10 w-4 bg-blue-50 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180"
                    >
                    </span>

                    <Link
                        href="/product-detail"
                        className="flex h-10 items-center bg-white pe-4 ps-8 text-sm font-medium transition text-black/60 hover:text-primary"
                    >
                        Product Detail
                    </Link>
                </li>
            </ol>
        </nav>


    )
}

export default Breadcrumbs