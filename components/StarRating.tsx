import React from 'react';
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

interface StarRatingProps {
  rating?: number;
  className?: string;
}

const StarRating: React.FC<StarRatingProps> = ({ rating = 0 }) => {
  const convertedRating = rating / 2; // Convert the rating to a scale of 1-5
  const fullStars = Math.floor(convertedRating);
  const hasHalfStar = convertedRating - fullStars >= 0.5;

  const renderStars = () => {
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<BsStarFill key={i} className="text-yellow-500 text-xl" />);
    }

    if (hasHalfStar) {
      stars.push(<BsStarHalf key={stars.length} className="text-yellow-500 text-xl" />);
    }

    for (let i = stars.length; i < 5; i++) {
      stars.push(<BsStar key={i} className="text-gray-400 text-xl" />);
    }

    return (
      <div className={`flex space-x-1 justify-center mt-2`}>
        {stars}
      </div>
    );
  };

  return <>{renderStars()}</>;
};

export default StarRating;
