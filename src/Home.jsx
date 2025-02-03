// Home.jsx
import { useEffect, useState } from 'react';
import './Home.css';

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const roles = ["Game Developer", "Full-Stack Engineer", "Problem Solver"];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    setLoaded(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleEmailClick = () => {
    window.location.href = "mailto:christian.akkary@outlook.com";
  };

  return (
    <div className={`home-section ${loaded ? 'loaded' : ''}`}>
      <div className="home-content">
        <h4 className="greeting">Hi there! I&apos;m</h4>
        <h1 className="name-glow">CHRISTIAN AKKARY</h1>
        
        <div className="dynamic-role">
          <span className="role-badge">{roles[currentRole]}</span>
        </div>

        <div className="highlights-grid">
          <div className="highlight-card">
            <div className="highlight-number">8+</div>
            <div className="highlight-text">Completed Projects</div>
          </div>
          <div className="highlight-card">
            <div className="highlight-number">5</div>
            <div className="highlight-text">Tech Specialties</div>
          </div>
        </div>

        <p className="bio">
          Software Engineering student at <strong>Polytechnique Montréal</strong> building immersive experiences through code. 
          Currently crafting <span className="highlight">game mechanics</span> in Unity and <span className="highlight">scalable web apps</span> with modern stacks. 
          Passionate about merging technical excellence with creative problem-solving.
        </p>

        <div className="cta-buttons">
          <a href="#projects" className="cta-button primary">See My Work</a>
          <a href="#home"  onClick={handleEmailClick} className="cta-button secondary">Get in Touch</a>
        </div>
      </div>
    </div>
  );
}