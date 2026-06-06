function BookingSummary({ bookings, totalRooms, totalPrice }) {
  const bookingItems = Object.values(bookings);

  return (
    <div>
      <h2>Booking Summary</h2>
      {bookingItems.length === 0 ? (
        <p>No rooms booked yet. Click a hotel card to add a booking.</p>
      ) : (
        <div>
          {bookingItems.map((booking) => (
            <div className="booking-item" key={booking.hotel.id}>
              <strong>{booking.hotel.name}</strong>
              <p>{booking.rooms} room{booking.rooms === 1 ? '' : 's'} booked</p>
              <p>${booking.price} per night</p>
            </div>
          ))}
          <div className="booking-item">
            <strong>Total rooms</strong>
            <p>{totalRooms}</p>
            <strong>Total price</strong>
            <p>${totalPrice}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookingSummary;
