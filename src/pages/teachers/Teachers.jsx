import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Loader";
import { getTeachers } from "../../redux/teachers/teachersOperations";
import { createRef, useEffect, useLayoutEffect, useState } from "react";
import { uid } from "uid";
import TeachersCard from "../../components/teachersCard/teachersCard";

const Teachers = () => {
  const baseCountOfCards = 8;
  const loading = useSelector((state) => state.getTeachers.loading);
  const teachers = useSelector((state) => state.getTeachers.teachers);
  const dispatch = useDispatch();
  const [countOfCard, setCountOfCard] = useState(baseCountOfCards);

  useLayoutEffect(() => {
    dispatch(getTeachers(countOfCard));
  }, [countOfCard]);

  if (loading) {
    return <Loader />;
  }

  const handleLoadMore = () => {
    setCountOfCard((prevCount) => prevCount + baseCountOfCards);
  };

  return (
    <div>
      <ul>
        {teachers?.map((el) => {
          return (
            <li key={uid()}>
              <TeachersCard data={el} />
            </li>
          );
        })}
      </ul>
      <button type="button" onClick={handleLoadMore}>
        Load more
      </button>
    </div>
  );
};

export default Teachers;
