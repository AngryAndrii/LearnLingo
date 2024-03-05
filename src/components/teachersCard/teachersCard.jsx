import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { uid } from 'uid';
import heart from '/images/heart.svg';
import StyledCard from './teachersCard.styled';
import book from '/images/book-open.svg';
import star from '/images/star.svg';
import avatarGenerator from './avatar';
import BookForm from '../bookModal/BookModal';

const TeachersCard = ({ data }) => {
  const [loadMore, setLoadMore] = useState(false);
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const dispatch = useDispatch();

  function handleBookModalOpen() {
    setIsBookModalOpen(true);
  }

  function handleClose() {
    setIsBookModalOpen(false);
  }

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
    <>
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
            style={{
              textDecoration: 'underline',
              background: 'rgba(0, 0, 0, 0)',
              fontWeight: '500',
              marginTop: '16px',
            }}
            type="button"
            onClick={() => {
              setLoadMore(true);
            }}
          >
            Read more
          </button>
        ) : (
          <div className="loaded-block">
            <p className="exp">{experience}</p>
            {reviews.map(({ reviewer_name, reviewer_rating, comment }) => {
              return (
                <div style={{ marginBottom: '10px' }} key={uid()}>
                  <div
                    className="flex row"
                    style={{
                      marginBottom: '16px',
                      columnGap: '10px',
                      alignItems: 'center',
                    }}
                  >
                    <img
                      style={{ width: '44px', borderRadius: '50%' }}
                      src={avatarGenerator()}
                      alt="user avatar"
                    />
                    <div className="flex column" style={{ flexWrap: 'wrap' }}>
                      {reviewer_name}
                      <div>
                        <img
                          src={star}
                          alt="rating icon"
                          style={{ marginRight: '5px' }}
                        />
                        {reviewer_rating},0
                      </div>
                    </div>
                  </div>
                  {comment}
                </div>
              );
            })}
          </div>
        )}
        <ul className="category-list flex row">
          {levels.map(el => {
            return <li key={uid()}>{el}</li>;
          })}
        </ul>
        <button
          type="button"
          className="bookBotton"
          onClick={() => {
            handleBookModalOpen();
          }}
        >
          Book trial lesson
        </button>
      </StyledCard>
      {isBookModalOpen && (
        <BookForm
          isOpen={isBookModalOpen}
          close={handleClose}
          name={name}
          surname={surname}
          img={avatar_url}
        />
      )}
    </>
  );
};

export default TeachersCard;
