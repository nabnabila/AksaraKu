import "../../App.css";
import "../../style/WordSearch.css";
import { Link } from "react-router-dom";
import NavigationBar from "../../components/NavigationBar";
import NggolekiTembang from "../../components/isikuispasangannglegena/NggolekiTembangPasanganNglegena";
function IsiKuis1B() {
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
        <NggolekiTembang />
      </div>
      {/* mode */}
    </div>
  );
}

export default IsiKuis1B;
