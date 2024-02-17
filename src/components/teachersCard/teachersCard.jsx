import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { uid } from "uid";
import heart from "/images/heart.svg";
import StyledCard from "./teachersCard.styled";

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
        <p>languages</p>
        <p>
          {name} {surname}
        </p>
      </div>
      <ul>
        <li>Lessons online</li>
        <li>Lessons done {lessons_done}</li>
        <li>Rating: {rating}</li>
        <li>Price / 1 hour: {price_per_hour}</li>
      </ul>
      <ul>
        <li>
          Speaks:
          {languages.map((el) => {
            return ` ${el}, `;
          })}
        </li>
        <li>Lesson Info: {lesson_info}</li>
        <li> Conditions: {conditions}</li>
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
          {experience}
          {reviews.map(({ reviewer_name, reviewer_rating, comment }) => {
            return (
              <React.Fragment key={uid()}>
                {reviewer_name}
                {reviewer_rating}
                {comment}
              </React.Fragment>
            );
          })}
          <button type="button">Book trial lesson</button>
        </div>
      )}
      <ul>
        <li>
          {levels.map((el) => {
            return el;
          })}
        </li>
      </ul>
    </StyledCard>
  );
};

export default TeachersCard;
