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

  useEffect(() => {
    dispatch(getTeachers());
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <ul>
      {teachers?.slice(0, 4).map((el) => {
        return (
          <li key={uid()}>
            <TeachersCard data={el} />
          </li>
        );
      })}
    </ul>
  );
};

export default Teachers;

// const [teachersList, setTeachersList] = useState([]);
// {
//           id,
//           avatar_url,
//           conditions,
//           experience,
//           languages,
//           lesson_info,
//           lessons_done,
//           levels,
//           name,
//           price_per_hour,
//           rating,
//           reviews,
//           surname,
//         }
