import { NavLink } from 'react-router-dom';
import Navigation from '../../navigation/Navigation';
import Logo from '../logo/Logo';
import StyledAppBar from './AppBar.styled';
import EnterButtons from '../buttons/EnterButtons';
import UserIn from '../../userIn/userIn';

const AppBar = () => {
  return (
    <StyledAppBar>
      <Logo />
      <Navigation>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/teachers">Teachers</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </Navigation>
      <EnterButtons />
      <UserIn />
    </StyledAppBar>
  );
};

export default AppBar;
