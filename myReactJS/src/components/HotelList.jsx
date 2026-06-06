import HotelCard from './HotelCard';

function HotelList({ hotels, onBook }) {
  if (!hotels.length) {
    return <p>No hotels match the current filters. Try a different city or rating.</p>;
  }

  return (
    <div>
      {hotels.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} onBook={onBook} />
      ))}
    </div>
  );
}

export default HotelList;
