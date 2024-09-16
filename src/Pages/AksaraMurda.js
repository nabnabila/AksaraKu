import "../App.css"; // Adjust the path if necessary
import NavigationBar from "../components/NavigationBar"; // Adjust the path if necessary
import "../style/LandingPage.css"; // Adjust the path if necessary
import Mode3 from "../components/Mode3";

function AksaraMurda() {
  return (
    <div>
      {/* navigation bar */}
      <div>
        <NavigationBar />
      </div>
      {/* end of intro section */}

      {/* mode */}
      <div>
        <Mode3 />
      </div>
      {/* mode */}
    </div>
  );
}

export default AksaraMurda;
