import flappyBirdImage from './images/flappy-bird-screenshots.png';
import kitchenChaosImage from './images/kitchen-chaos.png';
import angularBoardGameImage from './images/angular-board-game.png';
import 'react-multi-carousel/lib/styles.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Projects.css';

export default function Projects() {

  
  const urlF = "https://developerfreak.itch.io/flappy-bird-twist";
  const urlS = "https://developerfreak.itch.io/kitchen-chaos";
  const urlB = "http://polytechnique-montr-al.gitlab.io/log2990/20243/equipe-107/LOG2990-107/#/home";
  const projects = [
    {
      title: "Kitchen Chaos",
      image: kitchenChaosImage,
      url: urlS,
      description: "Overcooked-inspired co-op game featuring advanced Unity systems and network synchronization",
      tech: ["Unity", "C#", "EventHandler", "ScriptableObjects"]
    },
    {
      title: "Board Game Platform",
      image: angularBoardGameImage,
      url: urlB,
      description: "Real-time multiplayer board game with Angular/NestJS backend handling 10+ concurrent users",
      tech: ["Angular", "TypeScript", "NestJS", "MongoDB"]
    },
    {
      title: "Flappy Bird Clone",
      image: flappyBirdImage,
      url: urlF,
      description: "A Flappy Bird clone developed in Unity with procedural generation and adaptive difficulty",
      tech: ["Unity", "C#", "Physics", "UI System"]
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