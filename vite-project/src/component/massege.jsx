import React from 'react'
import '../styles/massege.css'


const Massege = () => {
  return (
        <div>
            <div className="msg-conta">
                <h1>Send a message</h1>
                <div className="main">
                </div>
                <div className="main-c">
                    <div className="name active"><p>Your Name *</p></div>
                    <div className="email active"><p>Your Email *</p></div>
                </div>
                <div className="main-c">
                    <div className="name active"><p>Subject</p></div>
                    <div className="email active"><p>Phone</p></div>
                </div>
                <button className="hoyo">
                    Submit Now
                </button>
            </div>
        </div>
  );
};

export default Massege;