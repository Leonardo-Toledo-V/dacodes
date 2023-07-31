import Image from 'next/image'
import React from 'react'
import Stars from './Stars'

export default function MovieCard() {
    return (
            <div className="w-60 h-fit group">
                <div className="relative overflow-hidden rounded-3xl">
                    <Image
                    width={500}
                    height={500} 
                    className="h-96 w-full bg-cover" 
                    src="/prueba.jpeg" 
                    alt=""/>
                        <div className="absolute h-full w-full bg-[#5241eaa7] flex flex-col items-center pt-10 px-6 -top-0 group-hover:top-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out text-white cursor-pointer">
                            <h3 className='font-poppinsBold text-xl text-center'>Transformers: Rise of the Beasts</h3>
                            <p className='text-sm my-2'>06/06/2023</p>
                            <p className=' text-sm line-clamp-[8] w-48 mb-4 text-justify'>When a new threat capable of destroying the entire planet emerges, Optimus Prime and the Autobots must team up with a powerful faction known as the Maximals. With the fate of humanity hanging in the balance, humans Noah and Elena will do whatever it takes to help the Transformers as they engage in the ultimate battle to save Earth.</p>
                            <Stars stars={7.5}/>
                        </div>
                </div>
            </div>
    )
}

/* opacity-0 group-hover: */