import React from 'react';

const SkillList = ({ skills }) => {
  return (
    <ul className="skill-list">
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  );
};

export default SkillList;
