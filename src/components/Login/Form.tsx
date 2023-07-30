"use client"
import React, { useEffect, useState } from 'react';
import axios from '@/libs/axios';
import { useRouter } from 'next/navigation';
import Cookies from "js-cookie"

interface FormData {
    email: string;
    password: string;
    terms: boolean;
}

export default function Form() {
    const [data, setData] = useState<FormData>({
        email: "",
        password: "",
        terms: false
    });

    const [token, setToken] = useState<string>();

    useEffect(() => {
      if (token !== undefined) {
        Cookies.set('dacodes-auth', token);
      }
    }, [token]);


    const [disabled, setDisabled] = useState<boolean>(true);

    const router = useRouter();

    useEffect(() => {
        const isEmailValid = data.email.includes("@");
        const isPasswordValid = data.password.length >= 8;
        const isTermsAccepted = data.terms;
        const isDisabled = !(isEmailValid && isPasswordValid && isTermsAccepted);
        setDisabled(isDisabled);
    }, [data.email, data.password, data.terms]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = event.target;
        const newValue = type === "checkbox" ? checked : value;

        setData((prevData) => ({
            ...prevData,
            [name]: newValue,
        }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        axios('/authentication').then(function(){
            const bearerToken = process.env.NEXT_PUBLIC_API_KEY;
            if(bearerToken !== undefined) {
                const key = bearerToken.split(' ')[1];
                setToken(key);
                router.push("/")
            }
        }).catch(function(err){
            console.log(err)
        });
    }

    return (
        <main className="flex flex-col text-white mx-6 lg:mx-28 mt-20">
            <div>
                <h2 className="font-poppinsBold text-2xl">Login</h2>
                <h2 className="text-base font-poppins">¡Bienvenido!</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col max-w-lg mt-12">
                    <label className="mb-3 font-poppins" htmlFor="email">Correo electrónico de DaCodes</label>
                    <input
                        className="bg-[#5141EA] rounded-xl py-2 px-4"
                        type="text"
                        id="email"
                        name="email"
                        onChange={handleChange} />
                </div>
                <div className="flex flex-col max-w-lg mt-6">
                    <label className="mb-3 font-poppins" htmlFor="pass">Contraseña</label>
                    <input
                        className="bg-[#5141EA] rounded-xl py-2 px-4"
                        type="password"
                        id="pass"
                        name="password"
                        onChange={handleChange}
                    />
                </div>
                <div className="flex justify-start items-center space-x-3 ml-4 max-w-lg mt-6">
                    <input
                        className="bg-[#D9D9D980] checked:before:bg-black rounded-xl"
                        type="checkbox"
                        id="terms"
                        name="terms"
                        onChange={handleChange}
                    />
                    <label className="font-poppins text-sm italic" htmlFor="terms">He leido y acepto los terminos y condiciones</label>
                </div>
                <div className="mt-6">
                    <button
                        disabled={disabled}
                        className={
                            `py-2 px-6 rounded-2xl font-poppinsBold duration-300 ${disabled
                                ? 'cursor-not-allowed bg-gray-400 text-gray-200'
                                : 'bg-gradient-to-r from-[#00ffd0] to-[#4e6ce4] cursor-pointer'
                            }`}
                        type="submit">Crear cuenta</button>
                </div>
            </form>
        </main>
    )
}
