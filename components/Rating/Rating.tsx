import React, {FC, useEffect, useState, KeyboardEvent} from 'react';
import {RatingProps} from './Rating.props';
import s from './Rating.module.css';
import cn from 'classnames';
import StarIcon from './star.svg';

export const Rating: FC<RatingProps> = ({ isEditable = false, rating, setRating, ...props }) => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  const changeDisplay = (i: number) => {
    if (!isEditable) return;
    constructRating(i);
  };

  const onClickHandler = (i: number) => {
    if (!isEditable || !setRating) return;
    setRating(i);
  };

  const onSpacePressHandler = (i: number, e: KeyboardEvent<SVGElement>) => {
    if (e.code !== 'Space' || !setRating) return;
    setRating(i);
  };

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
      return <span
        className={cn(s.star, {
          [s.filled]: i < currentRating,
          [s.editable]: isEditable
        })}
        onMouseEnter={() => changeDisplay(i + 1)}
        onMouseLeave={() => changeDisplay(rating)}
        onClick={() => onClickHandler(i + 1)}>
        <StarIcon

          tabIndex={isEditable ? 0 : -1}
          onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && onSpacePressHandler(i + 1, e)}
        />
      </span>;
    });
    setRatingArray(updatedArray);
  };

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  return (
    <div {...props}>
      {ratingArray.map((r, i) => (<span key={i}>{r}</span>))}
    </div>
  );
};
