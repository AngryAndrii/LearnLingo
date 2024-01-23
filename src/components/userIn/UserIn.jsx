import { useSelector } from "react-redux";

const UserIn = () => {
  const user = useSelector((state) => state.user);
  return <>{user && { user }}</>;
};

export default UserIn;
