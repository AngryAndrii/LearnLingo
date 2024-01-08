import { NavLink, Outlet } from 'react-router-dom';
import Navigation from '../../navigation/Navigation';
import Logo from '../logo/Logo';

const AppBar = () => {
  return (
    <>
      <Logo />
      <Navigation>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/teachers">Teachers</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </Navigation>
      <Outlet />
    </>
  );
};

export default AppBar;
