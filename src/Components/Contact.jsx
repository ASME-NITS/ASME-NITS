import React from "react";
import { useForm } from "react-hook-form";
import "../styles/Contact.css";
import rob1 from '../assets/contactRobot.png';

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data){
    await new Promise (resolve => setTimeout(resolve, 2000));
    console.log(data)
  }

  return (
    <div className="contact-container">
      <header className="contact-header">
        <h1>
          Contact <span className="highlight">Us</span>
        </h1>
        <p>Reach out, and let's create a world of possibilities together!</p>
      </header>
      <div className="contact-form-section">
        <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
          <div className="form-row">
            <input
              type="text"
              placeholder="First Name"
              {...register("firstName", {
                required: "First Name is required",
                minLength: {
                  value: 2,
                  message: "First Name must be at least 2 characters",
                },
              })}
              className={errors.firstName ? "input-error" : ""}
            />
            <input
              type="text"
              placeholder="Last Name"
              {...register("lastName")} 
              className={errors.lastName ? "input-error" : ""}
            />
          </div>
          {errors.firstName && <p className="error-msg">{errors.firstName.message}</p>}

          <input
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            })}
            className={errors.email ? "input-error" : ""}
          />
          {errors.email && <p className="error-msg">{errors.email.message}</p>}

          <input
            type="tel"
            placeholder="Phone Number"
            {...register("phone", {
              required: "Phone Number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Phone Number must be 10 digits",
              },
            })}
            className={errors.phone ? "input-error" : ""}
          />
          {errors.phone && <p className="error-msg">{errors.phone.message}</p>}

          <textarea
            placeholder="Message"
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 10,
                message: "Message must be at least 10 characters",
              },
            })}
            className={errors.message ? "input-error" : ""}
          />
          {errors.message && <p className="error-msg">{errors.message.message}</p>}

          <button type="submit" className="submit-btn" disabled={isSubmitting ? "...Submitting": "Submit"}>
            Send
          </button>
        </form>
        <div className="contact-image">
          <img
            src={rob1}
            alt="Robot Illustration"
            className="robot-img"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
