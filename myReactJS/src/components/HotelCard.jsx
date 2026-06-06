function HotelCard({ hotel, onBook }) {
  return (
    <article className="hotel-card">
      <div>
        <h3>{hotel.name}</h3>
        <p>{hotel.description}</p>
      </div>
      <div className="hotel-meta">
        <span>{hotel.city}</span>
        <span>Rating {hotel.rating}</span>
        <span>${hotel.price} / night</span>
        <span>{hotel.rooms} rooms left</span>
      </div>
      <div className="hotel-actions">
        <button className="primary" onClick={() => onBook(hotel)}>
          Book a room
        </button>
        <small>Great choice for React practice.</small>
      </div>
    </article>
  );
}

export default HotelCard;
