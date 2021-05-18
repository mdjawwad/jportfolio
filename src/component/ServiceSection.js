import React from "react";

function ServiceSection({ Design , Game , Ai}) {
  return (
    <div className="service-sec">
      <div className="service">
        <div className="service-content">
          <img src={Design} alt="/"/>
          <h2 className="ser-tit">Web Design</h2>
          <p className="ser-text">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
          </p>
        </div>
      </div>
      <div className="service">
        <div className="service-content">
          <img src={Ai} alt="/" />
          <h2 className="ser-tit">Artificial Intelligence</h2>
          <p className="ser-text">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
          </p>
        </div>
      </div>
      <div className="service">
        <div className="service-content">
          <img src={Game} alt="/"/>
          <h2 className="ser-tit">Game Development</h2>
          <p className="ser-text">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServiceSection;
