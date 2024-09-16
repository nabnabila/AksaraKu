import "../App.css"; // Adjust the path if necessary
import NavigationBar from "../components/NavigationBar"; // Adjust the path if necessary
import "../style/LandingPage.css"; // Adjust the path if necessary
import PilihanKuis2 from "../components/PilihanKuis2";

function Kuis2() {
  return (
    <div>
      {/* intro section */}
      <div>
        <NavigationBar />
      </div>
      {/* end of intro section */}

      {/* category section */}
      <div>
        <PilihanKuis2 />
      </div>
      {/* end of category section */}
    </div>
  );
}

export default Kuis2;
