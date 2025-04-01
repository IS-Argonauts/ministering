import "./AdminTools.css";
import Larry from "../../images/stockphoto2.jpg";
import Steve from "../../images/stockPhoto1.jpg";
import Jaden from "../../images/stockphoto2.jpg";
import Keith from "../../images/stockphoto2.jpg";
import Jane from "../../images/stockphoto2.jpg";

function AdminTools() {
  return (
    <>
      <main>
        <h1>Admin Tools</h1>
        <br />
        <h2>Companionship</h2>
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

        <h2>Assignment</h2>
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
        <h2>Companionship</h2>
        <div className="grid-container">
          <div className="grid-item">
            <img src={Keith} alt="Bryli" className="image" />
            <p className="name">Bryli</p> {/* Name under the image */}
          </div>
          <div className="grid-item">
            <img src={Keith} alt="Dieter" className="image" />
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
            <img src={Keith} alt="Bryli" className="image" />
            <p className="name">Bryli</p> {/* Name under the image */}
          </div>
          <div className="grid-item">
            <img src={Keith} alt="Dieter" className="image" />
            <p className="name">Dieter</p> {/* Name under the image */}
          </div>
          <div className="grid-item">
            <img src={Jaden} alt="Jaden" className="image" />
            <p className="name">Jaden</p> {/* Name under the image */}
          </div>
        </div>
      </main>
    </>
  );
}

export default AdminTools;
