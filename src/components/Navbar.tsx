import Image from 'next/image'
import React from 'react'
import { PiUserCircleLight } from "react-icons/pi"
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav>
            <ul className='flex justify-between items-center bg-[#5141EA] w-full h-14'>
                <li className="w-28 mx-12 cursor-pointer ">
                    <Image
                        src="/dacodeslogo.png"
                        width={172}
                        height={62}
                        alt='dacodes'
                    />
                </li>
                <li className='text-white mx-12 hover:text-gray-300 duration-300 cursor-pointer'>
                    <Link
                    href='/login'
                    >
                        <PiUserCircleLight
                            className="h-10 w-10"
                        />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
