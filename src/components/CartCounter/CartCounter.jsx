import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './CartCounter.module.css';

function CartCounter({ itemCount }) {
  return (
    <>
      <Link to={'Cart'} className={styles['cart-button']}>
        <div className={styles.cartText}>Cart</div>
        <div className={styles['item-amount']}>{itemCount}</div>
      </Link>
    </>
  );
}

CartCounter.PropTypes = {
  itemCount: PropTypes.number.isRequired,
};

export default CartCounter;
