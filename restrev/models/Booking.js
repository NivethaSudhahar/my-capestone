const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  tableNumber: { type: Number, required: true },
  date: { type: Date, required: true },
});

module.exports = mongoose.model('Booking', bookingSchema);
