"use client"
import { Breadcrumbs, ProjectList } from '@/components'
import GlobalApi from '@/utils/GlobalApi'
import React, { useEffect, useState } from 'react'
import ProjectBanner from '../_components/ProjectBanner'
import ProjectInfo from '../_components/ProjectInfo'

const ProjectDetail = ({ params }) => {
    const [productDetail, setProductDetail] = useState()
    const [productList, setProductList] = useState([])
    useEffect(() => {
        console.log('productId: ', params?.projectId)
        getProductId_()
    }, [])

    const getProductId_ = () => {
        GlobalApi.getProductById(params?.projectId).then((res) => {
            setProductDetail(res.data.data)
            getProductByCatagory(res.data.data)
        })
    }

    const getProductByCatagory = (product) => {
        GlobalApi.getProductByCatagory(product?.attributes?.catagory).then((res) =>
            setProductList(res.data.data))
    }
    return (
        <div className='p-5'>
            <div className="mt-5">
                <Breadcrumbs />
            </div>
            <div className="flex flex-col sm:flex-row gap-10 justify-center sm:grid-cols-2 mt-10 items-center">
                <ProjectBanner product={productDetail} />
                <ProjectInfo product={productDetail} />
            </div>
<div className="mt-[100px]">

            {productList && <div className='mt-9'>
                <h2 className='text-3xl font-semibold text-black/70 pl-4'>Similar Projects</h2>
                <ProjectList productList={productList} />
            </div>}
</div>
        </div>
    )
}

export default ProjectDetail