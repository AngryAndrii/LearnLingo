import { NavLink } from "react-router-dom";
import Navigation from "../../navigation/Navigation";
import Logo from "../logo/Logo";
import { StyledAppBar } from "./AppBar.styled";
import EnterButtons from "../buttons/enter/EnterButtons";
import UserIn from "../../userIn/UserIn";
import { useSelector } from "react-redux";
import LogoutButton from "../buttons/exit/LogoutButton";
import styled from "styled-components";

const StyledLink = styled(NavLink)`
  color: inherit;

  &.active {
    color: var(--secondary-color);
  }
`;

const AppBar = () => {
  const user = useSelector((state) => state.userAuth.user.name);

  return (
    <StyledAppBar>
      <Logo />
      <Navigation>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/teachers">Teachers</StyledLink>
        <StyledLink to="/favorites">Favorites</StyledLink>
      </Navigation>
      {user ? (
        <div className="userInDiv">
          <UserIn />
          <LogoutButton />
        </div>
      ) : (
        <EnterButtons />
      )}
    </StyledAppBar>
  );
};

export default AppBar;
