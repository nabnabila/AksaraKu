import "../../App.css";
import "../../style/Crossword.css";
import { Link } from "react-router-dom";
import NavigationBar from "../../components/NavigationBar";
import UtakAtikGathukMurda from "../../components/isikuismurda/UtakAtikGathukMurda";
function IsiKuis3C() {
  return (
    <div>
      {/* Navigation Bar Container */}
      <div className="navbar-container">
        {/* Back Arrow */}
        <Link to="/aksaramurda/kuis3" className="back-arrow-navbar">
          <i className="bi bi-arrow-left"></i>
        </Link>

        {/* Navigation Bar */}
        <div className="navbar-center">
          <NavigationBar />
        </div>
      </div>
      {/* mode */}
      <div>
        <UtakAtikGathukMurda />
      </div>
      {/* mode */}
    </div>
  );
}

export default IsiKuis3C;
