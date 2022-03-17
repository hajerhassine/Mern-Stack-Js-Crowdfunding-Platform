import express from 'express';
import mongoose from 'mongoose';

import Event from '../models/Event.js';

const router = express.Router();

export const getEvents = async (req, res) => { 
    try {
        const events = await Event.find();
                
        res.status(200).json(events);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getEvent = async (req, res) => { 
    const { id } = req.params;

    try {
        const event = await Event.findById(id);
        
        res.status(200).json(event);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createEvent = async (req, res) => {
    const { name_event, descrption_event, modality, category, sponsors, participant_number, fee_participant, start_date, end_date, program  } = req.body;
 
    const newEvent = new Event({ name_event, descrption_event, modality, category, sponsors, participant_number, fee_participant, start_date, end_date, program })

    try {
        await newEvent.save();

        res.status(201).json(newEvent );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateEvent = async (req, res) => {
    const { id } = req.params;
    const { title, message, creator, selectedFile, tags } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedEvent = { name_event, descrption_event, modality, category, sponsors, participant_number, fee_participant, start_date, end_date, program , _id: id };

    await Event.findByIdAndUpdate(id, updatedEvent, { new: true });

    res.json(updatedEvent);
}

export const deleteEvent = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No event with id: ${id}`);

    await Event.findByIdAndRemove(id);

    res.json({ message: "Event deleted successfully." });
}

// export const likePost = async (req, res) => {
//     const { id } = req.params;

//     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
//     const post = await PostMessage.findById(id);

//     const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });
    
//     res.json(updatedPost);
// }


export default router;