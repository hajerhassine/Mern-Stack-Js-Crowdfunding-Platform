const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({

    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    modality: { type: String, required: true },
    category: { type: String, required: true },
    sponsors: { type: String},
    participant_number: { type: Number, required: true },
    fee_participation: { type: Number },
    program: { type: String},
    // image: {
    //     type: String,
    //    // required: true,
    //   },
    
},
 {
    timestamps: true,
}

);

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;