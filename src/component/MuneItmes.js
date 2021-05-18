import React from "react";

function MuneItmes({ menuItem }) {
  return (
    <div className="port">
      {menuItem.map((item) => {
        return (
          <div className="portfoilo" key={item.id}>
            <div className="iamge-data">
              <img src={item.image} alt="" />
              <ul className="hover-item">
                <li>
                  <a href={item.link1}>{item.icon1}</a>
                  <a href={item.link2}>{item.icon2}</a>
                </li>
              </ul>
            </div>
            <h5>{item.title}</h5>
            <p>Palceholder peragrahp </p>
          </div>
        );
      })}
    </div>
  );
}

export default MuneItmes;
