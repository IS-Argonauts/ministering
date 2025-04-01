import "./AdminTools.css";
import Larry from "../../images/stockphoto2.jpg";
import Steve from "../../assets/RandomMan.jpg";
import Keith from "../../images/Keith.jpeg";
import Jane from "../../images/stockPhoto1.jpg";
import Russ from "../../images/Russ.jpg";
import Alexander from "../../images/Alexander.jpg";
import Hayden from "../../images/Hayden.jpeg";
import Brynlie from "../../images/Brynlie.jpg";
import Sadie from "../../images/Sadie.jpeg";

function AdminTools() {
  return (
    <>
      <main>
        <h1>Admin Tools</h1>
        <br />
        <h2>Companionship 1</h2>
        <div className="grid-container">
          <div className="grid-item">
            <img src={Larry} alt="Larry" className="image" />
            <p className="name">Larry Smith</p> {/* Name under the image */}
          </div>
          <div className="grid-item">
            <img src={Steve} alt="Steve" className="image" />
            <p className="name">Steve Boyd</p> {/* Name under the image */}
          </div>
        </div>

        <h2>Assignment 1</h2>
        <div className="grid-container">
          <div className="grid-item">
            <img src={Keith} alt="Keith" className="image" />
            <p className="name">Keith Carney</p> {/* Name under the image */}
          </div>
          <div className="grid-item">
            <img src={Jane} alt="Raymond" className="image" />
            <p className="name">Jane Ludwig</p> {/* Name under the image */}
          </div>
        </div>
        <br />
        <h2>Companionship 2</h2>
        <div className="grid-container">
          <div className="grid-item">
            <img src={Russ} alt="Bryli" className="image" />
            <p className="name">Russ Parker</p> {/* Name under the image */}
          </div>
          <div className="grid-item">
            <img src={Hayden} alt="Dieter" className="image" />
            <p className="name">Hayden Cluff</p> {/* Name under the image */}
          </div>
        </div>

        <h2>Assignment 2</h2>
        <div className="grid-container">
          <div className="grid-item">
            <img src={Brynlie} alt="Bryli" className="image" />
            <p className="name">Brynlie Knolls</p> {/* Name under the image */}
          </div>
          <div className="grid-item">
            <img src={Sadie} alt="Dieter" className="image" />
            <p className="name">Sadie Poff</p> {/* Name under the image */}
          </div>
          <div className="grid-item">
            <img src={Alexander} alt="Jaden" className="image" />
            <p className="name">Alexander Hedges</p>{" "}
            {/* Name under the image */}
          </div>
        </div>
      </main>
    </>
  );
}

export default AdminTools;
