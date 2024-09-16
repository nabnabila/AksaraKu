import "../App.css"; // Adjust the path if necessary
import NavigationBar from "../components/NavigationBar"; // Adjust the path if necessary
import "../style/LandingPage.css"; // Adjust the path if necessary
import Mode4 from "../components/Mode4";

function PasanganAksaraMurda() {
  return (
    <div>
      {/* navigation bar */}
      <div>
        <NavigationBar />
      </div>
      {/* end of intro section */}

      {/* mode */}
      <div>
        <Mode4 />
      </div>
      {/* mode */}
    </div>
  );
}

export default PasanganAksaraMurda;
