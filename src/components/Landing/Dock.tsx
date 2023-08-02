"use client"
import Link from 'next/link'
import React from 'react'

interface DockProps {
    playing?: boolean;
    popular?: boolean;
    rated?: boolean;
    upcoming?: boolean;
}


const Dock: React.FC<DockProps> = (props) => {

    return (
        <div className='flex flex-col md:flex-row justify-start md:space-x-8 space-y-4 md:space-y-0 mt-16 mb-8'>
            <Link 
            href="/now-playing"
            className={
                `py-2 px-8 rounded-2xl text-white duration-300 text-lg ${props.playing
                    ? 'bg-[#563ff0] text-gray-200'
                    : 'bg-gradient-to-r from-[#00ffd0] to-[#4e6ce4] cursor-pointer'
                }`}>
                <p>Now playing</p>
            </Link>
            <Link 
            href="/popular"
            className={
                `py-2 px-8 rounded-2xl text-white duration-300 text-lg ${props.popular
                    ? 'bg-[#563ff0] text-gray-200'
                    : 'bg-gradient-to-r from-[#00ffd0] to-[#4e6ce4] cursor-pointer'
                }`}>
                <p>Popular</p>
            </Link>
            <Link
            href="/top-rated"
            className={
                `py-2 px-8 rounded-2xl text-white duration-300 text-lg ${props.rated
                    ? 'bg-[#563ff0] text-gray-200'
                    : 'bg-gradient-to-r from-[#00ffd0] to-[#4e6ce4] cursor-pointer'
                }`}>
                <p>Top rated</p>
            </Link>
            <Link href="/upcoming"
            className={
                `py-2 px-8 rounded-2xl text-white duration-300 text-lg ${props.upcoming
                    ? 'bg-[#563ff0] text-gray-200'
                    : 'bg-gradient-to-r from-[#00ffd0] to-[#4e6ce4] cursor-pointer'
                }`}>
                <p >Upcoming</p>
            </Link>
            
        </div>
    )
}

export default Dock;