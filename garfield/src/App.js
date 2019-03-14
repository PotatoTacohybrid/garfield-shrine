import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Fade from 'react-reveal/Fade';

const MainCarousel = () => {
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

const CarouselArea = () => {
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

const Name = () => {
  return (
    <Fade><div className="name">I do web things</div></Fade>
  )
}

const Media = () => {
    return ( 
      <Fade>
        <div className="media">
          <Container>
            <h2>Find me at none of these</h2>
            <Circle text="Twitter" link="https://www.youtube.com/watch?v=iIsv7MnZ7-0"/>
            <Circle text="Instagram" link="https://www.youtube.com/watch?v=jAT5rNkmGWg"/>
            <Circle text="Funeral" link="https://www.youtube.com/watch?v=NHEaYbDWyQE"/>
            <Circle text="???" link="https://www.youtube.com/watch?v=XEbhjrGyKuE"/>

          </Container>
        </div>

      </Fade>
    )
}

const Circle = (props) => {
  return (
    <a href={props.link} target="_blank"><div className="circle">{props.text}</div></a>
  )
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
