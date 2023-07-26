import { Poppins } from 'next/font/google';

export const poppins = Poppins({
    subsets: ['latin'],
    variable: '--font-poppins',
    weight: '300'
});

export const PoppinsBold = Poppins({
    subsets: ['latin'],
    variable: '--font-poppins-bold',
    weight: '700'
});
