import React, { useState } from 'react';

const SkillForm = ({ addSkill }) => {
  const [skill, setSkill] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (skill.trim()) {
      addSkill(skill);
      setSkill('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="skill-form">
      <input
        type="text"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
        placeholder="Enter a skill..."
      />
      <button type="submit">Add Skill</button>
    </form>
  );
};

export default SkillForm;
