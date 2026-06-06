function HotelFilters({ city, rating, cities, onCityChange, onRatingChange }) {
  return (
    <section className="filter-panel">
      <label>
        Filter by city
        <select value={city} onChange={(event) => onCityChange(event.target.value)}>
          {cities.map((option) => (
            <option key={option} value={option}>
              {option === 'all' ? 'All cities' : option}
            </option>
          ))}
        </select>
      </label>

      <label>
        Minimum rating
        <select value={rating} onChange={(event) => onRatingChange(event.target.value)}>
          <option value="all">All ratings</option>
          <option value="4">4.0+</option>
          <option value="4.5">4.5+</option>
          <option value="4.8">4.8+</option>
        </select>
      </label>
    </section>
  );
}

export default HotelFilters;
