import React from "react";
import ContactItem from "../component/ContactItem";
import Tittle from "../component/Tittle";

import phone from "../img/telephone.png";
import email from "../img/email.png";
import address from "../img/address.png";

function Contact() {
  return (
    <div className="Conatctsection" >
      <div className="title">
        <Tittle title={"Cantact Me"} span={"Conatct Me"} />
      </div>
      <div className="ContactSection">
        <div className="map-sect">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3357.453617390406!2d77.32690795297702!3d19.15081935171612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd1d6361c9b12e1%3A0x423e83c224c8b16c!2sNoorani%20Masjid!5e0!3m2!1sen!2sin!4v1620510563464!5m2!1sen!2sin"
            width="450"
            height="365"
            title="My House Location"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="eager"
          ></iframe>
        </div>
        <div className="contact-sect">
          <ContactItem
            title={"Phone"}
            icon={phone}
            text1={"+9188 5599 5458"}
            text={"+9188 8848 3572"}
          />
          <ContactItem
            title={"Email"}
            icon={email}
            text1={"mdjawwad790@gmail.com"}
          />
          <ContactItem
            title={"Address"}
            icon={address}
            text1={"House No-73927"}
            text={"Noorani Masjid, Raza Nagar Nanded-Waghala, Maharashtra"}
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
