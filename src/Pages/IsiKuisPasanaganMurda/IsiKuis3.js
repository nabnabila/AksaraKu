import "../../App.css";
import "../../style/Crossword.css";
import { Link } from "react-router-dom";
import NavigationBar from "../../components/NavigationBar";
import UtakAtikGathukPasanganMurda from "../../components/isikuispasanganmurda/UtakAtikGathukPasanganMurda";
function IsiKuis3D() {
  return (
    <div>
      {/* Navigation Bar Container */}
      <div className="navbar-container">
        {/* Back Arrow */}
        <Link to="/pasanganaksaramurda/kuis4" className="back-arrow-navbar">
          <i className="bi bi-arrow-left"></i>
        </Link>

        {/* Navigation Bar */}
        <div className="navbar-center">
          <NavigationBar />
        </div>
      </div>

      {/* mode */}
      <div>
        <UtakAtikGathukPasanganMurda />
      </div>
      {/* mode */}
    </div>
  );
}

export default IsiKuis3D;
