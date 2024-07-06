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

const Skill = ({ name, level }) => {
  return (
    <div className="skill">
      <h3 className="skill-name">{name}</h3>
      <p className="skill-level">{level}</p>
    </div>
  );
};

const SkillsList = () => {
  const skills = [
    { name: 'JavaScript', level: 'Intermediate' },
    { name: 'Python', level: 'Advanced' },
    { name: 'CSS', level: 'Intermediate' },
    { name: 'HTML', level: 'Advanced' },
  ];

  return (
    <div className="skills-list">
      <h2 className="skills-title">My Skills</h2>
      {skills.map((skill, index) => (
        <Skill key={index} name={skill.name} level={skill.level} />
      ))}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Profile />
      <SkillsList />
    </div>
  );
}

export default Profile;