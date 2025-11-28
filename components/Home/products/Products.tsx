import React from 'react'
import ProductCard from './ProductCard'
import { productData } from '@/data/data'
import Image from 'next/image'

const Products = () => {
    return (
        <div className='pt-16 pb-12 relative bg-gray-200'>
            <Image
                src="/images/cb.png"
                alt='Products'
                width={800}
                height={800}
                className='absolute top-[30%] animate-bounce'
            />
            <div className="w-[80%] pt-8 pb-8 mx-auto">
                <h1 className='text-4xl md:text-5xl text-gray-900 font-bold'>Choose the right product</h1>
                <p className='text-black/70 mt-4'>Our product ensures you get the best quality, performance, and value, so you are investing in both reliability and innovation.</p>
                <div className="md:mt-16 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10">
                    {productData.map((product) => (
                        <div key={product.id}>
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Products
