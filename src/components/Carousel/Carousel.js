import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
`;

const Page = styled.div`
  width: 100%;
`;

export default class Carousel extends Component {
  render() {
    return (
      <Wrapper>
        <Slider
          speed={50}
          slideToShow={1}
          slidesToScroll={1}
          infinite={true}
          dots={true}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay={true}
          speed={16000}
          autoplaySpeed={30}
          cssEase={"linear"}
          fullwidth={true}
          arrows={true}
        >
          <div carousel carousel-slider>
            <img
              className="carousel-item"
              src="http://demo.themefisher.com/megakit/images/blog/2.jpg"
              style={{ width: "100%", height: "600px" }}
            />
          </div>
          <div>
            <img
              className="carousel-item"
              src="http://demo.themefisher.com/megakit/images/blog/3.jpg"
              style={{ width: "100%", height: "600px" }}
            />
          </div>
          <div>
            <img
              src="http://demo.themefisher.com/megakit/images/blog/1.jpg"
              style={{ width: "100%", height: "600px" }}
            />
          </div>
          <div>
            <img
              src="http://demo.themefisher.com/megakit/images/bg/home-1.jpg"
              style={{ width: "100%", height: "600px" }}
            />
          </div>
          <div>
            <img
              src="http://demo.themefisher.com/megakit/images/bg/home-5.jpg"
              style={{ width: "100%", height: "600px" }}
            />
          </div>
        </Slider>
      </Wrapper>
    );
  }
}
