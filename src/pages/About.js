import React from "react";
import Tittle from "../component/Tittle";
import Ai from "../img/ai.png";
import Game from "../img/video-game-controller.png";
import Design from "../img/web-design.png";
import ImageSection from "../component/ImageSection";
import ServiceSection from "../component/ServiceSection";
import SkillSection from "../component/SkillSection";

function About() {
  return (
    <div>

    <div className="About-us">
      <div className="about">
        <Tittle title={"About Me"} span={"About Me"} />
        <ImageSection />
        <Tittle title={"My Skills"} span={"My Skills"} />
        <div className="skils-container">
          <SkillSection skill={"javascript"} progress={"60%"} width={"60%"} />
          <SkillSection skill={"Typescript"} progress={"40%"} width={"40%"} />
          <SkillSection skill={"React Js"} progress={"65%"} width={"65%"} />
          <SkillSection skill={"Node Js"} progress={"70%"} width={"70%"} />
          <SkillSection skill={"Java"} progress={"50%"} width={"50%"} />
          <SkillSection skill={"Web Design"} progress={"75%"} width={"75%"} />
          <SkillSection skill={"UI/Ux Design"} progress={"55%"} width={"55%"} />
        </div>
        <Tittle title={"Services"} span={"Services"} />
        <div className="Service-container">
          <ServiceSection Design={Design} Game={Game} Ai={Ai} />
        </div>
      </div>
    </div>
    </div>
  );
}

export default About;
