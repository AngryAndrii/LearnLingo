import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../../Loader";
import { logoutUser } from "../../../../redux/authOperations";
import { auth } from "../../../../config/firebase";

const LogoutButton = () => {
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <button
        onClick={() => {
          dispatch(logoutUser());
        }}
      >
        Logout
      </button>
    </>
  );
};

export default LogoutButton;
