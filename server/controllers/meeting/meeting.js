const Meeting = require('../../model/schema/meeting');  
const mongoose = require('mongoose');

// Add a new meeting
const add = async (req, res) => {
    try {
        // Create a new meeting based on the request body
        const newMeeting = new Meeting({
            agenda: req.body.agenda,
            attendes: req.body.attendes,
            attendesLead: req.body.attendesLead,
            location: req.body.location,
            related: req.body.related,
            dateTime: req.body.dateTime,
            notes: req.body.notes,
            createFor: req.body.createFor,
            createBy: req.body.createBy,
        });

        // Save the meeting to the database
        await newMeeting.save();
        res.status(201).json(newMeeting);  // Return the created meeting with status 201
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Get all meetings
const index = async (req, res) => {
    try {
        const meetings = await Meeting.find();  // Retrieve all meetings
        res.status(200).json(meetings);  // Return the list of meetings
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Get a single meeting by ID
const view = async (req, res) => {
    try {
        const meetingId = req.params.id;  // Retrieve the meeting ID from URL
        const meeting = await Meeting.findById(meetingId);  // Find the meeting by ID

        if (!meeting) {
            return res.status(404).json({ message: 'Meeting not found' });
        }

        res.status(200).json(meeting);  // Return the meeting
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Delete a single meeting by ID
const deleteData = async (req, res) => {
    try {
        const meetingId = req.params.id;  
        const meeting = await Meeting.findByIdAndDelete(meetingId); 

        if (!meeting) {
            return res.status(404).json({ message: 'Meeting not found' });
        }

        res.status(200).json({ message: 'Meeting deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Delete multiple meetings
const deleteMany = async (req, res) => {
    try {
        const meetingIds = req.body.ids;  
        const result = await Meeting.deleteMany({ _id: { $in: meetingIds } });  

        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'No meetings found to delete' });
        }

        res.status(200).json({ message: 'Meetings deleted successfully', deletedCount: result.deletedCount });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = { add, index, view, deleteData, deleteMany };