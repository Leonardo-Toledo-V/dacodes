"use client"
import { useContext, useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Dock from "@/components/Landing/Dock";
import Movies from "@/components/Landing/Movies/Movies";
import Pagination from "@/components/Landing/Pagination";
import axios from "@/libs/axios";
import { PageContext } from "@/hooks/PageProvider";
import { AiOutlineLoading3Quarters } from "react-icons/ai"

interface Movie {
  id: number;
  title: string;
  overview: string;
  posters: string;
  ratingStars: number;
  date?: string;
}


export default function PopularPage() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const { page, setLastPage, setPage } = useContext(PageContext);
  const [firstRequest, setFirstRequest] = useState<boolean>(true);

  useEffect(() => {setPage(1)},[])
  
  const options = {
    params: {language: 'es-MX', page: firstRequest ? "1": `${page}`}
  };
  
  useEffect(() => {
    axios("/movie/popular", options).then(function (response) {
      setLastPage(response.data.total_pages);
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
    setFirstRequest(false)
  }, [page]);

  if (movies.length === 0) {
    return (
      <>
        <Navbar />
        <main className="mx-4 lg:mx-16">
          <Dock />
          <h2 className="text-white text-2xl font-poppinsBold text-center md:text-start md:mx-16 mb-8">Popular</h2>
          <div className="text-white text-5xl flex  justify-center h-screen w-full p-12">
            <AiOutlineLoading3Quarters className="animate-spin" />
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
        <Dock popular={true} />
        <h2 className="text-white text-2xl font-poppinsBold text-center md:text-start md:mx-16 mb-8">Popular</h2>
        <Movies movies={movies} />
        <div>
          <Pagination />
        </div>
      </main>
      <Footer />
    </>
  )
}
