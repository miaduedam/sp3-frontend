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

      {/* Temporary login placeholder */}
      <div className={styles.loginPlaceholder}>
        <input type="text" placeholder="Username" className={styles.input} />
        <input type="password" placeholder="Password" className={styles.input} />
        <button className={styles.button}>Login</button>
      </div>
    </header>
  );
};

export default Header;
