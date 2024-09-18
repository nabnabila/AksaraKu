import "../../App.css";
import "../../style/ImageMatch.css";
import { Link } from "react-router-dom";
import NavigationBar from "../../components/NavigationBar";
import NyocokakeGambar from "../../components/isikuispasanganmurda/GambarPasanganMurda";
function IsiKuis4D() {
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
        <NyocokakeGambar
          nextPagePath={"/pasanganaksaramurda/kuis4/nyokakeswara"}
        />
      </div>
      {/* mode */}
    </div>
  );
}

export default IsiKuis4D;
