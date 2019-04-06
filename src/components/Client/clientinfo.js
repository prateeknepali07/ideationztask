import React, { Component } from "react";

export default class clientinfo extends Component {
  render() {
    return (
      <div style={{ margin: "100px" }}>
        <div>
          <ul id="clientheading" className="container" align="center">
            What Our Client Say
          </ul>
          <h4
            id="clientdiscription"
            className="align-center mbr-normal display-2"
          >
            The simplest customer service frustration question of all: "Why
            isn't this as important to you it is to me?"
          </h4>
          <div className="row" style={{ margin: "40px" }}>
            <div className="col s12 m4 12">
              <img
                className="responsive-img"
                id="clientimage"
                src="http://demo.themefisher.com/themefisher/blue/img/member-1.jpg"
                //style={{ width: "40%", height: "185px" }}
              />
            </div>
            <div className="col s12 m4 12">
              <img
                className="responsive-img"
                id="clientimage"
                src="http://demo.themefisher.com/themefisher/biztrox/images/works/work-3.jpg"
                //style={{ width: "30%", height: "185px" }}
              />
            </div>
            <div className="col  s12 m4 12">
              <img
                className="responsive-img"
                id="clientimage"
                src="https://i.pinimg.com/736x/ea/8d/69/ea8d69f8a602d2085db3564fc2e1aa5e--corporate-photography-headshot-photography.jpg?b=t"
                //style={{ width: "30%", height: "185px" }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
