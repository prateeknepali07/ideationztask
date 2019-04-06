import React, { Component } from "react";

export default class footer extends Component {
  render() {
    return (
      <div>
        <footer class="page-footer blue darken-1">
          <div class="container">
            <div class="row ">
              <div class="col l6 s12">
                <h5 class="white-text">Footer Content</h5>
                <p class="grey-text text-lighten-4 ">
                  A-4/81 Cottage Enclave
                  <br />
                  Paschim vihar East <br />
                  Metro station
                  <br />
                  New Delhi
                </p>
              </div>
              <div class="col l4 offset-l2 s12" id="social_icons">
                <div class="row">
                  <div class="col s12 m6">
                    <div class="row">
                      <div class="input-field col s12 ">
                        <input
                          type="text"
                          id="autocomplete-input"
                          class="autocomplete"
                        />
                        <label for="autocomplete-input">Name</label>
                      </div>
                    </div>
                  </div>
                  <div class="col s12 m6">
                    <div class="row">
                      <div class="input-field col s12">
                        <input
                          type="text"
                          id="autocomplete-input"
                          class="autocomplete"
                        />
                        <label for="autocomplete-input">Email</label>
                      </div>
                    </div>
                  </div>
                  <div class="col s12 m6">
                    <div class="row">
                      <div class="input-field col s12">
                        <input
                          type="text"
                          id="autocomplete-input"
                          class="autocomplete"
                        />
                        <label for="autocomplete-input">Phone No</label>
                      </div>
                    </div>
                  </div>
                  <div class="col s12 m6">
                    <div class="row">
                      <div class="input-field col s12">
                        <input
                          type="number"
                          id="autocomplete-input"
                          class="autocomplete"
                        />
                        <label for="autocomplete-input">ID Number</label>
                      </div>
                    </div>
                  </div>
                  <ul>
                    <i class="fab fa-facebook" />

                    <i class="fab fa-linkedin-in" />

                    <i class="fab fa-instagram" />

                    <i class="fab fa-github" />

                    <i class="fab fa-youtube" />
                  </ul>
                </div>
              </div>
            </div>
            <div class="footer-copyright">
              <div class="container" id="footer">
                degined by Prateek
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
