import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../../Loader";
import { auth } from "../../../../config/firebase";
import { logoutUser } from "../../../../redux/auth/authOperations";

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
