const mongoose = require('mongoose');

const meetingHistory = new mongoose.Schema({
    agenda: { type: String, required: true },
    attendes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Contact',
    }],
    attendesLead: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lead',
    }],
    location: { type: String, default: "" },
    related: { type: String, default: "" },
    dateTime: { type: String, required: true },
    notes: { type: String, default: "" },
    createFor: { type: String },  // Added createFor as a string if it's needed in your data model
    createBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
    deleted: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model('Meetings', meetingHistory, 'Meetings');