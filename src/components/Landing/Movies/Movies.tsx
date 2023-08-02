import React from 'react';
import MovieCard from './MovieCard';

interface Movie {
    id: number;
    title: string;
    overview: string;
    posters: string;
    ratingStars: number;
    date?: string;
}

interface MoviesProps {
    movies: Movie[];
}

const Movies: React.FC<MoviesProps> = ({ movies }) => {
    return (
        <div className='mx-auto h-full px-16'>
            <div className='grid gap-12 xl:grid-cols-4 2xl:grid-cols-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center'>
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default Movies;
