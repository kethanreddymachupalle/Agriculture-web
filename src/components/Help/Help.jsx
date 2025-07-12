import React from "react";
import "./Help.css";

function HelpPage() {
  return (
    <div className="help-container">
      <h1>Contact Us</h1>
      <p>If you have any issues or suggestions, reach out to us:</p>

      <div className="help-buttons">
        <a href="tel:+91-1234567890" className="help-button">
          📞 Call Us
        </a>
        <a href="mailto:agriguide@agri.com" className="help-button">
          📧 Email Us
        </a>
        <button className="help-button" onClick={() => alert("Report submitted!")}>
          📝 Report
        </button>
      </div>
    </div>
  );
}

export default HelpPage;
