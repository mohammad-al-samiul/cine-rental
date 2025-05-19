import React from "react";
import { getAllMovies } from "../../data/movies";
import MovieCard from "../../components/ui/movieCard";

export default function Movies() {
  const movies = getAllMovies();
  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {movies.map((movie, i) => (
          <MovieCard key={i} movie={movie} />
        ))}
      </div>
    </div>
  );
}
