import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import ScrollAnimation from 'react-animate-on-scroll';
import Fade from 'react-reveal/Fade';

class MainCarousel extends Component {
  render() {
    return (
      <div className="carousel-container">
      <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("./photos/img1.PNG")}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Terrible original ideas</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("./photos/img2.PNG")}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>And even worse 'practical' ideas</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
    )
  }
}

class CarouselArea extends Component {
  render() {
    return (
      <Fade>
        <div className="carousel-container">
          <Container>
            <h2>Here are said web things</h2>
            <MainCarousel />
          </Container>
        </div>
      </Fade>
    )
  }
}

class Name extends Component {
  render() {
    return (
      <Fade><div className="name">I do web things</div></Fade>
    )
  }
}

class Media extends Component {
  render() {
    return (
      <Fade>
        <div className="media">
          <h2>Find me at none of these</h2>
        </div>
      </Fade>
    )
  }
}

class App extends Component {
  render() {
    return (
        <div>
          <Name />
          <CarouselArea />
          <Media />
        </div>
    );
  }
}

export default App;
