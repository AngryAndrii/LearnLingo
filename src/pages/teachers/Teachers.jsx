import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Loader";
import { getTeachers } from "../../redux/teachers/teachersOperations";
import { useEffect, useState } from "react";
import { uid } from "uid";
import TeachersCard from "../../components/teachersCard/teachersCard";

const Teachers = () => {
  const loading = useSelector((state) => state.getTeachers.loading);
  const teachers = useSelector((state) => state.getTeachers.teachers);
  const dispatch = useDispatch();
  const [counOfCard, setCountOfCard] = useState(4);

  useEffect(() => {
    dispatch(getTeachers());
  }, []);

  if (loading) {
    return <Loader />;
  }

  const handleLoadMore = () => {
    setCountOfCard(counOfCard + 4);
  };

  return (
    <div>
      <ul>
        {teachers?.slice(0, counOfCard).map((el) => {
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
