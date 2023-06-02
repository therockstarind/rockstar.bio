import { useEffect, useState } from "react";
import fetchMovieRatings, { MovieRating } from "@lib/movieRatings";
import { AiFillHeart } from "react-icons/ai";
import StarRating from "./StarRating";
import Link from "next/link";
import { Tooltip } from "antd";

interface MovieProps {
  movie: MovieRating;
}

const Movie: React.FC<MovieProps> = ({ movie }) => {
  return (
    <Link
      href={`https://www.themoviedb.org/movie/${movie.id}`}
      target="_blank"
      rel="noopener noreferrer"
    >
        <div className="relative shadow dark:shadow-gray-600 p-2 rounded-2xl group transition-[opacity,transform] duration-100">
          <div className="w-44 h-64 relative rounded-2xl overflow-hidden">
            <img
              src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.posterPath}`}
              alt={`Poster for ${movie.title}`}
              className="rounded-lg group-hover:scale-105 transition-transform"
            />
            {movie.isFavorite && (
              <div className="absolute top-2 right-2 text-[#ff0000]">
                <Tooltip title='Personal Favorite' color='#ff0000'>
                <AiFillHeart className="h-5 w-5" />
                </Tooltip>
              </div>
            )}
          </div>
          <div className="mt-2 flex items-center justify-center">
              <StarRating rating={movie.rating} />
          </div>
        </div>
    </Link>
  );
};

const MovieList: React.FC = () => {
  const [movieRatings, setMovieRatings] = useState<MovieRating[]>([]);

  useEffect(() => {
    const fetchMovieData = async () => {
      const ratings = await fetchMovieRatings();
      if (ratings) {
        setMovieRatings(ratings);
      }
    };

    fetchMovieData();
  }, []);

  return (
    <div className="flex items-center gap-2 md:gap-4 overflow-x-scroll mt-5 pb-5 horizontal-scrollbar">
      {movieRatings.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
