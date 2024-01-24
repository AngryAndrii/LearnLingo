import { useSelector } from "react-redux";

const UserIn = () => {
  const user = useSelector((state) => state.userAuth.user.name);
  return <>{user && user}</>;
};

export default UserIn;
