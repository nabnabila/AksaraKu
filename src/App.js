import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Homepage";
import AksaraNglegena from "./Pages/AksaraNglegena";
import PasanganAksaraNglegena from "./Pages/PasanganAksaraNglegena";
import AksaraMurda from "./Pages/AksaraMurda";
import PasanganAksaraMurda from "./Pages/PasanganAksaraMurda";
import Sandhangan from "./Pages/Sandhangan";
import Belajar1 from "./Pages/Belajar1";
import Belajar2 from "./Pages/Belajar2";
import Belajar3 from "./Pages/Belajar3";
import Belajar4 from "./Pages/Belajar4";
import Belajar5 from "./Pages/Belajar5";
import Kuis1 from "./Pages/Kuis1";
import Kuis2 from "./Pages/Kuis2";
import Kuis3 from "./Pages/Kuis3";
import Kuis4 from "./Pages/Kuis4";
import Kuis5 from "./Pages/Kuis5";
import IsiKuis1A from "./Pages/IsiKuisNglegena/IsiKuis1";
import IsiKuis1B from "./Pages/IsiKuisPasanaganNglegena/IsiKuis1";
import IsiKuis1C from "./Pages/IsiKuisMurda/IsiKuis1";
import IsiKuis1D from "./Pages/IsiKuisPasanaganMurda/IsiKuis1";
import IsiKuis1E from "./Pages/IsiKuisSandhangan/IsiKuis1";
import IsiKuis2A from "./Pages/IsiKuisNglegena/IsiKuis2";
import IsiKuis2C from "./Pages/IsiKuisMurda/IsiKuis2";
import IsiKuis2B from "./Pages/IsiKuisPasanaganNglegena/IsiKuis2";
import IsiKuis2D from "./Pages/IsiKuisPasanaganMurda/IsiKuis2";
import IsiKuis2E from "./Pages/IsiKuisSandhangan/IsiKuis2";
import IsiKuis3A from "./Pages/IsiKuisNglegena/IsiKuis3";
import IsiKuis3B from "./Pages/IsiKuisPasanaganNglegena/IsiKuis3";
import IsiKuis3C from "./Pages/IsiKuisMurda/IsiKuis3";
import IsiKuis3D from "./Pages/IsiKuisPasanaganMurda/IsiKuis3";
import IsiKuis3E from "./Pages/IsiKuisSandhangan/IsiKuis3";
import IsiKuis4A from "./Pages/IsiKuisNglegena/IsiKuis4";
import IsiKuis4B from "./Pages/IsiKuisPasanaganNglegena/IsiKuis4";
import IsiKuis4C from "./Pages/IsiKuisMurda/IsiKuis4";
import IsiKuis4D from "./Pages/IsiKuisPasanaganMurda/IsiKuis4";
import IsiKuis4E from "./Pages/IsiKuisSandhangan/IsiKuis4";
import IsiKuis5A from "./Pages/IsiKuisNglegena/IsiKuis5";
import IsiKuis5B from "./Pages/IsiKuisPasanaganNglegena/IsiKuis5";
import IsiKuis5C from "./Pages/IsiKuisMurda/IsiKuis5";
import IsiKuis5D from "./Pages/IsiKuisPasanaganMurda/IsiKuis5";
import IsiKuis5E from "./Pages/IsiKuisSandhangan/IsiKuis5";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/aksaranglegena" Component={AksaraNglegena} />
          <Route
            path="/pasanganaksaranglegena"
            Component={PasanganAksaraNglegena}
          />
          <Route path="/aksaramurda" Component={AksaraMurda} />
          <Route path="/pasanganaksaramurda" Component={PasanganAksaraMurda} />
          <Route path="/sandhangan1" Component={Sandhangan} />
          <Route path="/belajar1" Component={Belajar1} />
          <Route path="/aksaranglegena/belajar1" Component={Belajar1} />
          <Route path="/pasanganaksaranglegena/belajar2" Component={Belajar2} />
          <Route path="/aksaramurda/belajar3" Component={Belajar3} />
          <Route path="/pasanganaksaramurda/belajar4" Component={Belajar4} />
          <Route path="/sandhangan/belajar5" Component={Belajar5} />
          <Route path="/aksaranglegena/kuis1" Component={Kuis1} />
          <Route path="/pasanganaksaranglegena/kuis2" Component={Kuis2} />
          <Route path="/aksaramurda/kuis3" Component={Kuis3} />
          <Route path="/pasanganaksaramurda/kuis4" Component={Kuis4} />
          <Route path="/sandhangan/kuis5" Component={Kuis5} />
          <Route
            path="/aksaranglegena/kuis1/nggolekitembangnglegena"
            Component={IsiKuis1A}
          />
          <Route
            path="/pasanganaksaranglegena/kuis2/nggolekitembangpasangannglegena"
            Component={IsiKuis1B}
          />
          <Route
            path="/aksaramurda/kuis3/nggolekitembangmurda"
            Component={IsiKuis1C}
          />
          <Route
            path="/pasanganaksaramurda/kuis4/nggolekitembangpasanganmurda"
            Component={IsiKuis1D}
          />
          <Route
            path="/sandhangan/kuis5/nggolekitembangsandhangan"
            Component={IsiKuis1E}
          />
          <Route
            path="/aksaranglegena/kuis1/ngaturukaranglegena"
            Component={IsiKuis2A}
          />
          <Route
            path="/pasanganaksaranglegena/kuis2/ngaturukarapasangannglegena"
            Component={IsiKuis2B}
          />
          <Route
            path="/aksaramurda/kuis3/ngaturukaramurda"
            Component={IsiKuis2C}
          />
          <Route
            path="/pasanganaksaramurda/kuis4/ngaturukarapasanganmurda"
            Component={IsiKuis2D}
          />
          <Route
            path="/sandhangan/kuis5/ngaturukarasandhangan"
            Component={IsiKuis2E}
          />
          <Route
            path="/aksaranglegena/kuis1/utakatikgathuknglegena"
            Component={IsiKuis3A}
          />

          <Route
            path="/pasanganaksaranglegena/kuis2/utakatikgathukpasangannglegena"
            Component={IsiKuis3B}
          />
          <Route
            path="/aksaramurda/kuis3/utakatikgathukmurda"
            Component={IsiKuis3C}
          />
          <Route
            path="/pasanganaksaramurda/kuis4/utakatikgathukpasanganmurda"
            Component={IsiKuis3D}
          />
          <Route
            path="/sandhangan/kuis5/utakatikgathuksandhangan"
            Component={IsiKuis3E}
          />
          <Route
            path="/aksaranglegena/kuis1/nyocokakegambarnglegena"
            Component={IsiKuis4A}
          />
          <Route
            path="/pasanganaksaranglegena/kuis2/nyocokakegambarpasangannglegena"
            Component={IsiKuis4B}
          />
          <Route
            path="/aksaramurda/kuis3/nyocokakegambarmurda"
            Component={IsiKuis4C}
          />
          <Route
            path="/pasanganaksaramurda/kuis4/nyocokakegambarpasanganmurda"
            Component={IsiKuis4D}
          />
          <Route
            path="/sandhangan/kuis5/nyocokakegambarsandhangan"
            Component={IsiKuis4E}
          />
          <Route
            path="/aksaranglegena/kuis1/nyocokakeswara"
            Component={IsiKuis5A}
          />
          <Route
            path="/pasanganaksaranglegena/kuis2/nyocokakeswara"
            Component={IsiKuis5B}
          />
          <Route
            path="/aksaramurda/kuis3/nyocokakeswara"
            Component={IsiKuis5C}
          />
          <Route
            path="/pasanganaksaramurda/kuis4/nyocokakeswara"
            Component={IsiKuis5D}
          />
          <Route
            path="/sandhangan/kuis5/nyocokakeswara"
            Component={IsiKuis5E}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
