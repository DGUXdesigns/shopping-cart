import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CartCounter from '../CartCounter/CartCounter';
import styles from './Header.module.css';

function Header({ itemCount }) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to={'/'} className={styles['logo-link']}>
          <h1 className={styles.logo}>The Shop</h1>
        </Link>
        <nav className={styles.nav}>
          <NavLink
            to={'/'}
            className={({ isActive }) => (isActive ? styles.active : '')}
          >
            Home
          </NavLink>
          <NavLink
            to={'/shop'}
            className={({ isActive }) => (isActive ? styles.active : '')}
          >
            Shop
          </NavLink>
        </nav>
        <CartCounter itemCount={itemCount} />
      </div>
    </header>
  );
}

Header.PropTypes = {
  itemCount: PropTypes.number.isRequired,
};

export default Header;
