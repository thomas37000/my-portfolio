import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/navbar/Header";
import ProjetsPerso from "./components/Projets/ProjetsPerso";
import ProjetsWild from "./components/Projets/ProjetsWild";
import Contact from "./components/Contact";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div className="App">
      <Header />
      <Skills />
      <ProjetsPerso />
      <ProjetsWild />
      <Contact />
    </div>
  );
}

export default App;
