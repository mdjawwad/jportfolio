import React from "react";

function ContactItem({ icon, title, text, text1 }) {
  return (
    <div className="contactItem">
      <div className="contact">
        <img src={icon} alt="" />
        <div className="right-item">
          <h5>{title}</h5>
          <p>{text1}</p>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default ContactItem;
