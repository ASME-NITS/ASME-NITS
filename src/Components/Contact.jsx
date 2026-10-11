import React, { useState } from "react";
import { useForm } from "react-hook-form";
import './styles/Contact.css';
import rob1 from '../assets/contactRobot.png';
import { 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaPaperPlane, 
  FaCheckCircle, 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn 
} from "react-icons/fa";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    // Simulate API submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Form Submitted:", data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 6000);
  }

  return (
    <div className="contact-wrapper">
      
      {/* Contact Header */}
      <section className="contact-intro">
        <div className="cyber-badge">
          <span className="cyber-badge-dot"></span>
          GET IN TOUCH
        </div>
        <h1 className="contact-title">
          CONNECT WITH <span className="gradient-text">ASME NITS</span>
        </h1>
        <p className="contact-subtitle">
          Have queries regarding membership, sponsorship, workshops, or competitions? Reach out and build the future of engineering with us.
        </p>
      </section>

      {/* Main Grid: Form + Info HUD */}
      <section className="contact-main-grid">
        
        {/* Form Card */}
        <div className="cyber-card contact-form-card">
          <h2 className="form-card-title">Send Us a Message</h2>
          <p className="form-card-subtitle">Fill in your details and our team will get back to you shortly.</p>

          {submitted && (
            <div className="form-success-banner">
              <FaCheckCircle className="success-icon" />
              <span>Thank you! Your message has been transmitted successfully.</span>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="contact-form" noValidate>
            
            <div className="form-row">
              <div className="input-group">
                <label>First Name *</label>
                <input
                  type="text"
                  placeholder="e.g. John"
                  {...register("firstName", {
                    required: "First name is required",
                    minLength: { value: 2, message: "Min 2 characters" }
                  })}
                  className={errors.firstName ? "input-error" : ""}
                />
                {errors.firstName && <span className="error-msg">{errors.firstName.message}</span>}
              </div>

              <div className="input-group">
                <label>Last Name</label>
                <input
                  type="text"
                  placeholder="e.g. Doe"
                  {...register("lastName")}
                  className={errors.lastName ? "input-error" : ""}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="input-group">
                <label>Email Address *</label>
                <input
                  type="email"
                  placeholder="e.g. john@example.com"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Invalid email format"
                    }
                  })}
                  className={errors.email ? "input-error" : ""}
                />
                {errors.email && <span className="error-msg">{errors.email.message}</span>}
              </div>

              <div className="input-group">
                <label>Phone Number *</label>
                <input
                  type="tel"
                  placeholder="10-digit mobile number"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Must be a 10-digit number"
                    }
                  })}
                  className={errors.phone ? "input-error" : ""}
                />
                {errors.phone && <span className="error-msg">{errors.phone.message}</span>}
              </div>
            </div>

            <div className="input-group">
              <label>Message *</label>
              <textarea
                rows="5"
                placeholder="Write your inquiry or message here..."
                {...register("message", {
                  required: "Message cannot be empty",
                  minLength: { value: 10, message: "Min 10 characters required" }
                })}
                className={errors.message ? "input-error" : ""}
              />
              {errors.message && <span className="error-msg">{errors.message.message}</span>}
            </div>

            <button 
              type="submit" 
              className="cyber-btn-primary full-width" 
              disabled={isSubmitting}
            >
              {isSubmitting ? "Transmitting..." : (
                <>Transmit Message <FaPaperPlane /></>
              )}
            </button>

          </form>
        </div>

        {/* Info & Illustration Column */}
        <div className="contact-info-col">
          
          <div className="cyber-card contact-details-card">
            <h3>DIRECT CHANNELS</h3>
            
            <div className="contact-detail-item">
              <div className="detail-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="detail-text">
                <strong>Campus Headquarters</strong>
                <span>Mechanical Engineering Dept, NIT Silchar, Cachar, Assam 788010</span>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="detail-icon">
                <FaEnvelope />
              </div>
              <div className="detail-text">
                <strong>Email Correspondence</strong>
                <span>contact@asmenits.org</span>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="detail-icon">
                <FaPhoneAlt />
              </div>
              <div className="detail-text">
                <strong>Student Chapter Desk</strong>
                <span>+91 (03842) 224879</span>
              </div>
            </div>

            <div className="contact-social-section">
              <strong>Official Social Handles</strong>
              <div className="social-pill-group">
                <a 
                  href="https://facebook.com/asmenits" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-pill"
                >
                  <FaFacebookF /> Facebook
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-pill"
                >
                  <FaInstagram /> Instagram
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-pill"
                >
                  <FaLinkedinIn /> LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="contact-robot-card">
            <img src={rob1} alt="ASME Robot Assistant" className="contact-robot-img" />
          </div>

        </div>

      </section>

    </div>
  );
}

export default Contact;
