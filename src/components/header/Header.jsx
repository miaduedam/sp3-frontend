import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import LogIn from "../security/LogIn";

const Header = ({ headers, loggedIn, login, logout }) => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {headers.map((header, index) => (
          <NavLink
            key={index}
            to={header.url}
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            {header.title}
          </NavLink>
        ))}

        {/* HØJRE SIDE: login / logout */}
        <div className={styles.auth}>
          {!loggedIn ? (
            <LogIn login={login} />
          ) : (
            <button onClick={logout}>Logout</button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
