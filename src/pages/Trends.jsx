import "./Trends.css";

function Trends() {
  return (
    <div className="trends-page">

      {/* Hero */}

      <section className="trends-hero">

        <div className="hero-overlay">

          <h1>Beauty Trends 2026</h1>

          <p>
            Discover the latest skincare, makeup,
            hairstyle and bridal beauty trends.
          </p>

        </div>

      </section>

      {/* Categories */}

      <section className="trend-categories">

        <div className="category-card">
          <h3>Hair Trends</h3>
        </div>

        <div className="category-card">
          <h3>Skin Trends</h3>
        </div>

        <div className="category-card">
          <h3>Makeup Trends</h3>
        </div>

        <div className="category-card">
          <h3>Bridal Trends</h3>
        </div>

      </section>

      {/* Featured Trends */}

      <section className="featured-trends">

        <h2>Trending Right Now</h2>

        <div className="trend-grid">

          <div className="trend-card">

            <img
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
              alt=""
            />

            <div className="trend-content">
              <h3>Glass Skin Glow</h3>
              <p>
                Korean-inspired luminous skincare
                remains the biggest trend.
              </p>
            </div>

          </div>

          <div className="trend-card">

            <img
              src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2"
              alt=""
            />

            <div className="trend-content">
              <h3>Soft Glam Makeup</h3>
              <p>
                Natural glam with glowing cheeks
                and glossy lips.
              </p>
            </div>

          </div>

          <div className="trend-card">

            <img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
              alt=""
            />

            <div className="trend-content">
              <h3>Luxury Bridal Looks</h3>
              <p>
                Elegant bridal styling with modern
                aesthetics.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Forecast */}

      <section className="beauty-forecast">

        <h2>Beauty Forecast 2026</h2>

        <div className="forecast-grid">

          <div className="forecast-card">
            <h3>Skin Care</h3>
            <p>Personalized AI skincare routines.</p>
          </div>

          <div className="forecast-card">
            <h3>Hair Care</h3>
            <p>Scalp-first beauty treatments.</p>
          </div>

          <div className="forecast-card">
            <h3>Makeup</h3>
            <p>Minimal luxury makeup looks.</p>
          </div>

          <div className="forecast-card">
            <h3>Bridal</h3>
            <p>Timeless bridal elegance.</p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Trends;