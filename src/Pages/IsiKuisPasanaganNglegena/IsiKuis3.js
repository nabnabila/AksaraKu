import "../../App.css";
import "../../style/Crossword.css";
import { Link } from "react-router-dom";
import NavigationBar from "../../components/NavigationBar";
import UtakAtikGathukPasanganNglegena from "../../components/isikuispasangannglegena/UtakAtikGathukPasanganNglegena";
function IsiKuis3B() {
  return (
    <div>
      {/* Navigation Bar Container */}
      <div className="navbar-container">
        {/* Back Arrow */}
        <Link to="/pasanganaksaranglegena/kuis2" className="back-arrow-navbar">
          <i className="bi bi-arrow-left"></i>
        </Link>

        {/* Navigation Bar */}
        <div className="navbar-center">
          <NavigationBar />
        </div>
      </div>

      {/* mode */}
      <div>
        <UtakAtikGathukPasanganNglegena />
      </div>
      {/* mode */}
    </div>
  );
}

export default IsiKuis3B;
