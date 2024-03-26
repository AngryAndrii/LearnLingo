import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTeachers } from "../../redux/teachers/teachersOperations";
import StyledTeachers from "../teachers/Teachers.styled";
import TeachersCard from "../../components/teachersCard/teachersCard";
import { uid } from "uid";

const Favorites = () => {
  const baseCountOfCards = 4;
  const [countOfCard, setCountOfCard] = useState(baseCountOfCards);
  const dispatch = useDispatch();
  const teachers = useSelector((state) => state.getTeachers.teachers);
  const favorites = useSelector((state) => state.favorites.favorites);
  const loading = useSelector((state) => state.favorites.loading);

  useEffect(() => {
    dispatch(getTeachers(countOfCard));
  }, [countOfCard]);

  if (loading) {
    return <Loader />;
  }

  const favoriteTeachers = teachers?.filter((el) => favorites.includes(el.id));

  const handleLoadMore = () => {
    setCountOfCard((prevCount) => prevCount + baseCountOfCards);
  };

  return (
    <>
      {!favoriteTeachers || favoriteTeachers.length === 0 ? (
        <h1>Favorite list is empty</h1>
      ) : (
        <StyledTeachers>
          <ul>
            {favoriteTeachers?.map((el) => {
              return (
                <li key={uid()}>
                  <TeachersCard data={el} />
                </li>
              );
            })}
          </ul>
          <button
            type="button"
            className="loadMoreButton"
            onClick={handleLoadMore}
          >
            Load more
          </button>
        </StyledTeachers>
      )}
    </>
  );
};

export default Favorites;
