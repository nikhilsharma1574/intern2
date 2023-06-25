'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '../assets/svg/logo-no-background.svg'
const Navbar = () => {
return (
    <nav>
        <div className='flex-1 justify-between items-center p-1 lg:p-6 flex h-[100px]'>
            <div>
                <Link  href='./'>  
                        <Image src={Logo} width={100} height={100} className='ml-4 scale-75 lg:scale-100' alt='Logo'/>
                </Link>
            </div>
            <div className='gap-8 items-center hidden lg:flex font-semibold'>
                <Link className='hover:underline underline-offset-2' href={"./"}>Home</Link>
                <Link className='hover:underline underline-offset-2' href={"./"}>Services</Link>
                <Link className='hover:underline underline-offset-2' href={"./"}>About</Link>
                <Link className='hover:underline underline-offset-2' href={"./"}>Blog</Link>
                <Link className='hover:scale-105 transition-all bg-red-800 px-4 py-2 rounded-xl text-white' href={"./"}>Connect now</Link>
            </div>
        </div>
    </nav>
)
}

export default Navbar