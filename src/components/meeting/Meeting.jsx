import React from "react";
import "./meeting.css";

const Meeting = () => {
  return (
    <div className="container">
      <h1>Book meeting</h1>
      <h3>Fill out the form and we will come as soon as possible</h3>
      <div className="main_meeting1">
        <div style={{ width: "40%" }}>
          <div className="main_meeting">
            <p>Full Name</p>
            <input type="text" />
          </div>
          <div className="main_meeting">
            <p>Phone</p>
            <input type="text" />
          </div>
          <div className="main_meeting">
            <p>E-Mail</p>
            <input type="text" />
          </div>
        </div>
        <div style={{ width: "50%" }}>
          <div className="main_meeting">
            <p>Company Name</p>
            <input type="text" />
          </div>
          <div className="main_meeting">
            <p>Web Site(If Have)</p>
            <input type="text" />
          </div>
          <div className="main_meeting met1">
            <p>Type of activity of your company(briefly)</p>
            <input type="text" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meeting;
