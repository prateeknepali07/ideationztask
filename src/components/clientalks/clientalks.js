import React, { Component } from "react";

export default class clientalks extends Component {
  render() {
    return (
      <div>
        <h2 id="h2clientext" align="center">
          CLIENTS
        </h2>
        <div
          className="col s6 row valign-wrapper"
          class="center-align"
          id="clientdiscription"
        >
          <div>
            SINCE 1998, we've designed and coded over 5,000 award-winning web
            <br />
            design and website development projects on budget and on-time for
            <br />
            over 1,000 start-ups tp fortune 100 companies in almost every
            <br />
            industry you can think of and created powerful digital marketing
            <br />
            programs for customer acquisition,
            <br />
            Did we mention we have a 99% cleint retention rate?
          </div>
          <div className="row container img-responsive lazyloading">
            <img
              src="https://ddgsb4yncp1w5.cloudfront.net/wp-content/themes/loungelizard/images/logos_left_2.jpg"
              style={{
                marginTop: "70px",
                marginbottom: "20px",
                height: "100%",
                width: "100%"
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}
