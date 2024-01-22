import { useSelector } from 'react-redux';

const UserIn = () => {
  const user = useSelector(state => state.user.name);
  return <>{user}</>;
};

export default UserIn;
