import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./css/Aboutus.css";

class Aboutus extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="bg-imgg"></div>
        <br></br>
        <h1 clssName="text-center">
          <strong> Travel Agency in Kerala ...GoTrip... </strong>
        </h1>
        <br></br>
        <h6 className="text-center">
          Funday Holidays was established in 2013, as an international Travel
          Management Organization with its Headquarters in Kochi. Being an
          expert in designing and executing holiday plans, we aspire to provide
          the best holiday experience for vacationers. Our major focus is to
          provide tailor-made tour packages for solo and group travelers. As an
          experienced team with in-depth knowledge and expertise in the field of
          travel and tourism, Funday Holiday is known for providing an engaging
          travel experience
        </h6>
        <br></br>

        <Footer />
      </div>
    );
  }
}
export default Aboutus;
