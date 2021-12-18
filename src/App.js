import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/navbar/Header";
import Description from "./components/description/Description";
import ProjetsPerso from "./components/Projets/ProjetsPerso";
import ProjetsWild from "./components/Projets/ProjetsWild";
import Contact from "./components/Contact";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div className="App">
      <Header />
      <Description />
      <Skills />
      <ProjetsPerso />
      <ProjetsWild />
      <Contact />
    </div>
  );
}

export default App;
