import CryptRaider from './images/CryptRaider.png';
import kitchenChaosImage from './images/kitchen-chaos.png';
import angularBoardGameImage from './images/angular-board-game.png';
import ToonTanks from './images/ToonTanks.png';
import 'react-multi-carousel/lib/styles.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Projects.css';

export default function Projects() {

  
  const urlF = "https://developerfreak.itch.io/crypt-raider";
  const urlS = "https://developerfreak.itch.io/kitchen-chaos";
  const urlB = "http://polytechnique-montr-al.gitlab.io/log2990/20243/equipe-107/LOG2990-107/#/home";
  const urlM = "https://developerfreak.itch.io/toon-tanks"
  const projects = [
    {
      title: "Kitchen Chaos",
      image: kitchenChaosImage,
      url: urlS,
      description: "Overcooked-inspired co-op game featuring advanced Unity systems and network synchronization",
      tech: ["Unity", "C#", "EventHandler", "ScriptableObjects"]
    },
    {
      title: "Board Game",
      image: angularBoardGameImage,
      url: urlB,
      description: "Real-time multiplayer board game with Angular/NestJS backend handling 10+ concurrent users",
      tech: ["Angular", "TypeScript", "NestJS", "MongoDB"]
    },
    {
      title: "Crypt Raider",
      image: CryptRaider,
      url: urlF,
      description: "A mini-game in Unreal Engine and C++ with object pickup and object identification mechanics",
      tech: ["Unreal", "C++", "Physics", "Blueprints"]
    },
    {
      title: "Toon Tanks",
      image: ToonTanks,
      url: urlM,
      description: "A top down roguelike action game developed in Unreal Engine with different levels and a combat system",
      tech: ["Unreal", "C++", "Combat System", "Level Design"]
    },
    
  ];

  return (
    <div className="projects-grid">
      {projects.map((project) => (
        <Card 
          key={project.title}
          className="project-card"
          data-aos="fade-up" // Remove this if not using AOS
        >
          <div className="card-overlay">
            <Card.Img src={project.image} className="project-image"/>
            <div className="tech-stack">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
          
          <Card.Body className="project-card-body">
            <Card.Title className="project-title">{project.title}</Card.Title>
            <Card.Text className="project-description">{project.description}</Card.Text>
            
            <Button 
              href={project.url} 
              className="project-button"
            >
              <span className="button-text">VIEW PROJECT</span>
              <div className="button-glitch"></div>
            </Button>
          </Card.Body>
          
          <div className="card-border"></div>
        </Card>
      ))}
    </div>
  );
}