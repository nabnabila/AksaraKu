import SwaraNglegena from "../../components/isikuisnglegena/SwaraNglegena";
import "../../App.css";
import "../../style/SoundMatchGame.css";
import { Link } from "react-router-dom";
import NavigationBar from "../../components/NavigationBar";
function IsiKuis5A() {
  return (
    <div>
      {/* Navigation Bar Container */}
      <div className="navbar-container">
        {/* Back Arrow */}
        <Link to="/aksaranglegena/kuis1" className="back-arrow-navbar">
          <i className="bi bi-arrow-left"></i>
        </Link>

        {/* Navigation Bar */}
        <div className="navbar-center">
          <NavigationBar />
        </div>
      </div>
      {/* mode */}
      <div>
        <SwaraNglegena />
      </div>
      {/* mode */}
    </div>
  );
}

export default IsiKuis5A;
