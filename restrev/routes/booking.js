const express = require('express');
const Booking = require('../models/Booking');
const router = express.Router();

router.post('/book', async (req, res) => {
  const { userId, tableNumber, date } = req.body;
  try {
    const existingBooking = await Booking.findOne({ tableNumber, date });
    if (existingBooking) {
      return res.status(400).json({ error: 'Table already reserved' });
    }
    const booking = new Booking({ userId, tableNumber, date });
    await booking.save();
    res.json({ message: 'Table reserved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Booking failed' });
  }
});

module.exports = router;
