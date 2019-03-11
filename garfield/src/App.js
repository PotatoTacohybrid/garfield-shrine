import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';

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

class Name extends Component {
  render() {
    return (
      <div className="name">I do web things</div>
    )
  }
}

class App extends Component {
  render() {
    return (
        <div>
          <Name />
          <div className="carousel-container">
            <Container>
              <MainCarousel />
            </Container>
          </div>

        </div>
    );
  }
}

export default App;
