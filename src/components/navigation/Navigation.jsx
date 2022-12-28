import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.scss';

const Navigation = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            [styles.link, isActive ? styles.active : null]
              .filter(Boolean)
              .join(' ')
          }
        >
          Form
        </NavLink>
        <NavLink
          to="/Users"
          className={({ isActive }) =>
            [styles.link, isActive ? styles.active : null]
              .filter(Boolean)
              .join(' ')
          }
        >
          Users
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
