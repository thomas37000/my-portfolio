import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/navbar/Header";
import Description from "./components/description/Description";
import ProjetsPerso from "./components/Projets/ProjetsPerso";
import ProjetsWild from "./components/Projets/ProjetsWild";

function App() {
  return (
    <div className="App">
      <Header />
      <Description />
      <ProjetsPerso />
      <ProjetsWild />
    </div>
  );
}

export default App;
