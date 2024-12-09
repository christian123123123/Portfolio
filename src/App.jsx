import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import Skills from './Skills';
import Projects from './Projects';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
/>
      <NavBar />
      <div className="portfolio">
        <section className="section home" id="home">
          <Home></Home>
        </section>
        <section className="section skills" id="skills">
        <h1 className="section-title">What I Can Do</h1>
          <Skills />
        </section>
        <section className="section projects" id="projects">
        <Projects/>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
