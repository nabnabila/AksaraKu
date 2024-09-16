import "../../App.css";
import "../../style/ImageMatch.css";
import { Link } from "react-router-dom";
import NavigationBar from "../../components/NavigationBar";
import NyocokakeGambar from "../../components/isikuissandhangan/GambarSandhangan";
function IsiKuis4E() {
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
        <NyocokakeGambar nextPagePath={"/sandhangan/kuis5/nyocokakeswara"} />
      </div>
      {/* mode */}
    </div>
  );
}

export default IsiKuis4E;
