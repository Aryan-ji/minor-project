const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Please enter your email'],
        trim: true
    },
    subject: {
        type: String,
        required: [true, 'Please enter your subject'],
        trim: true
    },
    message: {
        type: String,
        required: [true, 'Please enter your message'],
        trim: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

// export default Contact;

// Path: backend/Model/message.js