import React from "react";
import Title from "../components/Title";
import Education from "../components/Education";

function MyEducation() {
  return (
    <div className="AboutPage">
      <Title title="Education" span="Education" />
      <Education
        date={"2021-now"}
        title={"Developpment Informatique"}
        school={"OFPPT"}
      />
      <Education
        date={"2019"}
        title={"Bac Sience de la vie et la terre "}
        school={"Lycée Kadi ayad Casa"}
      />
      <Title title="Experience" span="Experience" />
      <Education date={"2010-now"} title={"Freelance web developer"} />
      <Education date={"2019-2022"} title={"Full-stack Developer"} />
    </div>
  );
}

export default MyEducation;
