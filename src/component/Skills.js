import React from "react";

const Skills = (props) => {
  const { skills } = props;
  return (
    <div>
      skill
      {skills.map((item) => (
        <li key={Math.random() * 10}>{item.name}</li>
      ))}
    </div>
  );
};

export default Skills;
