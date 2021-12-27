import "bootstrap/dist/css/bootstrap.min.css";
import ProjetsPerso from "./components/Projets/ProjetsPerso";
import ProjetsWild from "./components/Projets/ProjetsWild";
import Mount from "./components/animation/Mount";
import Header from "./components/navbar/Header";
import Skills from "./components/skills/Skills";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Mount />
      <ProjetsPerso />
      <ProjetsWild />
      <Contact />
    </div>
  );
}

export default App;
