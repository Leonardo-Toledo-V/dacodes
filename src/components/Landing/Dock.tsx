"use client"
import Link from 'next/link'
import React, { useState } from 'react'

// Sería más o menos que, recibe 4 props, de enable. Y cada botón depende de la prop, si no tiene la prop, esta es desactivado, si la tiene
//sería que la tiene activado
export default function Dock() {
    const [disabled, setDisabled]= useState<boolean>(false);

    return (
        <div className='flex flex-col md:flex-row justify-start md:space-x-8 space-y-4 md:space-y-0 mx-4 lg:mx-16 mt-16 mb-8'>
            <div 
            className={
                `py-2 px-8 rounded-2xl text-white duration-300 text-lg ${!disabled
                    ? 'cursor-not-allowed bg-[#563ff0] text-gray-200'
                    : 'bg-gradient-to-r from-[#00ffd0] to-[#4e6ce4] cursor-pointer'
                }`}>
                <Link href="">Now playing</Link>
            </div>
            <div 
            className={
                `py-2 px-8 rounded-2xl text-white duration-300 text-lg ${disabled
                    ? 'cursor-not-allowed bg-[#563ff0] text-gray-200'
                    : 'bg-gradient-to-r from-[#00ffd0] to-[#4e6ce4] cursor-pointer'
                }`}>
                <Link href="">Popular</Link>
            </div>
            <div 
            className={
                `py-2 px-8 rounded-2xl text-white duration-300 text-lg ${disabled
                    ? 'cursor-not-allowed bg-[#563ff0] text-gray-200'
                    : 'bg-gradient-to-r from-[#00ffd0] to-[#4e6ce4] cursor-pointer'
                }`}>
                <Link href="">Top rated</Link>
            </div>
            <div 
            className={
                `py-2 px-8 rounded-2xl text-white duration-300 text-lg ${disabled
                    ? 'cursor-not-allowed bg-[#563ff0] text-gray-200'
                    : 'bg-gradient-to-r from-[#00ffd0] to-[#4e6ce4] cursor-pointer'
                }`}>
                <Link href="">Upcoming</Link>
            </div>
            
        </div>
    )
}
