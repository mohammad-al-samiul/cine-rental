import Rating from "../../pages/movies/rating";
import { getImageUrl } from "../../utils/movie-imageUrl";
import tag from "../../assets/tag.svg";
import MovieDetails from "../../pages/movies/movieDetails";
import { useContext, useState } from "react";
import { MovieContext } from "../../context";

export default function MovieCard({ movie }) {
  const [openModal, setOpenModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { state, dispatch } = useContext(MovieContext);

  const handleOpenModal = (movie) => {
    setSelectedMovie(movie);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
    setOpenModal(false);
  };

  const handleAddToCart = (e, movie) => {
    e.stopPropagation();

    const isMovieFound = state.carts.find((cart) => cart.id === movie.id);
    if (!isMovieFound) {
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          ...movie,
        },
      });
    } else {
      console.log(`${movie.title} is already added`);
    }
  };

  return (
    <>
      {openModal && (
        <MovieDetails
          onClose={handleCloseModal}
          movie={selectedMovie}
          onCartAdd={handleAddToCart}
        />
      )}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a href="#" onClick={() => handleOpenModal(movie)}>
          <img
            className="w-full object-cover"
            src={getImageUrl(movie.cover)}
            alt={movie.title}
          />

          <figcaption className="pt-4">
            <h3 className="text-xl mb-1"> {movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating value={movie.rating} />
            </div>

            <a
              onClick={(e) => handleAddToCart(e, movie)}
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
            >
              <img src={tag} alt="tag" />
              <span>${movie.price} | Add to Cart</span>
            </a>
          </figcaption>
        </a>
      </figure>
    </>
  );
}
