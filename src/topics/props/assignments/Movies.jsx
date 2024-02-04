import { data } from "autoprefixer";
import { useState } from "react";
import { getMoviesV2 } from "../../../api";
import MovieCard from "./MovieCard";

const movies = () => {

    const movieList = getMoviesV2();
    let { id } = movieList.results;
    // console.log(movieList.results);

    const onMovieClick = (movie) => {
        console.log('movie click', movie);
    }
    
  return (
    <div className="bg-[#22254B]">
        <MovieCard movieList = {movieList.results} 
        onClick={onMovieClick}
        />
    </div>
  )
}

export default movies