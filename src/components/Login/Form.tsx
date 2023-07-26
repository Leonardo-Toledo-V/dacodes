import React from 'react'

export default function Form() {
    return (
        <main className="flex flex-col text-white mx-6 lg:mx-28 mt-20">
            <div className="">
                <h2 className="font-poppinsBold text-2xl">Login</h2>
                <h2 className="text-base font-poppins">¡Bienvenido!</h2>
            </div>
            <div>
                <div className="flex flex-col max-w-lg mt-16">
                    <label className="mb-3 font-poppins" htmlFor="email">Correo electrónico de DaCodes</label>
                    <input className="bg-[#5141EA] rounded-xl py-2" type="text" id="email" />
                </div>
                <div className="flex flex-col max-w-lg mt-6">
                    <label className="mb-3 font-poppins" htmlFor="pass">Contraseña</label>
                    <input className="bg-[#5141EA] rounded-xl py-2" type="text" id="pass" />
                </div>
                <div className="flex justify-start items-center space-x-3 ml-4 max-w-lg mt-6">
                    <input className="bg-[#D9D9D980] checked:before:bg-black rounded-xl" type="checkbox" id="pass" />
                    <label className="font-poppins text-sm italic" htmlFor="pass">He leido y acepto los terminos y condiciones</label>
                </div>
                <div className="mt-6">
                    <button className="bg-gradient-to-r from-[#00ffd0] to-[#4e6ce4] py-2 px-6 rounded-2xl font-poppinsBold cursor-pointer" type="submit">Crear cuenta</button>
                </div>
            </div>
        </main>
    )
}
