import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Carousel extends Component {
  render() {
    return (
      <div style={{ marginTop: "0px" }}>
        <Slider
          speed={50}
          slideToShow={1}
          slidesToScroll={1}
          infinite={true}
          dots={true}
          slidesToShow={1}
          slidesToScroll={1}
          // autoplay={true}
          speed={16000}
          autoplaySpeed={30}
          cssEase={"linear"}
          fullwidth={true}
          arrows={true}
        >
          {/* <div>
          <img
            className="responsive-img"
            src="https://mobirise.com/bootstrap-carousel/assets2/images/ksenia-makagonova-229007-2000x1333.jpg"
            //style={{ width: "100%" }}
          />
        </div> */}

          <div id="hero">
            <div id="hero-overlay" />
            {/* <img
            className="responsive-img"
            src="https://technext.github.io/travelers/images/hero_bg_1.jpg"
            style={{ width: "100%" }}
          /> */}
          </div>
          <div id="hero1">
            <div id="hero1-overlay" />
          </div>
          {/* <div style={{ maxHeight: "200px" }}>
          <img
            className="responsive-img"
            src="https://technext.github.io/travelers/images/hero_bg_2.jpg"
            style={{ width: "100%" }}
          />
        </div> */}
          {/* <div>
          <img
            className="responsive-img"
            src="https://mobirise.com/bootstrap-carousel/assets2/images/jurica-koletic-321003-2000x1333.jpg"
            style={{ width: "100%" }}
          />
        </div> */}
          {/* <div style={{ maxHeight: "200px" }}>
          <img
            className="responsive-img"
            src="https://technext.github.io/noah/images/work-2.jpg"
            style={{ width: "100%" }}
          />
        </div> */}
        </Slider>
      </div>
    );
  }
}
