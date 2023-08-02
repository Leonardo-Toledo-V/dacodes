"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Dock from "@/components/Landing/Dock";
import { useEffect, useState } from "react";
import axios from "@/libs/axios";
import Movies from "@/components/Landing/Movies/Movies";
import {AiOutlineLoading3Quarters} from "react-icons/ai"

interface Movie {
  id: number;
  title: string;
  overview: string;
  posters: string;
  ratingStars: number;
  date?: string;
}


export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    axios("/movie/now_playing").then(function (response) {
      const newData = response.data.results.map((movie: any) => ({
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        posters: movie.poster_path,
        ratingStars: movie.vote_average,
        date: movie.release_date,
      }));

      setMovies(newData);
    }).catch(function (err) {
      console.error(err);
    });
  }, []);

  if (movies.length === 0) {
    return (
      <>
        <Navbar />
        <main className="mx-4 lg:mx-16">
          <Dock />
          <h2 className="text-white text-2xl font-poppinsBold text-center md:text-start md:mx-16 mb-8">Now Playing</h2>
          <div className="text-white text-5xl flex  justify-center h-screen w-full p-12">
            <AiOutlineLoading3Quarters className="animate-spin"/>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main className="mx-4 lg:mx-16">
        <Dock />
        <h2 className="text-white text-2xl font-poppinsBold text-center md:text-start md:mx-16 mb-8">Now Playing</h2>
        <Movies movies={movies} />
      </main>
      <Footer />
    </>
  )
}
