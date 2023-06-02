import { useEffect, useState } from 'react';
import { fetchMovieRatings, fetchTVMediaRatings, MediaRating } from '@lib/tmdbApi';
import Link from 'next/link';
import { AiFillHeart } from 'react-icons/ai';
import StarRating from './StarRating';
import Tooltip from './Tooltip/Tooltip';

interface MediaProps {
  media: MediaRating;
}

const Media: React.FC<MediaProps> = ({ media }) => {
  const mediaType = media.mediaType === 'movie' ? 'movie' : 'tv';

  return (
    <Link
      href={`https://www.themoviedb.org/${mediaType}/${media.id}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="relative shadow dark:shadow-gray-600 p-2 rounded-2xl group transition-[opacity,transform] duration-100">
        <div className="w-44 h-64 relative rounded-2xl overflow-hidden">
          <img
            src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${media.posterPath}`}
            alt={`Poster for ${media.title}`}
            className="rounded-lg group-hover:scale-105 transition-transform"
          />
          {media.isFavorite && (
            <div className="absolute top-2 right-2 text-[#ff0000]">
               <Tooltip tipChildren="Personal Favorite">
              <AiFillHeart className="h-5 w-5" />
              </Tooltip>
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
      {mediaRatings.map((media) => (
        <Media key={media.id} media={media} />
      ))}
    </div>
  );
};

export default TMDBList;
