"use client"

import React, { useEffect, useState } from 'react'
import { ProductListLoading, ProjectList } from '..'
import GlobalApi from '@/utils/GlobalApi'

const ProjectSection = () => {
    useEffect(() => {
        getLatestProducts_()
    }, [])

    const [productList, setProductList] = useState([])
    const getLatestProducts_ = () => {
        GlobalApi.getLatestProducts().then(response => {
            setProductList(response.data.data)
        })
    }
    return <div className="">
        {productList ? <div className='md:px-20 px-10'>
            {/* ///////---Brand New---///////// */}
            <h1 className='text-slate-700 text-3xl  font-semibold font-Nanum  mt-5 ml-2 '>brand new</h1>
            <ProjectList productList={productList} />

            {/* ///////---Source Code---///////// */}
            <h1 className='text-slate-700 text-3xl  font-semibold font-Nanum  mt-5 ml-2 '>Source Code</h1>
            <ProjectList productList={productList} />

                   </div> : <ProductListLoading />}
    </div>
}

export default ProjectSection