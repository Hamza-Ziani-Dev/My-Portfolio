import React from "react";
import SkillsSection from "../components/SkillsSection";
import Title from "../components/Title";

function MySkills() {
  return (
    <div className="AboutPage">
      <Title title="My Skills" span="My Skills" />
      <div className="skillsContainer">
        <SkillsSection skill={"Html"} progress={"100%"} />
        <SkillsSection skill={"css"} progress={"90%"} />
        <SkillsSection skill={"Javascript"} progress={"75%"} />
        <SkillsSection skill={"Django"} progress={"85%"} />
        <SkillsSection skill={"Nodejs/ExpresJs"} progress={"65%"} />
        <SkillsSection skill={"Angular"} progress={"70%"} />
        <SkillsSection skill={"ReactJs"} progress={"65%"} />
        <SkillsSection skill={"Typescrit"} progress={"55%"} />
        <SkillsSection skill={"C Language"} progress={"70%"} />
        <SkillsSection skill={"Java"} progress={"70%"} />
        <SkillsSection skill={"Python"} progress={"65%"} />
        <SkillsSection skill={"Jquery"} progress={"60%"} />
        <SkillsSection skill={"Wordpress"} progress={"55%"} />
      </div>
    </div>
  );
}

export default MySkills;
