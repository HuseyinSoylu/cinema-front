import React from "react";
import { useState } from "react";
import zamansizlar from "../../assets/zamansizlar.jpeg";
import random from "../../assets/random.jpg";
import third from "../../assets/third.jpeg";
import "./Carousel.css";
import { Carousel } from "react-bootstrap";

const MainCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="d-block w-100" src={third} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={zamansizlar} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={random} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MainCarousel;
