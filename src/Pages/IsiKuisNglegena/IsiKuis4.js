import "../../App.css";
import "../../style/ImageMatch.css";
import { Link } from "react-router-dom";
import NavigationBar from "../../components/NavigationBar";
import NyocokakeGambar from "../../components/isikuisnglegena/GambarNglegena";
function IsiKuis4A() {
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
        <NyocokakeGambar
          nextPagePath={"/aksaranglegena/kuis1/nyocokakeswara"}
        />
      </div>
      {/* mode */}
    </div>
  );
}

export default IsiKuis4A;
