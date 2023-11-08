export default function handler(req, res) {
    const { name, email, subject, message } = req.body; // Destructure req.body

    console.log(name, email, subject, message, 'data');

    if (req.method !== 'POST') {
        return res.status(405).json({ msg: 'Method not allowed' });
    } else {
        if (!name || !email || !subject || !message) {
            return res.status(400).json({ msg: 'Please fill all fields', ok: false });
        } else if (!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email)) {
            return res.status(422).json({ msg: 'Invalid email', ok: false });
        }
        else {
            return res.status(200).json({ msg: 'Valid', ok: true });
        }
    }
}
