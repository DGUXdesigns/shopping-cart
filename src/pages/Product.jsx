import { useParams, useOutletContext } from 'react-router-dom';
import { useState } from 'react';
import '../css/Product.css';
import { formatPrice } from '../utils/format';

function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const { products, cart, setCart } = useOutletContext();
  const { id } = useParams();
  const product = products.find((product) => product.id === Number(id));

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = () => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      // Update quantity if exists
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item,
        ),
      );
    } else {
      // Add new item to cart with quantity 1
      setCart([...cart, { ...product, quantity: quantity }]);
    }

    setQuantity(1);
  };

  return (
    <div className="product-details">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="details">
        <div className="header-details">
          <h2>{product.title}</h2>
          <h3>{formatPrice(product.price)}</h3>
        </div>
        <p className="product-desc">{product.description}</p>

        <div className="btn-container">
          <button onClick={handleDecrement}>-</button>
          <p>Quantity: {quantity}</p>
          <button onClick={handleIncrement}>+</button>
        </div>

        <button className="add-to-cart" onClick={addToCart}>
          ADD TO CART
        </button>
      </div>
    </div>
  );
}

export default ProductPage;
