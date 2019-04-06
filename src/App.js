import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Carousel from "./components/Carousel/Carousel";
import "./App.css";
import firebase from "./fire";
import Slick from "react-slick";
import Clientinfo from "./components/Client/clientinfo";
import Clientalks from "./components/clientalks/clientalks";
import Footer from "./components/Footer/footer";

class App extends Component {
  componentDidMount() {
    window.M.AutoInit();
  }
  render() {
    return (
      <div className="App" style={{ overflowX: "hidden" }}>
        <Navbar />
        <Carousel />
        <Clientalks />
        <Clientinfo />
        <Footer />
      </div>
    );
  }
}

export default App;
