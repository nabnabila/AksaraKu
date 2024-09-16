import "../App.css"; // Adjust the path if necessary
import "../style/LandingPage.css"; // Adjust the path if necessary
import Mode2 from "../components/Mode2"; // Adjust the path if necessary
import NavigationBar from "../components/NavigationBar";
function PasanganAksaraNglegena() {
  return (
    <div>
      {/* navigation bar */}
      <div>
        <NavigationBar />
      </div>
      {/* end of intro section */}

      {/* mode */}
      <div>
        <Mode2 />
      </div>
      {/* mode */}
    </div>
  );
}

export default PasanganAksaraNglegena;
