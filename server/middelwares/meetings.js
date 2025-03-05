// middlewares/validateMeeting.js

const yup = require("yup");
import { meetingSchema } from './meetingSchema.js';

const validateMeeting = async (req, res, next) => {
    try {
        // validate data during test
        await meetingSchema.validate(req.body, { abortEarly: false });
        next(); 
    } catch (error) {
        return res.status(400).json({
            message: "Validation failed",
            errors: error.inner.map((err) => ({ field: err.path, message: err.message })),
        });
    }
};

module.exports = validateMeeting;
