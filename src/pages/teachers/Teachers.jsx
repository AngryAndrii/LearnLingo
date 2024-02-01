import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Loader";
import { getTeachers } from "../../redux/teachers/teachersOperations";
import { useEffect, useState } from "react";

const Teachers = () => {
  const loading = useSelector((state) => state.getTeachers.loading);
  const teachers = useSelector((state) => state.getTeachers.teachers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTeachers());
  }, []);

  if (loading) {
    return <Loader />;
  }

  console.log(teachers);
  return (
    <>
      {teachers?.map(
        ({
          id,
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
        }) => {
          return (
            <ul>
              <li key={id}>
                <p>{avatar_url}</p>
                <p>{conditions}</p>
                <p>{experience}</p>
                <p>{languages}</p>
                <p>{lesson_info}</p>
                <p>{lessons_done}</p>
                <p>{levels}</p>
                <p>{name}</p>
                <p>{price_per_hour}</p>
                <p>{rating}</p>
                <p>{surname}</p>
              </li>
            </ul>
          );
        }
      )}
    </>
  );
};

export default Teachers;

// const [teachersList, setTeachersList] = useState([]);
