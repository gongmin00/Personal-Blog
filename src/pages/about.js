import React from "react"
import Header from "../components/Header"
import Carousel from "react-bootstrap/Carousel"
import Footer from "../components/Footer"
import "../../node_modules/bootstrap/dist/css/bootstrap.css"
import "../style/main.scss"

//react-bootsrapt carousel need to import css file to work
const About = () => {
    return (
        <div className="grid-container">
            <Header />
            <div className="grid-body">
                <Carousel>
                    <Carousel.Item className="carousel-item">
                        <img className="carousel-image" src={require('../images/sun.png')} alt="first slide" />
                        <Carousel.Caption>
                            <h2>This is First Slide</h2>
                            <p>This is 1st slide content</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item className="carousel-item">
                        <img className="carousel-image" src={require('../images/moon.png')} alt="first slide" />
                        <Carousel.Caption>
                            <h2>This is Second Slide</h2>
                            <p>This is 2nd slide content</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </div>
            <Footer className="grid-footer" />
        </div>

    )
}

export default About