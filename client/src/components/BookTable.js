import React, { useState } from 'react';
import axios from 'axios';

function BookTable() {
  const [tableNumber, setTableNumber] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        alert('Please login first');
        return;
      }

      await axios.post(
        'http://localhost:5000/api/booking/book',
        { tableNumber, date },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('Table reserved successfully!');
    } catch (error) {
      alert('Booking failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Book a Table</h2>
      <input type="number" placeholder="Table Number" value={tableNumber} onChange={(e) => setTableNumber(e.target.value)} required />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      <button type="submit">Book</button>
    </form>
  );
}

export default BookTable;
