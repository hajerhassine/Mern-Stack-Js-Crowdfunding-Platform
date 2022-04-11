const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({

    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    modality: { type: String, required: true },
    category: { type: String, required: true },
    sponsors: { type: String, required: true },
    participant_number: { type: Number, required: true },
    // fee_participation: { type: Number, required: true },
    
},
 {
    timestamps: true,
}

);

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;