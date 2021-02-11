import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./css/pkg-beach.css";
import pinnawala from "../../assets/pinnawala.jpg";
import sigiriya from "../../assets/sigiriya.jpg";
import dambulla from "../../assets/dambulla.jpg";
import nuwaraeli from "../../assets/nuwaraeli.jpg";
import udawalawa from "../../assets/udawalawa.jpg";

class WildLife extends Component {
  render() {
    return (
      <div>
        <Header />
        <main className="inner cover lead" role="main">
          <div id="jumb_b" class="jumbotron jumbotron-fluid">
            <div id="pkg-detail" className="card">
              <div class="card-body">BEACH TOUR</div>
            </div>
          </div>
          <div id="description" class="card">
            <div id="desc" class="card-body">
              <font class="font-weight-bold">TOUR </font>Cherai Beach, Kochi
              <br />
              <p>
                Around two dozen kilometres from the industrial district of
                Ernakulam and to the side of the Vypeen Island lies every
                swimmer’s paradise, Cherai Beach. It is a favourite haunt of
                those looking for a relaxing swim with the backdrop of coconut
                groves being the added incentive.{" "}
              </p>
            </div>
          </div>
          <br /> <br /> <br />
          <div id="description" class="card">
            <div id="desc" class="card-body">
              <div class="row">
                <div class="col-sm-4" align="left">
                  <img class="card-img-top" src={pinnawala} alt="" />
                </div>
                <div id="desc" class="col-sm-8" align="left">
                  <span class="badge badge-secondary"> DAY 01</span>
                  <br />
                  <br />
                  <p class="font-weight-bold"> ARRIVAL -Backwater</p>

                  <p>
                    The scenic backwaters of Kerala comprise serene stretches of
                    lakes, canals and lagoons located parallel to the coast of
                    the Arabian Sea. The backwater regions of Kerala are one of
                    the most popular tourist destinations in the world. The
                    tranquil backwater cruises are a once in a lifetime
                    experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="description" class="card">
            <div id="desc" class="card-body">
              <div class="row">
                <div class="col-sm-4" align="left">
                  <img class="card-img-top" src={sigiriya} alt="" />
                </div>
                <div id="desc" class="col-sm-8" align="left">
                  <span class="badge badge-secondary"> DAY 02</span>
                  <br />
                  <br />
                  <p class="font-weight-bold"> Munnar</p>

                  <p>
                    {" "}
                    Echo Point in Munnar We all love places and experiences
                    where we can reconnect with the child inside us. The
                    childlike enthusiasm with which all our guests yell to their
                    hearts content at this wonderful location is a truly
                    endearing sight.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="description" class="card">
            <div id="desc" class="card-body">
              <div class="row">
                <div class="col-sm-4" align="left">
                  <img class="card-img-top" src={dambulla} alt="" />
                </div>
                <div id="desc" class="col-sm-8" align="left">
                  <span class="badge badge-secondary"> DAY 03</span>
                  <br /> <br />
                  <p class="font-weight-bold">Kalvary Mount </p>
                  <p>
                    Kalvary Mount or Kalliyanathandu is a famous Christian
                    pilgrimage site perched atop a hill offers that an aerial
                    view of the Idukki Reservoir and its surrounding peaks and
                    forests. It is also an ideal place for mountain climbers and
                    trekkers.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="description" class="card">
            <div id="desc" class="card-body">
              <div class="row">
                <div class="col-sm-4" align="left">
                  <img class="card-img-top" src={nuwaraeli} alt="" />
                </div>
                <div id="desc" class="col-sm-8" align="left">
                  <span class="badge badge-secondary"> DAY 04</span>
                  <br />
                  <br />
                  <p class="font-weight-bold"> Ilaveezhapoonchira</p>

                  <p>
                    IlaveezhapoonchiraView from Ilaveezhapoonchira View from
                    Ilaveezhapoonchira Known as the land of letters, latex and
                    lakes, Kottayam is among the most prominent districts in
                    Kerala. Here lies the beautiful valley of
                    Ilaveezhapoonchira, one amongst the many prime picnicking
                    spots in the area. The beautiful hillocks near Kanjar are
                    known to have great trails for trekking.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="description" class="card">
            <div id="desc" class="card-body">
              <div class="row">
                <div class="col-sm-4" align="left">
                  <img class="card-img-top" src={udawalawa} alt="" />
                </div>
                <div id="desc" class="col-sm-8" align="left">
                  <span class="badge badge-secondary"> DAY 05</span>
                  <br />
                  <br />
                  <p class="font-weight-bold"> Kundala Town</p>

                  <p>
                    While traversing the swaying uphill route to Top Station, a
                    pit stop at beautiful Kundala Town can be a refreshing
                    experience. The gigantic Kundala Tea Plantations, Kundala
                    Lake
                  </p>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div class="botton" align="center">
            <button type="button" class="btn btn-info ">
              Book Now
            </button>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </main>

        <Footer />
      </div>
    );
  }
}
export default WildLife;
