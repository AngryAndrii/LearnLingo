import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../../Loader";
import { logoutUser } from "../../../../redux/auth/authOperations";
import StyledButton from "./LogOutButton.styled";

const LogoutButton = () => {
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <StyledButton
        onClick={() => {
          dispatch(logoutUser());
        }}
      >
        Logout
      </StyledButton>
    </>
  );
};

export default LogoutButton;
