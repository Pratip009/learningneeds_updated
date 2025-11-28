'use client'

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';

interface ProductProps {
    product: {
        id: number;
        title: string;
        description: string;
        category: string;
        originalPrice: number;
        discountPrice: number;
        available: boolean;
        reviews: number;
        image: string;
    };
}

const ProductCard: React.FC<ProductProps> = ({ product }) => {

    const getCategoryBadgeStyle = (category: string) => {
        const styles: Record<string, string> = {
            medical: 'bg-green-100 text-green-700 border-green-300',
            it: 'bg-blue-100 text-blue-700 border-blue-300',
            business: 'bg-purple-100 text-purple-700 border-purple-300',
            hospitality: 'bg-orange-100 text-orange-700 border-orange-300',
            technical: 'bg-cyan-100 text-cyan-700 border-cyan-300',
        };
        return styles[category.toLowerCase()] || 'bg-gray-100 text-gray-700 border-gray-300';
    };

    return (
        <Tilt>
            <Link href={`/product/${product.id}`}>
                {/* FIX 1: Make card full height & use flex */}
                <div className="bg-white rounded-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col">

                    {/* IMAGE */}
                    <div className="relative h-64">
                        <Image
                            src={product.image}
                            alt={product.title}
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* FIX 2: Content grows evenly */}
                    <div className="p-4 flex flex-col flex-1">

                        {/* PRICE BADGE */}
                        <h1 className='ml-auto relative z-[10] h-20 w-20 flex items-center 
                            justify-center flex-col mt-[-4rem] rounded-full 
                            bg-gradient-to-r from-rose-500 via-rose-600 to-rose-700 
                            text-white font-bold text-lg shadow-md'>
                            ₹{product.discountPrice}
                        </h1>

                        {/* CATEGORY */}
                        <div className="flex items-center mt-1 space-x-4">
                            <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${getCategoryBadgeStyle(product.category)}`}>
                                {product.category}
                            </span>

                            <span className={`text-sm font-semibold ${product.available ? 'text-green-600' : 'text-red-600'}`}>
                                {product.available ? "In Stock" : "Out of Stock"}
                            </span>
                        </div>

                        {/* TITLE */}
                        <h1 className="text-xl text-black font-bold mt-1 hover:text-rose-600 transition-colors line-clamp-1">
                            {product.title}
                        </h1>

                        {/* REVIEWS */}
                        <div className="flex mt-1 items-center space-x-2">
                            <div className="flex items-center">
                                {Array(5).fill(0).map((_, i) => (
                                    <FaStar key={i} className="w-4 h-4 text-yellow-600" />
                                ))}
                            </div>
                            <span className="text-base text-orange-800 font-semibold">
                                ({product.reviews} reviews)
                            </span>
                        </div>

                        {/* DESCRIPTION (Fixed space) */}
                        <p className="text-gray-600 mt-2 line-clamp-2 min-h-[45px]">
                            {product.description}
                        </p>

                        <div className="mt-3 mb-3 w-full h-[2px] bg-gray-500 opacity-15"></div>

                        {/* FIX 3: Push prices to bottom */}
                        <div className="mt-auto">
                            <div className="flex items-center justify-between mb-2">
                                <p className="text-lg font-bold text-rose-600">
                                    ₹{product.discountPrice}
                                </p>
                                <p className="text-base line-through text-gray-500">
                                    ₹{product.originalPrice}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </Link>
        </Tilt>
    );
};

export default ProductCard;
