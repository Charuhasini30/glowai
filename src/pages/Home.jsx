import { Link } from "react-router-dom";
import "./Home.css";
import products from "../data/products";
import Footer from "../components/Footer";

function Home() {
return (
<>
{/* Hero Section */} 
<section className="hero">

  <div className="hero-content">

   
    <h1>
      Glow<span>AI</span>
    </h1>

    <h2>
      AI Powered Beauty &
      Salon Marketplace
    </h2>

    <p className="hero-description">
      Discover luxury salons, personalized beauty
      recommendations, premium skincare solutions,
      and exclusive beauty experiences powered by AI.
    </p>

    <Link to="/salons">
      <button className="hero-btn">
        Explore Salons
      </button>
    </Link>

  </div>

</section>



<section className="radiance-section">

  <div className="radiance-image">
    <img
      src="https://www.shutterstock.com/image-photo/beautiful-woman-close-up-600nw-227210725.jpg"
      alt="Radiance Beauty"
    />
  </div>

  <div className="radiance-content">

    <p className="radiance-tag">
     Beauty Reimagined
    </p>

    <h2>
      Unlock Your Natural
      Radiance
    </h2>

    <p>
      Experience personalized beauty recommendations,
      luxury skincare solutions, and premium salon
      services designed to help you look and feel
      your absolute best.
    </p>

    <button className="radiance-btn">
      Discover More
    </button>

  </div>

</section>


<section className="premium-services">

  <div className="section-header">
    <span>OUR SERVICES</span>
    <h2>Premium Beauty Experiences</h2>
    <p>
      Curated luxury services designed to elevate
      your beauty journey.
    </p>
  </div>

  <div className="services-slider">

    <div className="premium-card">
      <img
        src="https://images.unsplash.com/photo-1562322140-8baeececf3df"
        alt=""
      />

      <div className="card-overlay">
        <h3>Hair Styling</h3>
        <button>Explore →</button>
      </div>
    </div>

    <div className="premium-card">
      <img
        src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2"
        alt=""
      />

      <div className="card-overlay">
        <h3>Bridal Makeup</h3>
        <button>Explore →</button>
      </div>
    </div>

    <div className="premium-card">
      <img
        src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
        alt=""
      />

      <div className="card-overlay">
        <h3>Skin Care</h3>
        <button>Explore →</button>
      </div>
    </div>

    <div className="premium-card">
      <img
        src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796"
        alt=""
      />

      <div className="card-overlay">
        <h3>Nail Art</h3>
        <button>Explore →</button>
      </div>
    </div>

  </div>

</section>

<section className="product-section">
     <div className="product-header">
    <p>PRODUCT SPOTLIGHT</p>
    <h2>Beauty Essentials</h2>
  </div>

 <div className="product-grid">

  {products.map((product) => (

    <div
      className="product-card"
      key={product.id}
    >

      <div className="discount-badge">
        SALE
      </div>

      <img
        src={product.image}
        alt={product.name}
      />

      <h3>{product.name}</h3>

      <p>{product.ml}</p>

      <div className="price-row">

        <span className="old-price">
          {product.oldPrice}
        </span>

        <span className="new-price">
          {product.price}
        </span>

      </div>

      <button>
        Add To Cart
      </button>

    </div>

  ))}

</div>

</section>

<section className="beauty-experience">

  <div className="experience-header">

    <p>WHY GLOWAI</p>

    <h2>
      Your Complete Beauty
      Destination
    </h2>

    <p className="experience-subtitle">
      Discover premium salons, expert beauty services,
      and AI-powered recommendations all in one place.
    </p>

  </div>

  <div className="experience-container">

    {/* Large Feature Image */}

    <div className="feature-image">

      <img
        src="https://i.pinimg.com/736x/b9/be/56/b9be56b946b3e286d7d9fb2e44acb9b2.jpg"
        alt=""
      />

      <div className="feature-overlay">
        <h3>Luxury Beauty Experience</h3>
      </div>

    </div>

    {/* Services + Why */}

    <div className="experience-right">

      <div className="experience-card">
        <div className="service-number">01</div>
        <h3>Hair Styling</h3>
        <p>Professional styling and transformations.</p>
      </div>

      <div className="experience-card">
        <div className="service-number">02</div>
        <h3>Bridal Makeup</h3>
        <p>Luxury bridal beauty experiences.</p>
      </div>

      <div className="experience-card">
        <div className="service-number">03</div>
        <h3>Skin Care</h3>
        <p>Advanced facials and skincare solutions.</p>
      </div>

      <div className="experience-card">
        <div className="service-number">04</div>
        <h3>AI Beauty Advisor</h3>
        <p>Personalized beauty recommendations.</p>
      </div>

      <div className="experience-card">
        <div className="service-number">05</div>
        <h3>Nearby Salons</h3>
        <p>Discover premium salons near you.</p>
      </div>

      <div className="experience-card">
        <div className="service-number">06</div>
        <h3>Verified Reviews</h3>
        <p>Trusted ratings from real customers.</p>
      </div>

    </div>

  </div>

</section>



  {/* Reviews */}
  <section className="testimonials">

  <div className="testimonial-header">
    <p>TESTIMONIALS</p>
    <h2>Trusted By Beauty Enthusiasts</h2>
  </div>

  <div className="testimonial-grid">

    <div className="testimonial-card">

      <div className="rating">★★★★★</div>

      <p>
        GlowAI helped me discover a premium salon for my
        wedding makeover. The recommendations were spot on.
      </p>

      <div className="customer">
        <h4>Priya Sharma</h4>
        <span>Bridal Customer</span>
      </div>

    </div>

    <div className="testimonial-card">

      <div className="rating">★★★★★</div>

      <p>
        The AI beauty suggestions were surprisingly accurate.
        I found products that actually suited my skin.
      </p>

      <div className="customer">
        <h4>Ananya Rao</h4>
        <span>Beauty Enthusiast</span>
      </div>

    </div>

    <div className="testimonial-card">

      <div className="rating">★★★★★</div>

      <p>
        Booking salons has never been easier. Everything is
        organized beautifully and feels premium.
      </p>

      <div className="customer">
        <h4>Sneha Kapoor</h4>
        <span>Regular User</span>
      </div>

    </div>

  </div>

</section>

  {/* CTA */}
    <section className="cta-section">

    <h2>
      Ready To Transform Your
      Beauty Journey?
    </h2>

    <p>
      Discover top salons, premium beauty services,
      and personalized AI recommendations.
    </p>

    <Link to="/salons">
      <button>
        Explore Salons
      </button>
    </Link>

  </section>

  <Footer />

</>
);
}

export default Home;
