import React from "react";
import "./AdminTools.css";
import Bryli from "../../assets/RandomLady.jpg";
import Dieter from "../../assets/RandomMan.jpg";
import Jaden from "../../assets/Jaden.jpg";
function AdminTools() {
  return (
    <>
      <h2>Companionship</h2>
      <div className="grid-container">
        <div className="grid-item">
          <img src={Bryli} alt="Bryli" className="image" />
          <p className="name">Bryli</p> {/* Name under the image */}
        </div>
        <div className="grid-item">
          <img src={Dieter} alt="Dieter" className="image" />
          <p className="name">Dieter</p> {/* Name under the image */}
        </div>
        <div className="grid-item">
          <img src={Jaden} alt="Jaden" className="image" />
          <p className="name">Jaden</p> {/* Name under the image */}
        </div>
      </div>

      <h2>Assignment</h2>
      <div className="grid-container">
        <div className="grid-item">
          <img src={Bryli} alt="Bryli" className="image" />
          <p className="name">Bryli</p> {/* Name under the image */}
        </div>
        <div className="grid-item">
          <img src={Dieter} alt="Dieter" className="image" />
          <p className="name">Dieter</p> {/* Name under the image */}
        </div>
        <div className="grid-item">
          <img src={Jaden} alt="Jaden" className="image" />
          <p className="name">Jaden</p> {/* Name under the image */}
        </div>
      </div>
    </>
  );
}

export default AdminTools;
