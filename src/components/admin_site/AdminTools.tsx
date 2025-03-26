import React from "react";
import "./AdminTools.css";

import Bryli from "../../assets/1stPerson.jpg";
import Dieter from "../../assets/1stPerson.jpg";
import Jaden from "../../assets/1stPerson.jpg";
function AdminTools() {
  return (
    <>
      <h2>Companionship</h2>
      <div className="grid-container">
        <img src={Bryli} alt="Bryli" className="grid-item" />
        <img src={Dieter} alt="Dieter" className="grid-item" />
        <img src={Jaden} alt="Jaden" className="grid-item" />
      </div>
      <h2>Assignment</h2>
      <div className="grid-container">
        <img src={Bryli} alt="Bryli" className="grid-item" />
        <img src={Dieter} alt="Dieter" className="grid-item" />
        <img src={Jaden} alt="Jaden" className="grid-item" />
      </div>
    </>
  );
}
