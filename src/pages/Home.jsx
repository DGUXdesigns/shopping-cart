import '../css/Home.css';

function Home() {
  return (
    <>
      <section className="hero">
        <h1>Categories</h1>
        <div className="hero-content">
          <div className="hero-div">
            <img
              src="../../public/electronics.jpg"
              alt="Various electronic devices"
            />
            <div className="overlay">
              <h3 className="category-title">Electronics</h3>
              <p>
                Discover the latest in technology, from cutting-edge smartphones
                to high-performance laptops and accessories.
              </p>
              <a href="#">Shop Now</a>
            </div>
          </div>
          <div className="hero-div">
            <img src="../../public/jewelry.jpg" alt="A watch" />
            <div className="overlay">
              <h3 className="category-title">Jewelry</h3>
              <p>
                Elevate your style with our exquisite collection of rings,
                necklaces, and timepieces for every occasion.
              </p>
              <a href="#">Shop Now</a>
            </div>
          </div>
          <div className="hero-div">
            <img src="../../public/clothing.jpg" alt="A rack of T-shirts" />
            <div className="overlay">
              <h3 className="category-title">Clothing</h3>
              <p>
                Stay ahead of the trends with our stylish and comfortable
                apparel for all seasons and occasions.
              </p>
              <a href="#">Shop Now</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
