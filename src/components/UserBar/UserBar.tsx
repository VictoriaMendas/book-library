// UserBar.tsx
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";

const UserBar = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  return <div>{user?.name ?? "Guest"}</div>;
};

export default UserBar;
