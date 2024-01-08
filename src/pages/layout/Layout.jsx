import { Outlet } from 'react-router-dom';
import AppBar from '../../components/topMenuBar/appBar/AppBar';
import StyledLayout from './Layout.styled';

const LayOut = () => {
  return (
    <StyledLayout>
      <AppBar />
      <Outlet />
    </StyledLayout>
  );
};

export default LayOut;
