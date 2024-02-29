import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { uid } from 'uid';
import heart from '/images/heart.svg';
import StyledCard from './teachersCard.styled';
import book from '/images/book-open.svg';
import star from '/images/star.svg';
import Button from '../button/Button';
import Avatar from '../Avatar';

const TeachersCard = ({ data }) => {
  const [loadMore, setLoadMore] = useState(false);
  const dispatch = useDispatch();

  const {
    avatar_url,
    conditions,
    experience,
    languages,
    lesson_info,
    lessons_done,
    levels,
    name,
    price_per_hour,
    rating,
    reviews,
    surname,
  } = data;

  const handleFavButtonClick = () => {};

  return (
    <StyledCard>
      <button
        className="heart-button"
        type="button"
        onClick={handleFavButtonClick}
      >
        <img src={heart} alt="" width={26} height={26} />
      </button>
      <div className="avatar-container">
        <img className="avatar" src={avatar_url} width={96} alt="" />
      </div>
      <div>
        <p className="grey-span">languages</p>
        <p>
          {name} {surname}
        </p>
      </div>
      <ul className="description">
        <li>
          <img src={book} alt="book icon" /> Lessons online
        </li>
        <li>Lessons done: {lessons_done}</li>
        <li>
          <img src={star} alt="rating icon" /> Rating: {rating}
        </li>
        <li>
          Price / 1 hour:
          <span className="price-span">${price_per_hour}</span>
        </li>
      </ul>
      <ul>
        <li>
          <span className="grey-span">Speaks:</span>
          {languages.map(el => {
            return ` ${el}, `;
          })}
        </li>
        <li>
          <span className="grey-span">Lesson Info:</span> {lesson_info}
        </li>
        <li>
          <span className="grey-span">Conditions:</span> {conditions}
        </li>
      </ul>
      {!loadMore ? (
        <button
          type="button"
          onClick={() => {
            setLoadMore(true);
          }}
        >
          Read more
        </button>
      ) : (
        <div>
          <p className="exp">{experience}</p>
          {reviews.map(({ reviewer_name, reviewer_rating, comment }) => {
            return (
              <React.Fragment key={uid()}>
                <Avatar />
                {reviewer_name}
                {reviewer_rating}
                {comment}
              </React.Fragment>
            );
          })}
          <Button>Book trial lesson</Button>
        </div>
      )}
      <ul>
        <li>
          {levels.map(el => {
            return el;
          })}
        </li>
      </ul>
    </StyledCard>
  );
};

export default TeachersCard;
