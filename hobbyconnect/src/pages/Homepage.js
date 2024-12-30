import React, { useState } from 'react';
import SkillForm from '/components/SkillForm';
import SkillList from '/components/SkillList';

const HomePage = () => {
  const [skills, setSkills] = useState([]);

  const addSkill = (newSkill) => {
    setSkills([...skills, newSkill]);
  };

  return (
    <div className="homepage">
      <h2>Welcome to HobbyConnect</h2>
      <SkillForm addSkill={addSkill} />
      <SkillList skills={skills} />
    </div>
  );
};

export default HomePage;
