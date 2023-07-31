"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Dock from "@/components/Landing/Dock";
import { useEffect, useState } from "react";
import axios from "@/libs/axios";
import Stars from "@/components/Landing/Movies-Card/Stars";
import MovieCard from "@/components/Landing/Movies-Card/MovieCard";

export default function Home() {
  const [ratingStars, setRatingStarts] = useState<number>(10);

  useEffect(() => {
    axios("/movie/now_playing").then(function (response) {
        console.log(response.data);
    }).catch(function (err){
      console.error(err);
    });
  },[]);


  return (
    <>
      <Navbar />
        <main>
        <Dock/>
          <h2 className="text-white text-2xl font-poppinsBold text-center md:text-start md:mx-16">Now Playing</h2>
          <MovieCard/>
        </main>
      <Footer />
    </>
  )
}
