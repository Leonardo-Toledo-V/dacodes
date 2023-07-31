import React from 'react'
import MovieCard from './MovieCard'

export default function Movies() {

    return (
        <div className='mx-auto h-full px-16'>
            <div className='grid gap-12 xl:grid-cols-4 2xl:grid-cols-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center '>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
        </div>
        </div>
    )
}
