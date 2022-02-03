import { FaUserAlt, FaPhoneAlt, FaEnvelope, FaComments, FaPaperPlane } from "react-icons/fa";
import { useState } from 'react';
import emailjs from "@emailjs/browser";

const sendEmail = (e) => {
    e.preventDefault();

    emailjs
        .sendForm(
            "service_0lva9xy",
            "template_5da4bkj",
            e.target,
            "user_XZBKqWWgNFKlnaYBryake"
        )
        .then(
            (result) => {
                console.log(result.text);
            },
            (error) => {
                console.log(error.text);
            }
        );
    e.target.reset();
};

const Contact = () => {
    return (
        <>
            <div className="contact-container">
                <div className="contact-title">
                    <h2>Get in touch!</h2>
                    <p>Got a question or proposal, or just want
                        to say hello? Go ahead.</p>
                </div>
                <div className="contact-form">
                    <form onSubmit={sendEmail}>
                        <div className="row">
                            <div className="input-group">
                                <input type="text" id="name" name="name" required />
                                <label for="name"><FaUserAlt /> Your Name</label>
                            </div>
                            <div className="input-group">
                                <input type="text" id="number" name="number"required />
                                <label for="number"><FaPhoneAlt /> Phone No.</label>
                            </div>
                        </div>
                        <div className="input-group">
                            <input type="text" id="email" name="email" required />
                            <label for="email"><FaEnvelope /> Email</label>
                        </div>
                        <div className="input-group">
                            <textarea id="message" rows="8" name="message" required></textarea>
                            <label for="message"><FaComments /> Your Message</label>
                        </div>
                        <button type="submit" id="btn-submit">Submit <FaPaperPlane /></button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Contact;