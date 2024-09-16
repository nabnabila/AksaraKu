import "../../App.css";
import "../../style/SoundMatchGame.css";
import { Link } from "react-router-dom";
import NavigationBar from "../../components/NavigationBar";
import SwaraSandhangan from "../../components/isikuissandhangan/SwaraSandhangan";
function IsiKuis5E() {
  return (
    <div>
      {/* Navigation Bar Container */}
      <div className="navbar-container">
        {/* Back Arrow */}
        <Link to="/sandhangan/kuis5" className="back-arrow-navbar">
          <i className="bi bi-arrow-left"></i>
        </Link>

        {/* Navigation Bar */}
        <div className="navbar-center">
          <NavigationBar />
        </div>
      </div>
      {/* mode */}
      <div>
        <SwaraSandhangan />
      </div>
      {/* mode */}
    </div>
  );
}

export default IsiKuis5E;
