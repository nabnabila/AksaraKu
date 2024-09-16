import "../App.css"; // Adjust the path if necessary
import NavigationBar from "../components/NavigationBar"; // Adjust the path if necessary
import "../style/LandingPage.css"; // Adjust the path if necessary
import Mode1 from "../components/Mode1"; // Adjust the path if necessary

function AksaraNglegena() {
  return (
    <div>
      {/* navigation bar */}
      <div>
        <NavigationBar />
      </div>
      {/* end of intro section */}

      {/* mode */}
      <div>
        <Mode1 />
      </div>
      {/* mode */}
    </div>
  );
}

export default AksaraNglegena;
