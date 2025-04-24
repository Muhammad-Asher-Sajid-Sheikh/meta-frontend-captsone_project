import React, { useState } from 'react';

function BookingForm() {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '',
    occasion: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Booking confirmed!');
  };

  return (
    <form onSubmit={handleSubmit} aria-label="Booking Form">
      <label htmlFor="date">Date:</label>
      <input type="date" id="date" name="date" required value={formData.date} onChange={handleChange} />

      <label htmlFor="time">Time:</label>
      <input type="time" id="time" name="time" required value={formData.time} onChange={handleChange} />

      <label htmlFor="guests">Guests:</label>
      <input type="number" id="guests" name="guests" min="1" max="10" required value={formData.guests} onChange={handleChange} />

      <label htmlFor="occasion">Occasion:</label>
      <select id="occasion" name="occasion" required value={formData.occasion} onChange={handleChange}>
        <option value="">Select...</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <button type="submit">Book Table</button>
    </form>
  );
}

export default BookingForm;
