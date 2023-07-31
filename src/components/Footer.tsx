import Image from 'next/image'
import React from 'react'

export default function Footer() {
    return (
        <div className='bg-[url("/gradient.png")] w-full h-[600px] mt-32 py-10 lg:px-12 bg-cover'>
            <div>
                <div className='mx-12 mt-10 lg:mt-24'>
                    <h3 className='text-white text-lg font-poppinsBold'>We are coding the world of tomorrow</h3>
                </div>
                <div className='mx-12 max-w-5xl mt-6 lg:mt-16'>
                    <p className='text-white font-poppins'>
                    DaCodes es una de las mejores empresas de desarrollo de software en México y LATAM. Lo que nos separa de los demás es el nivel de involucramiento que tenemos en nuestros proyectos y la pasión que tenemos por desarrollar productos digitales de calidad mundial. Somos un equipo de 220+ dacoders especializados en la planeación, diseño, desarrollo, implementación e innovación continua de productos digitales disruptivos.
                    </p>
                </div>
                <div className='flex items-center justify-start space-x-4 mx-12 mt-8 lg:mt-24'>
                    <div>
                        <Image
                            src="/best.png"
                            className='w-32'
                            width={154}
                            height={73}
                            alt='best'
                        />
                    </div>
                    <div>
                        <Image
                            src="/gptw.png"
                            className='w-32'
                            width={154}
                            height={73}
                            alt='great'
                        />
                    </div>
                    <div>
                        <Image
                            src="/employers.png"
                            className='w-32'
                            width={154}
                            height={73}
                            alt='employers'
                        />
                    </div>
                    <div>
                        <Image
                            src="/amazon.png"
                            className='w-28'
                            width={154}
                            height={73}
                            alt='aws'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
