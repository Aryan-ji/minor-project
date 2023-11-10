import connectDB from "@/backend/middleware/mongoose";

import message from "@/backend/Model/Message";

const handler = async (req, res) => {

    const { name, email, subject, message: msg } = req.body;
    try {
        if (req.method !== 'POST') {
            return res.status(400).json({ msg: 'Method Not Allowed' });
        }
        const newMessage = new message({
            name,
            email,
            subject,
            message: msg
        });
        await newMessage.save();
        res.status(200).json({ msg: 'Message Sent Successfully' });
    } catch (error) {
        res.status(500).json({ msg: 'Internal Server Error' });
    }
};

export default connectDB(handler);