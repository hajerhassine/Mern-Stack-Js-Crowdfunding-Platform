import mongoose from 'mongoose';

const eventSchema = mongoose.Schema({
    name_event: String,
    descrption_event: String,
    modality: String,
    category: String,
    sponsors: String,
    participant_number: Number,
    fee_participant: Number,
    start_date: Date,
    end_date: Date,
    program: String,
})

var Event = mongoose.model('Event', eventSchema);

export default Event;