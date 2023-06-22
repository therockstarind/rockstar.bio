import { useEffect, useState } from 'react';
import { fetchMovieRatings, fetchTVMediaRatings, MediaRating } from '@lib/tmdbApi';
import Link from 'next/link';
import { AiFillHeart } from 'react-icons/ai';
import StarRating from '../StarRating';
import Tooltip from '../Tooltip/Tooltip';

interface MediaProps {
  media: MediaRating;
}

const Media: React.FC<MediaProps> = ({ media }) => {
  const mediaType = media.mediaType === 'movie' ? 'movie' : 'tv';

  // Movies component
  return (
    <Link
      href={`https://www.themoviedb.org/${mediaType}/${media.id}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="relative shadow dark:shadow-gray-600 p-2 rounded-2xl group transition-[opacity,transform] duration-100">
        <div className="w-48 h-72 relative rounded-2xl overflow-hidden">
          <img
            src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${media.posterPath}`}
            alt={`${media.title}`}
            className="h-full w-full group-hover:scale-105 transition-transform"
          />
          {media.isFavorite && (
            <div className="absolute top-1 right-0.5">
              <div className="bg-white dark:bg-gray-800 rounded-full p-1">
                <Tooltip tipChildren="Personal Favorite">
                  <div>
                    <AiFillHeart className="h-6 w-6 text-[#FF007F]" />
                  </div>
                </Tooltip>
              </div>
            </div>
          )}
        </div>
        <div className="mt-2 flex items-center justify-center">
          <StarRating rating={media.rating} />
        </div>
      </div>
    </Link>
  );
};

// Loading Movies component
function LoadingMovies() {
  return (
    <>
      {Array.from(Array(10).keys()).map((item) => (
        <div
          key={item}
          className="relative shadow dark:shadow-gray-600 p-2 rounded-2xl group transition-[opacity,transform] duration-100"
        >
          <div className="w-48 h-72 relative rounded-2xl overflow-hidden">
            <div className="bg-gray-200 dark:bg-darkSecondary h-full w-full rounded-lg animate-pulse"></div>
            <div className="absolute top-1 right-0.5">
              <div className="bg-white dark:bg-gray-800 rounded-full p-1">
                <div className="h-6 w-6 animate-pulse bg-gray-200 dark:bg-gray-600 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="mt-2 flex items-center justify-center animate-pulse">
          <StarRating rating={0} />
          </div>
        </div>
      ))}
    </>
  );
}

// TMDBList component
const TMDBList: React.FC = () => {
  const [mediaRatings, setMediaRatings] = useState<MediaRating[]>([]);

  useEffect(() => {
    const fetchMediaData = async () => {
      const movieRatings = await fetchMovieRatings();
      const tvRatings = await fetchTVMediaRatings();

      if (movieRatings && tvRatings) {
        const mixedRatings: MediaRating[] = [];
        let i = 0;
        while (i < movieRatings.length || i < tvRatings.length) {
          if (i < movieRatings.length) {
            mixedRatings.push({ ...movieRatings[i], mediaType: 'movie' });
          }
          if (i < tvRatings.length) {
            mixedRatings.push({ ...tvRatings[i], mediaType: 'tv' });
          }
          i++;
        }

        setMediaRatings(mixedRatings);
      }
    };

    fetchMediaData();
  }, []);

  return (
    <div className="flex items-center gap-2 md:gap-4 overflow-x-scroll mt-5 pb-5 horizontal-scrollbar">
      {mediaRatings.length > 0 ? (
        mediaRatings.map((media) => (
          <Media key={media.id} media={media} />
        ))
      ) : (
        <LoadingMovies />
      )}
    </div>
  );
};

export default TMDBList;
