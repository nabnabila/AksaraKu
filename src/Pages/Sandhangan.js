import "../App.css"; // Adjust the path if necessary
import "../style/LandingPage.css"; // Adjust the path if necessary
import Mode5 from "../components/Mode5"; // Adjust the path if necessary
import NavigationBar from "../components/NavigationBar.js";

function Sandhangan() {
  return (
    <div>
      {/* navigation bar */}
      <div>
        <NavigationBar />
      </div>
      {/* end of intro section */}

      {/* mode */}
      <div>
        <Mode5 />
      </div>
      {/* mode */}
    </div>
  );
}

export default Sandhangan;
