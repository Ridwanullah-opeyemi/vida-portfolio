import React, { useRef, useState } from 'react'; // 👈 Import useState
import "./contact.css";
// Make sure these paths match your folder structure
import wama from "../../assets/wama.jpeg";
import lonfb from "../../assets/lonfb.png";
import Microsoft from "../../assets/Microsoft.jpeg";
import link from "../../assets/link.png";
import Instagram from "../../assets/Instagram.jpeg";
import xicon from "../../assets/xicon.jpeg";
import Facebook_icon from "../../assets/Facebook_icon.jpeg";
import YouTube from "../../assets/YouTube.jpeg";
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();
    // 👈 1. Initialize the loading state
    const [isLoading, setIsLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        
        // 2. Set loading to true immediately upon submission
        setIsLoading(true);

        emailjs
            .sendForm('service_7p7bbqs', 'template_1b8ld6b', form.current, {
                publicKey: 'j1nJkYqvc9evSZCBE',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    alert("Message Sent Successfully!"); // Give feedback to user
                    e.target.reset(); // Clear the form after sending
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    alert("Failed to send message. Please try again.");
                },
            )
            // 3. Use .finally() to reset the loading state whether successful or not
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <section className="contactpage">
            <div id="client">
                <h2 className="contactpagetitle">My Clients</h2>
                <p className="clientsdesc">
                    I have had the opportunity to work with a diverse group of companies. 
                    Some of the notable companies I have worked with include:
                </p>
                <div className="clientimgs">
                    <img src={wama} alt="Wama" className="clientimg" />
                    <img src={lonfb} alt="Lonfb" className="clientimg" />
                    <img src={Microsoft} alt="Microsoft" className="clientimg" />
                    <img src={link} alt="Link" className="clientimg" />
                </div>
            </div>
            
            <div id="contctpage">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactdesc">Please fill out the form below to discuss any work opportunities.</span>
                
                <form className="contactform" ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" className="name" placeholder='Your Name' required disabled={isLoading} /> 
                    <input type="email" name="user_email" className="email" placeholder='Your Email' required disabled={isLoading} />
                    
                    <input type="text" name="subject" className="subject" placeholder='Subject (e.g., Project Proposal)' required disabled={isLoading} />
                    
                    <textarea name="message" rows={5} className='msg' placeholder='Your message' required disabled={isLoading}></textarea>
                    
                    {/* 4. Disable button while loading and display text/spinner */}
                    <button 
                        className="submitBtn" 
                        type='submit' 
                        disabled={isLoading} // 👈 Disable while loading
                    >
                        {isLoading ? (
                            <>
                                <span className="spinner"></span> 
                                Sending...
                            </>
                        ) : (
                            'Submit' // 👈 Default text
                        )}
                    </button>
                    
                    <div className="links">
                        <img src={Facebook_icon} alt="Facebook" className="link" />
                        <img src={Instagram} alt="Instagram" className="link" />
                        <img src={xicon} alt="X (Twitter)" className="link" />
                        <img src={YouTube} alt="YouTube" className="link" />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact