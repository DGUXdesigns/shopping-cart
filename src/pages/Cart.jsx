import { useOutletContext } from 'react-router-dom';
import { formatPrice } from '../utils/format';
import CartItem from '../components/CartItem/CartItem';
import '../css/Cart.css';
import { useState } from 'react';

function Cart() {
  const { cart, setCart } = useOutletContext();
  const [message, setMessage] = useState();

  const total = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const checkout = () => {
    if (cart.length === 0) return;

    setCart([]); // Reset cart to empty
    setMessage('Thank you for your purchase!');
  };

  return (
    <div className="cart-page">
      <h2>My Cart</h2>
      {message ? (
        <p className="thank-you-message">{message}</p>
      ) : (
        <>
          <div className="item-list">
            {cart.length > 0 ? (
              cart.map((item) => <CartItem key={item.id} item={item} />)
            ) : (
              <p>Your cart is empty</p>
            )}
          </div>

          <h3>Total: {formatPrice(total)}</h3>
          <button className="checkout" onClick={checkout}>
            Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
