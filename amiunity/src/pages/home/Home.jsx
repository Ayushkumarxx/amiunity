import React from "react";
import "./home.css";
import { hero1, hero2, hero3 } from "../../assets";
import { Navbar } from "../../components/index";
const Home = () => {
  return (
    <>
      <Navbar />

      {/*amity community text box */}
      <div className="ami-com-box">
        <div className="box1">
          <p>Amity</p>
        </div>
        <div className="box2">
          <p>Community</p>
        </div>
      </div>

      {/* hero section */}

      <section className="hero">
        <h1 className="hero-text">
          Your career is <span>not a solo adventure</span>
          <br />
          Lets join some clubs/events
        </h1>

        <div className="hero-card-box">
          <div className="hero-card">
            <img src={hero1} className="hero-img" alt="" />
          </div>
          <div className="hero-card hero-card-down">
            <img src={hero3} className="hero-img" alt="" />
          </div>
          <div className="hero-card hero-card-left">
            <img src={hero2} className="hero-img" alt="" />
          </div>
        
        </div>
      </section>
    </>
  );
};

export default Home;
