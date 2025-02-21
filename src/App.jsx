import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import { getProducts } from './services/fakeStoreApi';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const totalItems = cart.reduce(
    (total, item) => total + (item.quantity || 1),
    0,
  );

  useEffect(() => {
    async function fetchProducts() {
      const fetchProducts = await getProducts();
      setProducts(fetchProducts);
    }

    fetchProducts();
  }, []);

  return (
    <>
      <Header itemCount={totalItems} />
      <main>
        <Outlet context={{ products, cart, setCart }} />
      </main>
    </>
  );
}

export default App;
