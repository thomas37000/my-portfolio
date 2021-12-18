import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/navbar/Header";
import Description from "./components/description/Description";
import ProjetsPerso from "./components/Projets/ProjetsPerso";

function App() {
  return (
    <div className="App">
      <Header />
      <Description />
      <ProjetsPerso />
    </div>
  );
}

export default App;
