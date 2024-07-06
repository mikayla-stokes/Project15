// U99796912

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

const WorkExperience = ({ jobTitle, companyName, duration }) => {
  return (
    <div className="work-experience">
      <h3 className="job-title">{jobTitle}</h3>
      <p className="company-name">{companyName}</p>
      <p className="duration">{duration}</p>
    </div>
  );
};

const WorkExperienceList = () => {
  const experiences = [
    { jobTitle: 'AI and Data Analytics Intern', companyName: 'American Torch Tip', duration: 'May 2024 - August 2024' },
    { jobTitle: 'Teaching Assistant for Statistics', companyName: 'University of South Florida', duration: 'August 2023 - Current' },
    { jobTitle: 'Leasing Agent', companyName: 'Campus Life & Style', duration: 'July 2022 - February 2024' },
  ];

  return (
    <div className="work-experience-list">
      <h2 className="work-experience-title">Work Experience</h2>
      {experiences.map((experience, index) => (
        <WorkExperience
          key={index}
          jobTitle={experience.jobTitle}
          companyName={experience.companyName}
          duration={experience.duration}
        />
      ))}
    </div>
  );
};

const Education = ({ school, degree, major, years }) => {
  return (
    <div className="education">
      <h3 className="school-name">{school}</h3>
      <p className="degree">{degree}</p>
      <p className="major">{major}</p>
      <p className="years">{years}</p>
    </div>
  );
};

const EducationList = () => {
  const educationDetails = {
    school: 'University of South Florida',
    degree: 'Bachelor of Science',
    major: 'Business Analytics and Information Systems',
    years: 'August 2022 - Current',
  };

  return (
    <div className="education-list">
      <h2 className="education-title">Educational Background</h2>
      <Education {...educationDetails} />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Profile />
      <SkillsList />
      <WorkExperienceList />
      <EducationList />
    </div>
  );
}

export default App;