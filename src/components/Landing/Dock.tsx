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
            <div 
            className={
                `py-2 px-8 rounded-2xl text-white duration-300 text-lg ${props.playing
                    ? 'cursor-not-allowed bg-[#563ff0] text-gray-200'
                    : 'bg-gradient-to-r from-[#00ffd0] to-[#4e6ce4] cursor-pointer'
                }`}>
                <Link href="/now-playing">Now playing</Link>
            </div>
            <div 
            className={
                `py-2 px-8 rounded-2xl text-white duration-300 text-lg ${props.popular
                    ? 'cursor-not-allowed bg-[#563ff0] text-gray-200'
                    : 'bg-gradient-to-r from-[#00ffd0] to-[#4e6ce4] cursor-pointer'
                }`}>
                <Link href="/popular">Popular</Link>
            </div>
            <div 
            className={
                `py-2 px-8 rounded-2xl text-white duration-300 text-lg ${props.rated
                    ? 'cursor-not-allowed bg-[#563ff0] text-gray-200'
                    : 'bg-gradient-to-r from-[#00ffd0] to-[#4e6ce4] cursor-pointer'
                }`}>
                <Link href="/top-rated">Top rated</Link>
            </div>
            <div 
            className={
                `py-2 px-8 rounded-2xl text-white duration-300 text-lg ${props.upcoming
                    ? 'cursor-not-allowed bg-[#563ff0] text-gray-200'
                    : 'bg-gradient-to-r from-[#00ffd0] to-[#4e6ce4] cursor-pointer'
                }`}>
                <Link href="/upcoming">Upcoming</Link>
            </div>
            
        </div>
    )
}

export default Dock;