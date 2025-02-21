import PropTypes from 'prop-types';
import styles from './ProductCard.module.css';
import { formatPrice } from '../../utils/format';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className={styles['product-card']}>
      <Link className={styles['image-container']} to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} />
      </Link>

      <p className={styles['card-price']}>{formatPrice(product.price)}</p>
      <Link to={`/product/${product.id}`}>
        <h3>{product.title}</h3>
      </Link>
      <p className={styles.rating}>
        {product.rating.rate}/5 based on {product.rating.count} reviews
      </p>
    </div>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string,
    price: PropTypes.number,
    title: PropTypes.string,
  }).isRequired,
};
