const express = require('express');
const meetingController = require('./meeting');  // Import the meeting controller
const auth = require('../../middelwares/auth');  // If you want to apply authentication middleware

const router = express.Router();

// Define routes for meeting CRUD operations
router.get('/', auth, meetingController.index);  // Get all meetings
router.post('/add', auth, meetingController.add);  // Add a new meeting
router.get('/view/:id', auth, meetingController.view);  // Get a specific meeting by ID
router.delete('/delete/:id', auth, meetingController.deleteData);  // Delete a specific meeting by ID
router.post('/deleteMany', auth, meetingController.deleteMany);  // Delete multiple meetings

module.exports = router;
