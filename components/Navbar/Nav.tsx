'use client'

import { navLinks } from '@/constants/constant'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2'
import CartIcon from '../helper/CartIcon'

type Props = {
    openNav: () => void
}

const Nav = ({ openNav }: Props) => {
    const [navBg, setNavBg] = useState(false)

    useEffect(() => {
        const handleScroll = () => setNavBg(window.scrollY >= 90)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className={`fixed w-full transition-all duration-200 h-[12vh] z-[1000] ${navBg ? 'bg-indigo-800 shadow-lg' : 'bg-transparent'}`}>
            <div className="flex items-center justify-between h-full w-[95%] mx-auto">

                {/* Logo with gradient background and glow effect */}
                <Link href="/">
                    <div className="relative group">
                        {/* Glow effect behind logo */}
                        <div className="absolute -inset-2 rounded-xl opacity-30 blur-lg group-hover:opacity-50 transition-opacity duration-300"></div>

                        {/* Logo container with gradient background */}
                        <div className="relative bg-gradient-to-br from-white via-blue-50 to-cyan-50 p-2 rounded-xl shadow-lg border border-white/20 backdrop-blur-sm">
                            <Image
                                src="/images/LN.webp"
                                alt="Logo"
                                width={160}
                                height={60}
                                className="cursor-pointer relative z-10"
                            />
                        </div>
                    </div>
                </Link>

                {/* Navigation Links */}
                <div className="hidden lg:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link key={link.id} href={link.url}>
                            <p className="relative text-md w-fit block after:block after:content-[''] font-semibold after:absolute after:h-[3px] after:bg-yellow-400 text-white after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-left cursor-pointer">
                                {link.label}
                            </p>
                        </Link>
                    ))}
                </div>

                {/* Right Section — Cart Icon & Sign In button */}
                <div className="flex items-center space-x-6">
                    {/* Cart Icon */}
                    <CartIcon />

                    {/* Sign In Button */}
                    <button
                        className="md:px-6 md:py-2 px-4 py-1 text-white font-semibold text-base bg-orange-600 hover:bg-orange-700 transition-all duration-200 rounded-lg shadow-lg hover:shadow-xl hover:scale-105"
                    >
                        Sign In
                    </button>

                    {/* Mobile Hamburger */}
                    <HiBars3BottomRight onClick={openNav} className="w-8 h-8 cursor-pointer text-white lg:hidden" />
                </div>

            </div>
        </div>
    )
}

export default Nav