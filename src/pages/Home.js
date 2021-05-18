import React from "react";
import Social from "../component/Social";

function Home() {
  return (
    <div className="home">
      <header className="hero">
        <h1 className="hero-text">
          Hi, I am
          <span> Muhammed Jawwad</span>
        </h1>
        <p className="h-sub-text">
          A web designer or developer focused on crafting great web experiences.
          Designing and Coding have been my passion since the days I started
          working with computers but I found myself into web design/development
          since 2018. I enjoy creating beautifully designed, intuitive and
          functional websites.
        </p>
        <Social/>

       
       
      </header>
     
    </div>
  );
}

export default Home;
