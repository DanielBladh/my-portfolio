import { FaUserAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";

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
                    <form>
                        <div className="row">
                            <div className="input-group">
                                <input type="text" id="name" required />
                                <label for="name"><FaUserAlt /> Your Name</label>
                            </div>
                            <div className="input-group">
                                <input type="text" id="number" required />
                                <label for="number"><FaPhoneAlt /> Phone No.</label>
                            </div>
                        </div>
                        <div className="input-group">
                            <input type="text" id="email" required />
                            <label for="email"><FaEnvelope /> Email</label>
                        </div>
                        <div className="input-group">
                            <textarea id="message" rows="8" required></textarea>
                            <label for="message"><FaComments /> Your Message</label>
                        </div>
                        <button type="submit" id="btn-submit">Submit <FaPaperPlane /></button>
                    </form>
                </div>
                {/* </section> */}
            </div>
        </>
    );
}

export default Contact;