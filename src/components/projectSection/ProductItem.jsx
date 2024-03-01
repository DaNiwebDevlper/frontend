import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { LuDollarSign } from "react-icons/lu";

const ProductItem = ({ product }) => {
    return <Link href={`/project-detail/${product.id}`}>
        <div className='hover:border border-primary rounded-lg transition-all cursor-pointer'>
            <Image
                src={product?.attributes?.banner?.data.attributes?.url}
                width={400}
                height={300}
                alt='banner'
                className='rounded-t-lg md:h-[200px] h-[150px] object-cover' />
            <div className="flex justify-between items-center bg-slate-100 rounded-b-lg shadow-md md:px-9 px-3 py-5">
                <div className="" >
                    <h2 className='text-xl font-semibold text-black/70'>{product.attributes.title}</h2>
                </div>
                <h2 className='text-xl font-bold text-primary/70 font-mono flex  items-center'><LuDollarSign className='text-xl text-black font-bold' />{product.attributes?.pricing}</h2>
            </div>
        </div>

    </Link>
}

export default ProductItem