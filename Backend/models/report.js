const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    reportID: { type: Number, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, required: true }
}, { collection: 'data' });

const Report = mongoose.model('Report', reportSchema);

module.exports = Report;
