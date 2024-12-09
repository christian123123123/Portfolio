import flappyBirdImage from './images/flappy-bird-screenshots.png';
import spaceInvaderImage from './images/space-invader.png';
import angularBoardGameImage from './images/angular-board-game.png';
import 'react-multi-carousel/lib/styles.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Projects.css';

export default function Projects() {
    const urlF = "https://developerfreak.itch.io/flappy-bird-twist";
    const urlS = "https://github.com/christian123123123/Space-Invaders";
    const urlB = "http://polytechnique-montr-al.gitlab.io/log2990/20243/equipe-107/LOG2990-107/#/home"
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
        <Card className="project-card"  key="space-invader">
            <Card.Img variant="top" src={spaceInvaderImage} className="project-image"/>
            <Card.Body className="project-card-body">
                <Card.Title className="project-title">Space Invader Clone </Card.Title>
                <Card.Text className="project-description">
                    A Space Invader clone developed in Unity. I had to learn how to instantiate objects and enemies with specific speed and velocity.
                </Card.Text>
                <Button variant="primary" className="project-button" href={urlS}>See Project</Button>
            </Card.Body>
        </Card>
       
        </>
    );
}
