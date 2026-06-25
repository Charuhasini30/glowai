import salons from "../data/salons";
import "./Salons.css";

function Salons() {
  return (
    <div className="salons-page">
      <h1 className="title">Discover Top Beauty Salons</h1>

      <p className="subtitle">
        Find premium beauty services near you
      </p>

      <div className="salons-grid">
        {salons.map((salon) => (
          <div className="card" key={salon.id}>
            <img src={salon.image} alt={salon.name} />

            <div className="card-content">
              <h2>{salon.name}</h2>

              <p>📍 {salon.location}</p>

              <p>⭐ {salon.rating}</p>

              <p>💰 {salon.price}</p>

              <button className="book-btn">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Salons;