import "../../App.css";
import "../../style/ArrangeWords.css";
import { Link } from "react-router-dom";
import NavigationBar from "../../components/NavigationBar";
import NgaturUkaraMurda from "../../components/isikuismurda/NgaturUkaraMurda";
function IsiKuis2C() {
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
        <NgaturUkaraMurda />
      </div>
      {/* mode */}
    </div>
  );
}

export default IsiKuis2C;
