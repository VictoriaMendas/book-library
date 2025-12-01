import { NavLink } from "react-router-dom";

const UserNav: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/recommended">Recommended</NavLink>
        </li>
        <li>
          <NavLink to="/library">My library</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default UserNav;
