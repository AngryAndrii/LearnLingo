import { NavLink } from "react-router-dom";
import Navigation from "../../navigation/Navigation";
import Logo from "../logo/Logo";
import StyledAppBar from "./AppBar.styled";
import EnterButtons from "../buttons/enter/EnterButtons";
import UserIn from "../../userIn/UserIn";
import { useSelector } from "react-redux";
import { Fragment } from "react";
import LogoutButton from "../buttons/exit/LogoutButton";

const AppBar = () => {
  const user = useSelector((state) => state.userAuth.user.name);

  return (
    <StyledAppBar>
      <Logo />
      <Navigation>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/teachers">Teachers</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </Navigation>
      {user ? (
        <Fragment>
          <UserIn />
          <LogoutButton />
        </Fragment>
      ) : (
        <EnterButtons />
      )}
    </StyledAppBar>
  );
};

export default AppBar;
