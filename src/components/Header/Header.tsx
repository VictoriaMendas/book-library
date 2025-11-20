import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <header className={styles.header}>
      <NavLink to="/">
        <div className={styles.logo}>
          <svg>
            <use />
          </svg>
        </div>
      </NavLink>

      <nav className={styles.nav}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Home
        </NavLink>

        <NavLink
          to="/library"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          My Library
        </NavLink>
      </nav>

      {/* 👇 показуємо імʼя, якщо юзер залогінений */}
      {user ? (
        <div className={styles.userBlock}>
          <span className={styles.userName}>{user.name}</span>
          <button onClick={logout} type="button">
            Log out
          </button>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
