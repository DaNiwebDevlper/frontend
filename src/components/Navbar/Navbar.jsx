"use client"

import { useState, useEffect, useContext, useRef } from 'react';
import Link from 'next/link';
import { RiMenu2Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image"
import { useUser, UserButton } from "@clerk/nextjs";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CartContext } from '@/context/CartContext';
import GlobalApi from '@/utils/GlobalApi';
import { Cart } from '..';

const Navlinks = [
    { name: "Home", path: "/" },
    { name: "Explore", path: "/explore" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
]


const Navbar = () => {

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { user } = useUser()
    const { cart, setCart } = useContext(CartContext)
    const [isLogin, setLogin] = useState()


    useEffect(() => {
        setLogin(window.location.href.toString().includes('sign-in'))
    }, [])

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };


    const getCartItem = () => {
        GlobalApi.getUserCartItems(user.primaryEmailAddress.emailAddress).then(resp => {
            const result = resp.data.data

            result && result.forEach(prd => {
                setCart(cart => [...cart,
                {
                    id: prd.id,
                    product: prd.attributes.product.data[0]
                }])
            });
        })
    }
    //////////---Cart Items--//////////////

    // useEffect(() => {
    //     openCart === false && setOpenCart(true)
    // }, [cart])



    const [openCart, setOpenCart] = useState(false);

    return !isLogin && (
        <>

            <nav className="container mx-auto flex justify-between items-center shadow-md text-black min-h-[70px] md:px-9 px-5 sticky z-10 top-0 bg-white">
                {/* //////////---Logo---////////// */}
                <div className="md:flex items-center hidden">
                    <Link href="/">
                        <Image
                            src="/images/logo2.svg"
                            width={80}
                            height={60}
                            alt='logo'
                            className='w-auto h-auto' />
                    </Link>
                </div>
                {/* /////////////---NvLinks for Mobile---/////////// */}
                <div className="hidden md:flex space-x-8">
                    {Navlinks.map((links) => (
                        <Link key={links.name}
                            href={links.path}
                            className=' text-center text-lg text-black/80 hover:text-primary transition-all'>
                            {links.name}
                        </Link>
                    ))}
                </div>

                {/* /////////////---Hamburger button---////////////// */}

                <div className="flex items-center space-x-4 md:hidden">
                    <button
                        onClick={toggleMobileMenu}
                        className="text-black text-2xl focus:outline-none rounded-lg border-primary p-2 font-bold focus:border"
                    >
                        {isMobileMenuOpen ? <RxCross2 /> : <RiMenu2Line />}
                    </button>
                </div>

                {/* ////////////---Navlinks for Desktop---//////////////// */}

                {isMobileMenuOpen && (
                    <div className="sm:hidden absolute top-16 left-0 right-0 z-50 bg-white">
                        <div className="flex flex-col p-4 justify-center items-center gap-5">
                            {Navlinks.map((links) => (
                                <Link href={links.path}
                                    className='border-b w-full text-center text-lg text-black/80 hover:text-primary'>
                                    {links.name}
                                </Link>
                            ))}

                            {/* Add more nav links as needed */}
                        </div>
                    </div>
                )}

                {/* ///////////////---Login & Cart Button---///////////// */}

                {!user ?
                    <div className="flex items-center space-x-4">
                        <Link href="/sign-in">
                            <button className='md:text-lg  bg-primary  py-2 md:px-7 px-4 rounded-md text-white cursor-pointer hover:bg-blue-600 transition-all'>
                                Login
                            </button>
                        </Link>
                    </div> :
                    <div className='flex gap-4'>

                        <div className="flex gap-1 justify-center items-center ">
                            <div className="" onClick={() => {
                                setOpenCart(!openCart)
                                setTimeout(() => {
                                    setOpenCart(false)
                                }, 10000)
                            }}>
                                <MdOutlineShoppingCart className='text-3xl text-primary cursor-pointer active:scale-110 transition-all' />
                            </div>
                            <span clasName="text-xl text-black">({cart?.length})</span>
                        </div>
                        <div className="text-3xl">
                            <UserButton />
                        </div>
                    </div>}

                {openCart && <Cart />}



            </nav>

        </>
    );
};

export default Navbar;
