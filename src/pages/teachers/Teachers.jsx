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
      {teachers?.map((el) => {
        return el;
      })}
    </>
  );
};

export default Teachers;

// const [teachersList, setTeachersList] = useState([]);
