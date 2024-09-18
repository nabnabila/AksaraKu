import "../../App.css"; // Adjust the path if necessary
import "../../style/ArrangeWords.css";
import NavigationBar from "../../components/NavigationBar";
import NgaturUkaraSandhangan from "../../components/isikuissandhangan/NgaturUkaraSandhangan";
function IsiKuis2E() {
  return (
    <div>
      {/* navigation bar */}
      <div>
        <NavigationBar />
      </div>
      {/* end of intro section */}

      {/* mode */}
      <div>
        <NgaturUkaraSandhangan />
      </div>
      {/* mode */}
    </div>
  );
}

export default IsiKuis2E;
