import React, { useEffect, useState } from 'react';
import styles from '../styles/Contact.module.css';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState({ status: false, msg: '' });


    useEffect(() => {
        if (!name || !email || !subject || !message) {
            setError({ status: true, msg: 'Please fill all fields' });
        }
        else if (!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email)) {
            setError({ status: true, msg: 'Invalid email' });
        }
        else {
            setError({ status: false, msg: '' });
        }

    }, [name, email, subject, message])


    const handleClick = async (e) => {
        e.preventDefault();
        console.log('clicked');
        console.table({ name, email, subject, message });

        try {
            if (error.status) {
                toast.error(error.msg);
                return;
            }
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, subject, message }),
            });
            if (res.ok) {
                toast.success('Message Sent Successfully');
                setName('');
                setEmail('');
                setSubject('');
                setMessage('');
            }
            else {
                toast.error('Error Sending Message');
            }
            console.log(res, 'res');

        } catch (error) {
            console.error('Error', error);
            toast.error('Internal Server Error');
        }

    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'name') {
            setName(value);
        } else if (name === 'email') {
            setEmail(value);
        } else if (name === 'subject') {
            setSubject(value);
        } else if (name === 'message') {
            setMessage(value);
        }
    };

    return (
        <main className="w-full flex flex-col justify-center align-middle">
            <Toaster />
            <section className={styles.mheader}>
                <div>
                    <h2>Contact Us</h2>
                </div>
            </section>
            <section className={`${styles.content} my-4`}>
                <div className="shadow-md my-10">
                    <h3>Let's Get Connected :)</h3>
                    <form method="POST">
                        <input
                            onChange={handleChange}
                            value={name}
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Enter Your Name"
                            required
                        />
                        <input
                            onChange={handleChange}
                            value={email}
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter Your Email"
                            required
                        />
                        <input
                            onChange={handleChange}
                            value={subject}
                            type="text"
                            name="subject"
                            id="subject"
                            placeholder="Enter Subject"
                            required
                        />
                        <textarea
                            onChange={handleChange}
                            value={message}
                            name="message"
                            id="message"
                            cols="30"
                            rows="10"
                            placeholder="Enter Your Message"
                            required
                        />
                        <button type="submit" onClick={handleClick}>
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default Contact;
