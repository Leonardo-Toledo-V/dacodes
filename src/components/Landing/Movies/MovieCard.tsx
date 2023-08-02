import Image from 'next/image';
import React from 'react';
import Stars from './Stars';

interface Movie {
    id: number;
    title: string;
    overview: string;
    posters: string;
    ratingStars: number;
    date?: string;
}

interface MovieCardProps {
    movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
    const { title, overview, posters, ratingStars, date } = movie;

    return (
        <div className="w-60 h-fit group">
            <div className="relative overflow-hidden rounded-3xl">
                <Image
                    width={500}
                    height={500}
                    className="h-96 w-full bg-cover"
                    src={process.env.NEXT_PUBLIC_IMAGE_URL + posters}
                    alt=""
                />
                <div className="absolute h-full w-full bg-[#5241eaa7] flex flex-col items-center pt-8 px-6 -top-0 group-hover:top-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out text-white cursor-pointer">
                    <h3 className="font-poppinsBold text-xl text-center">{title}</h3>
                    <p className="text-sm my-2">{date}</p>
                    <p className="text-sm line-clamp-5 w-48 mb-10 text-justify">{overview}</p>
                    <Stars stars={ratingStars} />
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
