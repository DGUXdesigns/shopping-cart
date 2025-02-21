import { Link } from 'react-router-dom';
import '../css/Home.css';

function Home() {
  return (
    <>
      <section className="hero">
        <h1>Categories</h1>
        <div className="hero-content">
          <div className="hero-div">
            <img src="../../electronics.jpg" alt="Various electronic devices" />
            <div className="overlay">
              <h3 className="category-title">Electronics</h3>
              <p>
                Discover the latest in technology, from cutting-edge smartphones
                to high-performance laptops and accessories.
              </p>
              <Link to="/shop?category=electronics">Shop Now</Link>
            </div>
          </div>

          <div className="hero-div">
            <img src="../../jewelry.jpg" alt="A watch" />
            <div className="overlay">
              <h3 className="category-title">Jewelery</h3>
              <p>
                Elevate your style with our exquisite collection of rings,
                necklaces, and timepieces for every occasion.
              </p>
              <Link to="/shop?category=jewelery">Shop Now</Link>
            </div>
          </div>

          <div className="hero-div">
            <img src="../../clothing.jpg" alt="A rack of T-shirts" />
            <div className="overlay">
              <h3 className="category-title">Clothing</h3>
              <p>
                Stay ahead of the trends with our stylish and comfortable
                apparel for all seasons and occasions.
              </p>
              <Link to="/shop?category=clothing">Shop Now</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
