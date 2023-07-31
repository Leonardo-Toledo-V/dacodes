"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Dock from "@/components/Landing/Dock";
import { useEffect, useState } from "react";
import axios from "@/libs/axios";
import Movies from "@/components/Landing/Movies/Movies";

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
        <main className="mx-4 lg:mx-16">
        <Dock/>
          <h2 className="text-white text-2xl font-poppinsBold text-center md:text-start md:mx-16 mb-8">Now Playing</h2>
          <Movies/>
        </main>
      <Footer />
    </>
  )
}
