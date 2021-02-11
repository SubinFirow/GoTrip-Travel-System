import React, { Component } from "react";
import "./css/Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer id="footsup">
        <div className="row">
          <div class="col-sm-3">
            <h5>What Can Do</h5>
            <br></br>
            Book Tour Package
            <br></br>
            Book Vehicle
            <br></br>
            Book Hotel
            <br></br>
            Create Your Tour
          </div>

          <div class="col-sm-3">
            <h5>Contact Us</h5>
            <br></br>
            Mobile: 99999999
            <br></br>
            E-mail: EmailID@gmail.com
            <br></br>
            Fb: FB Account
            <br></br>
            Insta: Insta Account
          </div>
          <div class="col-sm-3"></div>

          <div class="col-sm-3">
            <h5>Made by Avionics</h5>
          </div>
        </div>
        <br></br>
        <br></br>
        <h6 class="text-center"> © 2019 All Rights Reserved by GoTrip Team.</h6>
      </footer>
    );
  }
}
export default Footer;
