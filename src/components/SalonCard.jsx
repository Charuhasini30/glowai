function SalonCard({ salon }) {
  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
      <img
        src={salon.image}
        alt={salon.name}
        className="w-full h-56 object-cover"
      />

      <div className="p-5">
        <h2 className="text-xl font-bold">{salon.name}</h2>

        <p className="text-gray-500 mt-2">
          📍 {salon.location}
        </p>

        <p className="mt-2">
          ⭐ {salon.rating}
        </p>

        <p className="mt-2">
          💰 {salon.price}
        </p>

        <button className="mt-4 bg-pink-500 text-white px-5 py-2 rounded-xl hover:bg-pink-600">
          Book Now
        </button>
      </div>
    </div>
  );
}

export default SalonCard;