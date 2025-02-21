import { formatPrice } from '../../utils/format';
import { useOutletContext } from 'react-router-dom';
import style from './CartItem.module.css';

function CartItem({ item }) {
  const { cart, setCart } = useOutletContext();
  const updateQuantity = (newQuantity) => {
    setCart(
      cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: newQuantity }
          : cartItem,
      ),
    );
  };

  const handleIncrement = () => updateQuantity(item.quantity + 1);
  const handleDecrement = () =>
    item.quantity > 1 && updateQuantity(item.quantity - 1);

  const handleRemove = () => {
    setCart(cart.filter((cartItem) => cartItem.id !== item.id));
  };

  return (
    <div className={style['cart-item']}>
      <div className={style['image-container']}>
        <img className={style.image} src={item.image} alt={item.title} />
      </div>

      <div className={style.info}>
        <div>
          <p>{item.title}</p>
          <p className={style.price}>
            {formatPrice(item.price * item.quantity)}
          </p>
        </div>

        <div className={style.qty}>
          <button onClick={handleDecrement}>-</button>
          <p>{item.quantity}</p>
          <button onClick={handleIncrement}>+</button>
        </div>

        <button className={style.remove} onClick={handleRemove}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
