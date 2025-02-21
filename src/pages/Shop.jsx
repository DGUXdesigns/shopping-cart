import { useOutletContext, useSearchParams, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard/ProductCard';
import '../css/Shop.css';

function Shop() {
  const { products } = useOutletContext();
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category') || 'all';

  const filteredProducts =
    category === 'all'
      ? products
      : category === 'clothing'
      ? products.filter((product) =>
          product.category.toLowerCase().includes('clothing'),
        )
      : products.filter(
          (product) => product.category.toLowerCase() === category,
        );

  return (
    <div className="shop">
      <aside>
        <h2>Categories</h2>
        <Link to="/shop?category=all">All</Link>
        <Link to="/shop?category=electronics">Electronics</Link>
        <Link to="/shop?category=jewelery">Jewelry</Link>
        <Link to="/shop?category=men's clothing">Men&#39;s Clothing</Link>
        <Link to="/shop?category=women's clothing">Women&#39;s Clothing</Link>
      </aside>
      <div className="shop-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No items available. Check back later</p>
        )}
      </div>
    </div>
  );
}

export default Shop;
