"use client"

import React, { useEffect, useState } from 'react'
import { ProductItem, ProjectList } from '@/components'
import GlobalApi from '@/utils/GlobalApi'
const page = () => {

    useEffect(() => {
        getLatestProducts_()
    }, [])

    const [productList, setProductList] = useState([])
    const getLatestProducts_ = () => {
        GlobalApi.getLatestProducts().then(response => {
            setProductList(response.data.data)
        })
    }
    return (
        <div className='p-9'>
            <div className='my-9 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-3 gap-5'>

                {productList.map((item, index) =>(

                    <div key={index}>
                        <ProductItem product={item} />
                    </div>

                ))}
            </div>
        </div>
    )
}

export default page