import React, { Component } from "react";
import "./css/Home.css";
import img1 from "../../assets/train.jpg";
import img2 from "../../assets/tiger.jpg";
import img3 from "../../assets/sigiri.jpeg";
import img4 from "../../assets/poll.jpg";

class Home extends Component {
  render() {
    return (
      <div id="content-body">
        <div
          id="mycarousel"
          className="carousel slide carousel-fade"
          data-ride="carousel"
          data-interval="8000"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carousel-slider"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carousel-slider" data-slide-to="1"></li>
            <li data-target="#carousel-slider" data-slide-to="2"></li>
            <li data-target="#carousel-slider" data-slide-to="3"></li>
          </ol>
          <div className="carousel-inner" roll="listbox">
            <div className="carousel-item ">
              <img className="slide animated pulse" src={img1} alt="" />
              <div className="container">
                <div className="carousel-caption">
                  <h1 className="item animated pulse">
                    Welcome Supplier to help
                  </h1>
                  {/* <p>ID: {this.props.params.email}</p> */}
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="slide animated pulse" src={img2} alt="" />
              <div className="carousel-caption">
                <div className="container">
                  <h1 className="item animated pulse">
                    Welcome Supplier to help
                  </h1>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="slide animated pulse" src={img3} alt="" />
              <div className="carousel-caption">
                <h1 className="item animated pulse">
                  Welcome Supplier to help
                </h1>
              </div>
            </div>
            <div className="carousel-item active">
              <img className="slide animated pulse" src={img4} alt="" />
              <div className="carousel-caption">
                <h1 className="item animated pulse">
                  Welcome Supplier to help
                </h1>
              </div>
            </div>
          </div>
        </div>

        <p>
          Kerala has an endless list of tourist destinations that will interest
          any traveller. Renowned for its scenic locations and natural beauty,
          Kerala is sure to enchant any nature lover with its hills, backwaters,
          beaches, waterfalls and wildlife. The state also has a rich heritage
          and thriving culture one can explore by visiting the various forts,
          palaces, museums, monuments and pilgrim centers. Both natural and
          manmade brilliance await you at every turn.
        </p>
      </div>
    );
  }
}
export default Home;
