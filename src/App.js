import React from 'react';
import './App.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <h1 className="name">Mikayla Stokes</h1>
      <p className="biography">
        I am a student at USF. My major is Business Analytics and Information Systems. 
        I have an internship working with AI and data analytics. 
        I am also a teaching assistant for Statistics I and II at USF.
      </p>
      <div className="contact-info">
        <p>Email: <a href="mailto:mikaylastokes@usf.edu">mikaylastokes@usf.edu</a></p>
      </div>
    </div>
  );
};

export default Profile;