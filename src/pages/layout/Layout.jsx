import { Outlet } from "react-router-dom";
import AppBar from "../../components/topMenuBar/appBar/AppBar";
import StyledLayout from "./Layout.styled";

const LayOut = () => {
  return (
    <StyledLayout>
      <AppBar />
      <Outlet />
      {/* <>User loged in: {user?.displayName}</>
      <button type="button" onClick={logout}>
        Logout
      </button> */}
    </StyledLayout>
  );
};

export default LayOut;
