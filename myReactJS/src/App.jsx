import { useEffect, useMemo, useState } from 'react';
import BookingSummary from './components/BookingSummary';
import HotelFilters from './components/HotelFilters';
import HotelList from './components/HotelList';
import hotelsData from './data/hotels';

function App() {
  const [cityFilter, setCityFilter] = useState('all');
  const [ratingFilter, setRatingFilter] = useState('all');
  const [bookings, setBookings] = useState({});
  const [statusMessage, setStatusMessage] = useState('Use filters to explore hotels.');

  const filteredHotels = useMemo(() => {
    return hotelsData.filter((hotel) => {
      const cityMatch = cityFilter === 'all' || hotel.city === cityFilter;
      const ratingMatch =
        ratingFilter === 'all' || hotel.rating >= Number(ratingFilter);
      return cityMatch && ratingMatch;
    });
  }, [cityFilter, ratingFilter]);

  useEffect(() => {
    setStatusMessage(`Showing ${filteredHotels.length} hotel${filteredHotels.length === 1 ? '' : 's'}.`);
  }, [filteredHotels]);

  const handleBook = (hotel) => {
    setBookings((current) => {
      const existing = current[hotel.id] || { hotel, rooms: 0, price: hotel.price };
      return {
        ...current,
        [hotel.id]: {
          ...existing,
          rooms: existing.rooms + 1,
        },
      };
    });
  };

  const totalRooms = Object.values(bookings).reduce((sum, booking) => sum + booking.rooms, 0);
  const totalPrice = Object.values(bookings).reduce(
    (sum, booking) => sum + booking.rooms * booking.price,
    0
  );

  const availableCities = useMemo(
    () => ['all', ...new Set(hotelsData.map((hotel) => hotel.city))],
    []
  );

  return (
    <div className="app-shell">
      <header className="hero">
        <div>
          <h1>myReactJS Hotel Explorer</h1>
          <p>Beginner-friendly React app with filters, state, and component composition.</p>
          <p className="status">{statusMessage}</p>
        </div>
      </header>

      <main>
        <section className="layout-grid">
          <article className="content-card">
            <HotelFilters
              city={cityFilter}
              rating={ratingFilter}
              cities={availableCities}
              onCityChange={setCityFilter}
              onRatingChange={setRatingFilter}
            />
            <HotelList hotels={filteredHotels} onBook={handleBook} />
          </article>

          <aside className="sidebar-card">
            <BookingSummary bookings={bookings} totalRooms={totalRooms} totalPrice={totalPrice} />
          </aside>
        </section>
      </main>

      <footer className="footer-note">
        <p>
          This app is designed to teach React basics, component design, and state management for a practical
          hotel listing mini-project.
        </p>
      </footer>
    </div>
  );
}

export default App;
