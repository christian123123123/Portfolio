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
    return (
        <>
        <Card className="project-card"  key="flappy-bird">
            <Card.Img variant="top" src={flappyBirdImage} className="project-image"/>
            <Card.Body className="project-card-body">

                <Card.Title className="project-title">Flappy Bird Clone</Card.Title>
                <Card.Text className="project-description">
                    A Flappy Bird clone developed in Unity as my first game development project. It features simple gameplay mechanics.
                </Card.Text>
                <Button variant="primary" className="project-button" href={urlF}>See Project</Button>
            </Card.Body>
        </Card>
        <Card className="project-card"  key="board-game">
            <Card.Img variant="top" src={angularBoardGameImage} className="project-image"/>
            <Card.Body className="project-card-body">
                <Card.Title className="project-title">Board Game</Card.Title>
                <Card.Text className="project-description">
                    A board game developed in Angular using TypeScript and NestJS.
                   
                </Card.Text>
                <Button variant="primary" className="project-button" href={urlB}>See Project</Button>
            </Card.Body>
        </Card>
        <Card className="project-card"  key="kitchen-chaos">
            <Card.Img variant="top" src={kitchenChaosImage} className="project-image"/>
            <Card.Body className="project-card-body">
                <Card.Title className="project-title">Kitchen Chaos</Card.Title>
                <Card.Text className="project-description">
                    A Unity project that contains advanced features like event handling, scriptable objects and more. 
                </Card.Text>
                <Button variant="primary" className="project-button" href={urlS}>See Project</Button>
            </Card.Body>
        </Card>
       
        </>
    );
}
