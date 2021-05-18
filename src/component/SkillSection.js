import React from "react";

function SkillSection({ skill, progress, width }) {
  return (
    <div className="SkillSection">
      <div className="skil-con">
        <h5 className="skil-tit">{skill}</h5>
        <div className="skil-bar">
          <p className="skil-text">{progress}</p>
          <div className="progress">
            <div className="skil-pro">
              <div className="pro" style={{ width: width }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillSection;
