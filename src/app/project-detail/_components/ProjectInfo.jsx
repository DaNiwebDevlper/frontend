"use client"

import { LuDollarSign } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { MdNotInterested } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { Loading } from "@/components";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import GlobalApi from "@/utils/GlobalApi";
import { useContext, useEffect } from "react";
import { CartContext } from "@/context/CartContext";


const ProjectInfo = ({ product }) => {


    // check the user login before adding any products in cart
    const { user } = useUser()
    const router = useRouter()

    const { cart, setCart } = useContext(CartContext)


    const addToCart = () => {

        if (!user) {
            router.push('/sign-in')
        } else {
            // building logic for add the products in Cart

            const data = {
                data: {
                    userName: user.fullName,
                    email: user.primaryEmailAddress.emailAddress,
                    products: product?.id
                }
            }
            GlobalApi.addToCart(data).then(resp => {
                if (resp) {
                    setCart(cart => [...cart,
                    {
                        id: resp?.data?.id,
                        product: product
                    }])
                }
            })

        }
        return;
    }
    return (
        <div className="sm:w-[50%] w-[90%]">
            {product ?
                <div className='flex flex-col gap-5'>

                    {/* ////////////////---Heading & Pricing---///////////////// */}
                    <div className="flex justify-between">
                        <h2 className='text-[40px] font-semibold font-Nanum text-slate-700'>{product?.attributes?.title}</h2>
                        <h2 className='text-3xl font-bold text-primary/70 font-mono flex  items-center'><LuDollarSign className='text-black font-bold' />{product?.attributes?.pricing}</h2>
                    </div>

                    {/* /////////////---Description---/////////////// */}

                    <p className='text-black/70 text-justify'>{product?.attributes?.description}</p>

                    {/* /////////---Delivery---//////////// */}
                    <div className="flex gap-2 text-lg items-center text-black/70">

                        {product?.attributes?.instantDelivary ? <TbTruckDelivery className='text-primary text-3xl' /> : <MdNotInterested className='text-red-500 text-xl' />}

                        {product?.attributes?.instantDelivary ? <p>Eligiable for Instant Delivary</p> : <p>Not Eligiable for Instant Delivary</p>}
                    </div>

                    {/* ////////////---Catagory & Cart Button---///////////// */}

                    <div className="flex justify-between">
                        <button onClick={addToCart} className='bg-primary hover:bg-blue-600 transition-all text-white text-md px-8 py-3 rounded-lg shadow-md active:scale-90'>Add to Cart</button>

                        <div className="flex gap-1 items-center">
                            <FaGithub className='text-xl' />
                            <p className='text-xl text-black/70 capitalize font-semibold'>{product?.attributes?.catagory}</p>
                        </div>
                    </div>

                </div> :
                <Loading />

            }
        </div >
    )
}

export default ProjectInfo