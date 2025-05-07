import "react";
import '../styles/FormSection.css'

const FormSection = () => {
  return (
    <div className="form-section">
        <h1>Get in Touch</h1>
      <p>
      We’d love to hear from you! Use the contact form below to inquire about our software solutions, website development, or app creation services. Our form is designed for ease of use with real-time validation to ensure your message reaches us promptly and accurately. We’re here to assist you with your project needs.
      </p>
    <div className="form-container">
        <form>
          <div className="form-row">
            <div className="form-group">
              <label>First Name*</label>
              <input type="text"  required />
            </div>
            <div className="form-group">
              <label>Last Name*</label>
              <input type="text"  required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Email Address*</label>
              <input type="email"  required />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" />
            </div>
          </div>

          <div className="form-group">
            <label>Message*</label>
            <textarea required />
          </div>

          <small>100% confidential and secure</small>

          <button className="submit-btn" type="submit">Submit</button>
        </form>
    </div>
    </div>
  );
};

export default FormSection;
