import Carousel from 'react-bootstrap/Carousel';
import './Skills.css';
import image from './images/meter1.svg';
import image2 from './images/meter2.svg';
import image3 from './images/meter3.svg';

export default function Skills() {
    return (
        <>
        <div className="skills-section">
            <Carousel indicators={false} interval={3000} controls={true}>
                <Carousel.Item>
                    <div className="carousel-item-row">
                        <div className="carousel-item-content unity">
                            <img className="carousel-image" src={image3} alt="Meter 1" />
                            <p>Unity</p>
                        </div>
                        <div className="carousel-item-content react">
                            <img className="carousel-image" src={image2} alt="Meter 2" />
                            <p>React</p>
                        </div>
                        <div className="carousel-item-content JavaScript">
                            <img className="carousel-image" src={image} alt="Meter 3" />
                            <p>JavaScript</p>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                <div className="carousel-item-row">
                        <div className="carousel-item-content css">
                            <img className="carousel-image" src={image} alt="Meter 4" />
                            <p>CSS</p>
                        </div>
                        <div className="carousel-item-content html">
                            <img className="carousel-image" src={image} alt="Meter 2" />
                            <p>HTML</p>
                        </div>
                        <div className="carousel-item-content typescript">
                            <img className="carousel-image" src={image} alt="Meter 3" />
                            <p>TypeScript</p>
                        </div>
                    </div>
                    </Carousel.Item>

                    <Carousel.Item>
                <div className="carousel-item-row">
                        <div className="carousel-item-content angular">
                            <img className="carousel-image" src={image} alt="Meter 4" />
                            <p>Angular</p>
                        </div>
                        <div className="carousel-item-content CPP">
                            <img className="carousel-image" src={image3} alt="Meter 2" />
                            <p>C++</p>
                        </div>
                        <div className="carousel-item-content Csh">
                            <img className="carousel-image" src={image3} alt="Meter 3" />
                            <p>C#</p>
                        </div>
                    </div>
                    </Carousel.Item>

                    <Carousel.Item>
                <div className="carousel-item-row">
                        <div className="carousel-item-content express">
                            <img className="carousel-image" src={image2} alt="Meter 4" />
                            <p>Express</p>
                        </div>
                        <div className="carousel-item-content nest">
                            <img className="carousel-image" src={image3} alt="Meter 2" />
                            <p>Nest</p>
                        </div>
                        <div className="carousel-item-content Java">
                            <img className="carousel-image" src={image} alt="Meter 3" />
                            <p>Java</p>
                        </div>
                    </div>
                    </Carousel.Item>

                    <Carousel.Item>
                <div className="carousel-item-row">
                        <div className="carousel-item-content SQL">
                            <img className="carousel-image" src={image} alt="Meter 4" />
                            <p>SQL</p>
                        </div>
                        <div className="carousel-item-content mongoDB">
                            <img className="carousel-image" src={image} alt="Meter 2" />
                            <p>MongoDB</p>
                        </div>
                        <div className="carousel-item-content Git">
                            <img className="carousel-image" src={image} alt="Meter 3" />
                            <p>Git</p>
                        </div>
                    </div>
                    </Carousel.Item>
            </Carousel>
        </div>
        </>
    );
}
