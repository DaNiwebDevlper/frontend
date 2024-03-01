"use client"
import React, { useContext} from 'react'
import Link from "next/link"
import { CartContext } from '@/context/CartContext'
import { LuDollarSign } from 'react-icons/lu'

const Cart = () => {

    const { cart, setCart } = useContext(CartContext)


    return (

        <div className='absolute w-[250px] max-h-[300px] bg-white rounded-lg shadow-md right-10 top-[60px] mx-10 p-5 overflow-auto border-black/10 border'>
            <ul className="space-y-4">
                {cart.map((items) => (

                    <li className="flex items-center gap-1 border-b p-1 ">
                        <img
                            src={items?.product?.attributes?.banner?.data?.attributes?.url}
                            alt=""
                            className="size-14 object-cover overflow-hidden"
                        />

                        <div className='flex flex-col ml-2'>
                            <h3 className="text-md font-semibold text-gray-900 line-clamp-1">{items?.product?.attributes.title}</h3>

                            <p className='text-[12px] text-black/60'>{items?.product?.attributes.catagory}</p>
                            <div className="flex items-center text-sm">
                                <p><LuDollarSign className='text-black font-bold' /></p>
                                <p className='text-primary'>{items?.product?.attributes.pricing}</p>
                            </div>
                        </div>
                    </li>
                ))}


            </ul>
            <div className="space-y-4 text-center mt-6">

                <Link
                    href="/"
                    className="block rounded bg-primary px-5 py-2 text-md text-white transition hover:bg-blue-600"
                >
                    View Cart ({cart?.length})
                </Link>

                <Link
                    href="/"
                    className="inline-block text-sm text-gray-500 hover:underline underline-offset-4 transition"
                >
                    Continue shopping


                </Link>
            </div>
        </div>
    )
}

export default Cart