import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = ({ headers }) => {
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
      </nav>
    </header>
  );
};

export default Header;
